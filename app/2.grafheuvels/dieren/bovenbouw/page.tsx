"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ChoiceModal from "@/components/ChoiceModel";
import { useAFKHandler } from "@/hooks/useAFKHandler";

type Strategy = "low" | "medium" | "high";
type HistoryItem = {
  year: number;
  sheep: number;
  hunting: Strategy;
  landscape: "bos" | "grasland" | "heide";
  message: string;
};

const sheepLevels: Record<Strategy, number> = {
  low: 2,
  medium: 5,
  high: 8,
};

const sheepLabels: Record<Strategy, string> = {
  low: "Weinig schapen",
  medium: "Gemiddelde veeteelt",
  high: "Veel schapen",
};

const huntingLabels: Record<Strategy, string> = {
  low: "Rustige jacht",
  medium: "Gebalanceerde jacht",
  high: "Intensieve jacht",
};

const evaluateRound = (sheepCount: number, hunting: Strategy) => {
  let landscape: "bos" | "grasland" | "heide";
  let landscapeBonus = 0;
  let landscapeInfo = "";

  if (sheepCount >= 7) {
    landscape = "heide";
    landscapeBonus = 0;
    landscapeInfo = "Te veel schapen begrazen de velden. Hierdoor ontstaat heide en krijgt het dorp minder ruimte.";
  } else if (sheepCount <= 2) {
    landscape = "bos";
    landscapeBonus = 1;
    landscapeInfo = "Te weinig schapen betekent dat het bos terugkeert. Het dorp groeit minder snel, maar de natuur krijgt ruimte.";
  } else {
    landscape = "grasland";
    landscapeBonus = 2;
    landscapeInfo = "Balans in veeteelt zorgt voor grasland. Het dorp kan groeien en de landschapsvorming blijft in evenwicht.";
  }

  let wildlifeBonus = 0;
  let huntingInfo = "";
  if (hunting === "low") {
    wildlifeBonus = 2;
    huntingInfo = "Rustige jacht beschermt de wilde dieren en behoudt het ecosysteem.";
  } else if (hunting === "medium") {
    wildlifeBonus = 1;
    huntingInfo = "Gemiddelde jacht houdt het systeem in evenwicht zonder de wilde dieren te veel te verstoren.";
  } else {
    wildlifeBonus = -1;
    huntingInfo = "Intensieve jacht drukt de wilde dieren terug en kan gevolgen hebben voor het landschap op langere termijn.";
  }

  const roundMessage = `${sheepCount === sheepLevels.low ? sheepLabels.low : sheepCount === sheepLevels.high ? sheepLabels.high : sheepLabels.medium} en ${huntingLabels[hunting]}. ${landscapeInfo} ${huntingInfo}`;
  return {
    landscape,
    landscapeBonus,
    wildlifeBonus,
    roundMessage,
  };
};

