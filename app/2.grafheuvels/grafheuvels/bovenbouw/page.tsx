"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAFKHandler } from "@/hooks/useAFKHandler";

const relikwieën = [
  { name: "Bronzen dolk", image: "/grafheuvels/dolk.svg" },
  { name: "Klokbeker", image: "/grafheuvels/klokbeker.svg" },
  { name: "Sieraden", image: "/grafheuvels/sieraden.svg" },
];

function createLayerItem(): string | null {
  const random = Math.random();
  // verhoogde kans om een voorwerp te vinden (80%)
  if (random < 0.8) {
    return relikwieën[Math.floor(Math.random() * relikwieën.length)].name;
  }
  return null;
}

function getItemImage(itemName: string | null) {
  if (!itemName) return null;
  return relikwieën.find((item) => item.name === itemName)?.image || null;
}

function determineCorrectStatus(foundItems: string[]) {
  if (foundItems.includes("Bronzen dolk")) return "strijder";
  if (foundItems.includes("Sieraden") || foundItems.includes("Klokbeker")) return "belangerijk persoon";
  return "gewone persoon";
}

export default function GrafheuvelsBoven() {
  const router = useRouter();
  const [layerItem, setLayerItem] = useState<string | null>(createLayerItem);
  const [itemShown, setItemShown] = useState(false);
  const [layerRemoved, setLayerRemoved] = useState(false);
  const [foundItems, setFoundItems] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(120);
  const [gameState, setGameState] = useState<'playing' | 'ended'>('playing');
  const [endReason, setEndReason] = useState<'time' | 'incorrect' | null>(null);

  useAFKHandler(60000, "/2.grafheuvels");

  useEffect(() => {
    if (gameState !== 'playing') return;

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => {
        if (current <= 1) {
          window.clearInterval(timer);
          setGameState('ended');
          setEndReason('time');
          return 0;
        }
        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [gameState]);

  const resetLayerState = () => {
    setLayerItem(createLayerItem());
    setItemShown(false);
    setLayerRemoved(false);
    setFoundItems([]);
  };

  const handlePlayAgain = () => {
    setScore(0);
    setSecondsLeft(120);
    setGameState('playing');
    setEndReason(null);
    resetLayerState();
  };

  const handleGoBack = () => {
    router.push('/2.grafheuvels');
  };

  const removeLayer = () => {
    if (gameState !== 'playing' || layerRemoved) return;

    if (layerItem && !itemShown) {
      setItemShown(true);
      setFoundItems((current) => [...current, layerItem]);
      window.setTimeout(() => {
        setLayerRemoved(true);
      }, 2000);
    } else {
      setLayerRemoved(true);
    }
  };

  const handleCheckStatus = (chosenStatus: string) => {
    if (gameState !== 'playing') return;

    const correctStatus = determineCorrectStatus(foundItems);
    if (chosenStatus === correctStatus) {
      setScore((current) => current + 1);
      resetLayerState();
    } else {
      setGameState('ended');
      setEndReason('incorrect');
    }
  };

  if (gameState === 'ended') {
    const endText = endReason === 'time' ? 'De tijd is om!' : 'Je statuskeuze was niet correct.';
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1>Spel beëindigd</h1>
        <p>{endText}</p>
        <p>Score: {score}</p>
        <div className="flex gap-3">
          <button onClick={handlePlayAgain} className="px-4 py-2 bg-green-600 text-white rounded">Opnieuw proberen</button>
          <button onClick={handleGoBack} className="px-4 py-2 bg-blue-600 text-white rounded">Terug naar hoofdpagina</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <div className="text-center">
        <h1>Grafheuvels Bovenbouw</h1>
        <p>Welkom bij de grafheuvels voor bovenbouw.</p>
        <p>Score: {score}</p>
        <p>Tijd over: {secondsLeft}s</p>
        <p>Gevonden voorwerpen: {foundItems.length > 0 ? foundItems.join(', ') : 'Geen'}</p>
      </div>

      <div className="relative" style={{ width: '400px', height: '400px' }}>
        <div style={{ backgroundImage: 'url("/grafheuvels/grond.svg")' }} className="absolute inset-0"></div>
        <div style={{ backgroundImage: 'url("/grafheuvels/hout.svg")' }} className="absolute inset-0"></div>
        <div
          style={{
            backgroundImage: 'url("/grafheuvels/steen.svg")',
            display: layerRemoved ? 'none' : 'block',
          }}
          className="absolute inset-0"
          onClick={() => removeLayer()}
        />

        {/* Toon het gevonden voorwerp duidelijk bovenop, ook nadat de laag is verwijderd */}
        {itemShown && layerItem && (
          <div className="absolute" style={{ left: '50%', top: '55%', transform: 'translate(-50%, -50%)', zIndex: 30 }}>
            <img
              src={getItemImage(layerItem) || ''}
              alt={layerItem ?? ''}
              style={{ width: '140px', height: '140px', display: 'block' }}
            />
          </div>
        )}
        <div style={{ backgroundImage: 'url("/bloemen.png")' }} className="absolute inset-0"></div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <h2>Documentatie</h2>
        <p>Bepaal met behulp van de gevonden voorwerpen de status van de persoon die hier begraven is.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => handleCheckStatus('belangerijk persoon')} className="px-4 py-2 bg-gray-700 text-white rounded">belangerijk persoon</button>
          <button onClick={() => handleCheckStatus('gewone persoon')} className="px-4 py-2 bg-gray-700 text-white rounded">gewone persoon</button>
          <button onClick={() => handleCheckStatus('strijder')} className="px-4 py-2 bg-gray-700 text-white rounded">strijder</button>
        </div>
      </div>
    </div>
  );
}
