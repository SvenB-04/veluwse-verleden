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
    useAFKHandler(60000, "/2.grafheuvels");
    const initialItems = [
        { id: 'graaf', image: '/grafheuvels/schep.svg' },
        { id: 'doden', image: '/grafheuvels/doden.svg' },
        { id: 'grafgifts', image: '/grafheuvels/grafgifts.svg' },
        { id: 'zand', image: '/grafheuvels/zand.svg' },
        { id: 'hout', image: '/grafheuvels/hout.svg' },
        { id: 'bloemen', image: '/grafheuvels/bloemen.svg' },
    ];

    const shuffleArray = <T,>(array: T[]) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const [items, setItems] = useState(() => shuffleArray(initialItems));
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
        setItems(shuffleArray(initialItems));
        setGameState('playing');
    };

    const handleGoBack = () => {
        router.push('/2.grafheuvels');
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
                <h1 className="text-3xl font-bold mb-6">Grafheuvels Onderbouw</h1>
                <div className="bg-purple-100 border-2 border-purple-600 rounded-lg p-6 max-w-2xl mb-6">
                  <h2 className="text-xl font-bold text-purple-800 mb-3">🎮 Hoe speel je dit spel?</h2>
                  <p className="text-purple-900 mb-2"><strong>Doel:</strong> Bouw een grafheuvel door items in de juiste volgorde te plaatsen</p>
                  <p className="text-purple-900 mb-2"><strong>Juiste volgorde:</strong></p>
                  <ol className="text-purple-900 mb-2 ml-4 list-decimal">
                    <li>Graaf het graf (schep)</li>
                    <li>Plaats de doden</li>
                    <li>Voeg grafgifts toe</li>
                    <li>Zet houten palen neer</li>
                    <li>Dek af met zand</li>
                    <li>Versier met bloemen</li>
                  </ol>
                  <p className="text-purple-900 text-sm mt-2">💡 <em>Tip: Think logically about the steps of building a burial mound!</em></p>
                </div>
                <p>Welkom bij Bouw je eigen Grafheuvel.</p>
            <div className="mt-8">
                <div className="mb-4" onDragOver={e => e.preventDefault()} onDrop={handleDrop}>
                    <h2>Grafheuvel Bouwplaats</h2>
                    <p>Huidige volgorde: {order.join(', ')}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {items.map((item) => (
                    <div
                        key={item.id}
                        draggable="true"
                        data-id={item.id}
                        className="p-4 rounded cursor-move"
                        onDragStart={handleDragStart}
                        style={{ backgroundImage: `url('${item.image}')`, width: 100, height: 100 }}
                    ></div>
                ))}
            </div>
            <button onClick={handleCheck} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Check Volgorde</button>
        </div>
    );
}