"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import { useRouter } from "next/navigation";
import { useState } from "react";

//Gameplay

//Stap 1 – Verzamel materialen
//Kinderen slepen:
//🟠 Koper
//⚪ Tin
//🔥 Hout voor vuur

//Stap 2 – Smelten
//Ze moeten de juiste verhouding kiezen (visueel: twee bakken vullen).

//Stap 3 – Gieten
//Ze gieten vloeibaar brons in een zwaardvorm.

//Stap 4 – Versieren
//Ze kiezen patronen.

//Als het goed gaat → het zwaard glanst spectaculair ✨

//Wat leren ze?
//Brons = koper + tin
//Vuur is belangrijk
//Vakmanschap

type GameStep = 1 | 2 | 3 | 4 | "complete";

interface Materials {
    koper: number;
    tin: number;
    hout: number;
}

interface SmellingRatio {
    koper: number;
    tin: number;
}

export default function ZwaardOnder() {
    useAFKHandler(60000, "/2.grafheuvels");
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState<GameStep>(1);
    const [collectedMaterials, setCollectedMaterials] = useState<Materials>({ koper: 0, tin: 0, hout: 0 });
    const [smellingRatio, setSmellingRatio] = useState<SmellingRatio>({ koper: 0, tin: 0 });
    const [selectedPattern, setSelectedPattern] = useState<string>("");
    const [swordQuality, setSwordQuality] = useState<"good" | "bad" | null>(null);

    const patterns = ["Golven", "Sterren", "Draak", "Runen"];

    // Stap 1: Materialen verzamelen
    const collectMaterial = (material: keyof Materials) => {
        setCollectedMaterials(prev => ({
            ...prev,
            [material]: prev[material] + 1
        }));
    };

    const allMaterialsCollected = collectedMaterials.koper > 0 && collectedMaterials.tin > 0 && collectedMaterials.hout > 0;

    // Stap 2: Smelten - juiste verhouding
    const adjustSmeltRatio = (material: keyof SmellingRatio, amount: number) => {
        setSmellingRatio(prev => ({
            ...prev,
            [material]: Math.max(0, prev[material] + amount)
        }));
    };

    const isCorrectRatio = smellingRatio.koper === 2 && smellingRatio.tin === 1;

    // Stap 3: Gieten
    const pourBronze = () => {
        if (isCorrectRatio) {
            setCurrentStep(4);
        } else {
            alert("De verhouding is niet correct! Het zwaard wordt niet goed.");
            setSwordQuality("bad");
        }
    };

    // Stap 4: Versieren
    const decorateSword = () => {
        if (selectedPattern) {
            setSwordQuality("good");
            setCurrentStep("complete");
        } else {
            alert("Kies eerst een patroon!");
        }
    };

    const resetGame = () => {
        setCurrentStep(1);
        setCollectedMaterials({ koper: 0, tin: 0, hout: 0 });
        setSmellingRatio({ koper: 0, tin: 0 });
        setSelectedPattern("");
        setSwordQuality(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 bg-gradient-to-b from-amber-50 to-orange-100">
            <h1 className="text-4xl font-bold text-amber-900">Het Zwaard van Brons</h1>
            
            {currentStep === 1 && (
                <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-6 max-w-2xl">
                    <h2 className="text-xl font-bold text-blue-800 mb-3">🎮 Hoe speel je dit spel?</h2>
                    <p className="text-blue-900 mb-2"><strong>Stap 1:</strong> Verzamel alle drie materialen (Koper, Tin en Hout)</p>
                    <p className="text-blue-900 mb-2"><strong>Stap 2:</strong> Stel de juiste verhouding in</p>
                    <p className="text-blue-900 mb-2"><strong>Stap 3:</strong> Giet het vloeibare brons in de zwaardvorm</p>
                    <p className="text-blue-900"><strong>Stap 4:</strong> Versier je zwaard met een mooi patroon</p>
                    <p className="text-blue-900 mt-3 text-sm">💡 <em>Tip: Brons is een mengsel van koper en tin. De juiste verhouding is belangrijk!</em></p>
                </div>
            )}

            {/* Stap 1: Verzamel materialen */}
            {currentStep === 1 && (
                <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                    <h2 className="text-2xl font-semibold">Stap 1: Verzamel Materialen</h2>
                    <p className="text-center">Sleep de materialen naar je verzamelingsbak:</p>

                    <div className="flex gap-8 flex-wrap justify-center">
                        <button onClick={() => collectMaterial("koper")} className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
                            🟠 Koper ({collectedMaterials.koper})
                        </button>
                        <button onClick={() => collectMaterial("tin")} className="bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-500">
                            ⚪ Tin ({collectedMaterials.tin})
                        </button>
                        <button onClick={() => collectMaterial("hout")} className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800">
                            🔥 Hout ({collectedMaterials.hout})
                        </button>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-lg font-semibold">Verzamelde materialen:</p>
                        <p>Koper: {collectedMaterials.koper} | Tin: {collectedMaterials.tin} | Hout: {collectedMaterials.hout}</p>
                    </div>

                    <button
                        onClick={() => setCurrentStep(2)}
                        disabled={!allMaterialsCollected}
                        className={`mt-4 px-6 py-3 rounded-lg font-semibold ${allMaterialsCollected ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                    >
                        Volgende Stap
                    </button>
                </div>
            )}

            {/* Stap 2: Smelten */}
            {currentStep === 2 && (
                <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                    <h2 className="text-2xl font-semibold">Stap 2: Smelten in de Oven</h2>
                    <p className="text-center">Kies de juiste verhouding</p>

                    <div className="flex gap-8">
                        <div className="bg-orange-100 p-6 rounded-lg border-2 border-orange-500">
                            <p className="font-semibold text-orange-900">Koper:</p>
                            <div className="flex gap-2 mt-2">
                                <button onClick={() => adjustSmeltRatio("koper", -1)} className="bg-red-500 text-white px-3 py-1 rounded">-</button>
                                <span className="text-2xl font-bold">{smellingRatio.koper}</span>
                                <button onClick={() => adjustSmeltRatio("koper", 1)} className="bg-green-500 text-white px-3 py-1 rounded">+</button>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-500">
                            <p className="font-semibold text-gray-900">Tin:</p>
                            <div className="flex gap-2 mt-2">
                                <button onClick={() => adjustSmeltRatio("tin", -1)} className="bg-red-500 text-white px-3 py-1 rounded">-</button>
                                <span className="text-2xl font-bold">{smellingRatio.tin}</span>
                                <button onClick={() => adjustSmeltRatio("tin", 1)} className="bg-green-500 text-white px-3 py-1 rounded">+</button>
                            </div>
                        </div>
                    </div>

                    {isCorrectRatio && <p className="text-green-600 font-semibold text-lg">✓ Perfect! De verhouding is correct!</p>}
                    {smellingRatio.koper > 0 && smellingRatio.tin > 0 && !isCorrectRatio && (
                        <p className="text-orange-600 font-semibold text-lg">⚠ Niet helemaal goed. Probeer 2:1 verhouding</p>
                    )}

                    <button
                        onClick={() => setCurrentStep(3)}
                        disabled={!isCorrectRatio}
                        className={`mt-4 px-6 py-3 rounded-lg font-semibold ${isCorrectRatio ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                    >
                        Volgende Stap
                    </button>
                </div>
            )}

            {/* Stap 3: Gieten */}
            {currentStep === 3 && (
                <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                    <h2 className="text-2xl font-semibold">Stap 3: Gieten van Brons</h2>
                    <p className="text-center">Giet het vloeibare brons in de zwaardvorm</p>

                    <div className="text-6xl animate-bounce">🌊</div>
                    <p className="text-xl">Het vloeibare brons stroomt in de vorm...</p>

                    <button
                        onClick={pourBronze}
                        className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-600"
                    >
                        Giet het Brons
                    </button>
                </div>
            )}

            {/* Stap 4: Versieren */}
            {currentStep === 4 && (
                <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg max-w-2xl">
                    <h2 className="text-2xl font-semibold">Stap 4: Versier het Zwaard</h2>
                    <p className="text-center">Kies een patroon voor je zwaard</p>

                    <div className="grid grid-cols-2 gap-4">
                        {patterns.map(pattern => (
                            <button
                                key={pattern}
                                onClick={() => setSelectedPattern(pattern)}
                                className={`px-6 py-3 rounded-lg font-semibold ${selectedPattern === pattern ? "bg-purple-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
                            >
                                {pattern}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={decorateSword}
                        disabled={!selectedPattern}
                        className={`mt-4 px-6 py-3 rounded-lg font-semibold ${selectedPattern ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                    >
                        Afmaken
                    </button>
                </div>
            )}

            {/* Klaar! */}
            {currentStep === "complete" && swordQuality === "good" && (
                <div className="flex flex-col items-center gap-6 bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
                    <h2 className="text-3xl font-bold text-gold">✨ Het Zwaard Glanst! ✨</h2>
                    <div className="text-7xl animate-pulse">⚔️</div>
                    <p className="text-xl">
                        Je hebt het perfect gemaakt! Met het patroon "{selectedPattern}" ziet je zwaard er schitterend uit.
                    </p>
                    <p className="text-lg font-semibold text-amber-900">
                        Je hebt geleerd:<br/>
                        • Brons = Koper + Tin<br/>
                        • Het juiste mengsel is belangrijk<br/>
                        • Vakmanschap maakt het verschil
                    </p>
                    <button
                        onClick={resetGame}
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 mt-4"
                    >
                        Opnieuw Spelen
                    </button>
                    <button
                        onClick={() => router.push("/2.grafheuvels")}
                        className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
                    >
                        Terug naar Menu
                    </button>
                </div>
            )}
        </div>
    );
}