export default function DierenBoven() {
  useAFKHandler(60000, "/2.grafheuvels");
  const router = useRouter();
  const [year, setYear] = useState(1);
  const [open, setOpen] = useState(false);
  const [sheepStrategy, setSheepStrategy] = useState<Strategy>("medium");
  const [huntingStrategy, setHuntingStrategy] = useState<Strategy>("medium");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [score, setScore] = useState(0);
  const [finalMessage, setFinalMessage] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [roundMessage, setRoundMessage] = useState(
    "Kies jouw strategie voor jacht en veeteelt. Je keuzes vormen de landschapsontwikkeling."
  );

  const maxYears = 5;
  const currentSheepCount = sheepLevels[sheepStrategy];
  const gameOver = year > maxYears;

  const getLandscapeLabel = (landscape: "bos" | "grasland" | "heide") => {
    if (landscape === "bos") return "Bos";
    if (landscape === "heide") return "Heide";
    return "Grasland";
  };

  const handleNextYear = () => {
    if (gameOver) return;

    const { landscape, landscapeBonus, wildlifeBonus, roundMessage: message } = evaluateRound(
      currentSheepCount,
      huntingStrategy
    );

    const nextScore = score + landscapeBonus + wildlifeBonus;
    setScore(nextScore);
    setHistory((prev) => [
      ...prev,
      {
        year,
        sheep: currentSheepCount,
        hunting: huntingStrategy,
        landscape,
        message,
      },
    ]);

    if (year === maxYears) {
      const grasslandCount = history.filter((item) => item.landscape === "grasland").length + (landscape === "grasland" ? 1 : 0);
      const heideCount = history.filter((item) => item.landscape === "heide").length + (landscape === "heide" ? 1 : 0);
      const bosCount = history.filter((item) => item.landscape === "bos").length + (landscape === "bos" ? 1 : 0);
      const finalEvaluation =
        grasslandCount >= 3
          ? "Je vond de beste balans: grasland ontstaat en het dorp kan groeien."
          : heideCount > bosCount
          ? "Je koos te vaak voor veel schapen: overbegrazing maakte heide."
          : "Je koos te vaak voor weinig schapen: bos kreeg meer ruimte.";

      setFinalMessage(
        `Einde van het spel. ${finalEvaluation} Je hebt ${grasslandCount} van de ${maxYears} jaren grasland gecreëerd. Je eindscore is ${nextScore} punten.`
      );
      setModalOpen(true);
    }

    setRoundMessage(message);
    setYear((prev) => prev + 1);
  };

  const resetGame = () => {
    setYear(1);
    setSheepStrategy("medium");
    setHuntingStrategy("medium");
    setHistory([]);
    setScore(0);
    setRoundMessage("Kies jouw strategie voor jacht en veeteelt. Je keuzes vormen de landschapsontwikkeling.");
    setFinalMessage("");
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-3xl bg-white p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-3">Dieren Bovenbouw</h1>
          <div className="bg-green-200 border-2 border-green-700 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-green-900 mb-3">🎮 Hoe speel je dit spel?</h2>
            <p className="text-green-900 mb-2"><strong>Doel:</strong> Ontdek hoe schapenfokkerij en jacht het landschap veranderen</p>
            <p className="text-green-900 mb-2"><strong>Per ronde:</strong> Kies hoeveel schapen je teelt en hoe intensief je jaagt</p>
            <p className="text-green-900 mb-2"><strong>Gevolgen:</strong> Dit bepaalt of je landschap bos, grasland of heide wordt</p>
            <p className="text-green-900 mb-2"><strong>Wat je leert:</strong> Hoe menselijke activiteiten het Veluws natuurgebied vormden</p>
            <p className="text-green-900 text-sm mt-2">💡 <em>Tip: Balans is belangrijk! Te veel schapen = heide. Te weinig = terugkeer van het bos!</em></p>
          </div>
          <p className="text-lg leading-8 text-slate-700 mb-6">
            Beheer jacht, veeteelt en laat zien hoe overbegrazing of balans het landschap beïnvloedt.
            Te veel schapen geeft heide, te weinig schapen geeft bos en balans geeft grasland en dorpsgroei.
          </p>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <section className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-3">Jouw keuze voor jaar {Math.min(year, maxYears)}</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-5 shadow-inner">
                    <h3 className="font-semibold mb-3">Veeteelt</h3>
                    <div className="flex flex-col gap-2">
                      {(["low", "medium", "high"] as Strategy[]).map((strategy) => (
                        <button
                          key={strategy}
                          onClick={() => setSheepStrategy(strategy)}
                          className={`rounded-2xl px-4 py-3 text-left transition ${
                            sheepStrategy === strategy
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                          }`}
                        >
                          <div className="font-semibold">{sheepLabels[strategy]}</div>
                          <div className="text-sm text-slate-600">
                            {strategy === "low"
                              ? "Weinig schapen, meer ruimte voor bos."
                              : strategy === "medium"
                              ? "Balans: grasland kan ontstaan."
                              : "Veel schapen, risico op overbegrazing."}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-inner">
                    <h3 className="font-semibold mb-3">Jacht</h3>
                    <div className="flex flex-col gap-2">
                      {(["low", "medium", "high"] as Strategy[]).map((strategy) => (
                        <button
                          key={strategy}
                          onClick={() => setHuntingStrategy(strategy)}
                          className={`rounded-2xl px-4 py-3 text-left transition ${
                            huntingStrategy === strategy
                              ? "bg-emerald-500 text-white"
                              : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                          }`}
                        >
                          <div className="font-semibold">{huntingLabels[strategy]}</div>
                          <div className="text-sm text-slate-600">
                            {strategy === "low"
                              ? "Milde jacht, meer wilde dieren blijven over."
                              : strategy === "medium"
                              ? "Gebalanceerde jacht voor stabiliteit."
                              : "Sterke jacht, meer druk op het ecosysteem."}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Ronde-rapport</h2>
                <p className="text-slate-700 leading-7">{roundMessage}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Schapen</p>
                    <p className="mt-2 text-3xl font-bold">{currentSheepCount}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Jacht</p>
                    <p className="mt-2 text-3xl font-bold">{huntingLabels[huntingStrategy]}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Score</p>
                    <p className="mt-2 text-3xl font-bold">{score}</p>
                  </div>
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Verloop van het landschap</h2>
                {history.length === 0 ? (
                  <p className="text-slate-600">Je geschiedenis verschijnt na het afronden van een jaar.</p>
                ) : (
                  <div className="space-y-3">
                    {history.slice(-4).reverse().map((item) => (
                      <div key={item.year} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <p className="font-semibold">Jaar {item.year}</p>
                        <p className="text-slate-600">{sheepLabels[item.sheep <= 2 ? "low" : item.sheep >= 7 ? "high" : "medium"]} / {huntingLabels[item.hunting]}</p>
                        <p className="mt-1 text-slate-700">{item.message}</p>
                        <p className="mt-2 text-sm text-slate-500">Resultaat: {getLandscapeLabel(item.landscape)}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Spelregels</h2>
                <ul className="space-y-3 text-slate-600">
                  <li>• Te veel schapen → heide ontstaat.</li>
                  <li>• Te weinig schapen → bos ontstaat.</li>
                  <li>• Balans → grasland ontstaat en het dorp groeit.</li>
                  <li>• De jacht beïnvloedt hoeveel wilde dieren overblijven.</li>
                  <li>• Speel 5 rondes en vergelijk je eindscore met het landschap.</li>
                </ul>
              </div>
            </aside>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              onClick={handleNextYear}
              disabled={gameOver}
              className="rounded-3xl bg-slate-800 px-6 py-3 text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {gameOver ? "Spel voltooid" : `Rond jaar ${Math.min(year, maxYears)} af`}
            </button>
            <button
              onClick={resetGame}
              className="rounded-3xl border border-slate-300 bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-50"
            >
              Herstart spel
            </button>
          </div>
        </div>
      </div>
      <ChoiceModal
        isOpen={modalOpen}
        onClose={() => setOpen(false)}
        message={finalMessage}
        options={[
          {
            content: "Speel opnieuw",
            onClick: () => {
              resetGame();
            },
          },
          {
            content: "Terug naar start",
            onClick: () => {
              router.push("/2.grafheuvels");
            },
          },
        ]}
      />
    </div>
  );
}