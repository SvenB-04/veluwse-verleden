"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import { useState } from "react";
import { useRouter } from "next/navigation";

function checkOrder(order: string[]): { isCorrect: boolean, errors: number } {
    const correct = ['graaf','doden','grafgifts','hout', 'zand', 'bloemen'];
    if (order.length !== correct.length) {
        return { isCorrect: false, errors: Math.abs(correct.length - order.length) };
    }
    let errors = 0;
    for (let i = 0; i < correct.length; i++) {
        if (order[i] !== correct[i]) errors++;
    }
    return { isCorrect: errors === 0, errors };
}
//graf graven via schep, doe doden en grafgifts in graf, gebruik hout voor palen, plag voor heuvel, bloemen voor versiering. juiste volgorde → animatie van voltooiing.
export default function GrafheuvelsOnder() {
    useAFKHandler(60000);
    const [order, setOrder] = useState<string[]>([]);
    const [gameState, setGameState] = useState<'playing' | 'correct' | 'incorrect'>('playing');
    const router = useRouter();

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const id = e.currentTarget.dataset.id;
        if (id) {
            e.dataTransfer.setData('text/plain', id);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        if (id && !order.includes(id) && gameState === 'playing') {
            setOrder(prev => [...prev, id]);
        }
    };

    const handleCheck = () => {
        const result = checkOrder(order);
        if (result.isCorrect) {
            setGameState('correct');
        } else {
            setGameState('incorrect');
        }
    };

    const handlePlayAgain = () => {
        setOrder([]);
        setGameState('playing');
    };

    const handleGoBack = () => {
        router.push('/');
    };

    if (gameState === 'correct') {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>Gefeliciteerd!</h1>
                <p>Je hebt de grafheuvel correct gebouwd!</p>
                <button onClick={handleGoBack} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Terug naar hoofdpagina</button>
            </div>
        );
    }

    if (gameState === 'incorrect') {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>Helaas!</h1>
                <p>De volgorde is niet correct. Probeer het opnieuw.</p>
                <div className="mt-4">
                    <button onClick={handlePlayAgain} className="mr-4 px-4 py-2 bg-green-500 text-white rounded">Opnieuw spelen</button>
                    <button onClick={handleGoBack} className="px-4 py-2 bg-blue-500 text-white rounded">Terug naar hoofdpagina</button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col items-center justify-center h-screen">
                <h1>Grafheuvels Onderbouw</h1>
                <p>Welkom bij Bouw je eigen Grafheuvel.</p>
                <li>gameplay</li>
                <ul>
                    <li>Sleep zand, stenen, hout en bloemen naar de juiste plek</li>
                    <li>Bouw stap voor stap een grafheuvel</li>
                    <li>Als alles goed ligt → animatie van voltooiing 🎉</li>
                </ul>
            </div>
            <div className="mt-8">
                <div className="mb-4" onDragOver={e => e.preventDefault()} onDrop={handleDrop}>
                    <h2>Grafheuvel Bouwplaats</h2>
                    <p>Huidige volgorde: {order.join(', ')}</p>
                </div>
            </div>
            <div>
                <div draggable="true" data-id="graaf" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/grafheuvels/schep.svg')", width: 100, height: 100 }}></div>
                <div draggable="true" data-id="doden" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/grafheuvels/doden.svg')", width: 100, height: 100 }}></div>
                <div draggable="true" data-id="grafgifts" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/grafheuvels/grafgifts.svg')", width: 100, height: 100 }}></div>
                <div draggable="true" data-id="zand" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/grafheuvels/zand.svg')", width: 100, height: 100 }}>
                </div>
                <div draggable="true" data-id="hout" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/grafheuvels/hout.svg')", width: 100, height: 100 }}>
                </div>
                <div draggable="true" data-id="bloemen" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/grafheuvels/bloemen.svg')", width: 100, height: 100 }}>
                </div>
            </div>
            <button onClick={handleCheck} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Check Volgorde</button>
        </div>
    );
}