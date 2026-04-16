"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import { DragEventHandler } from "react";
import { useState } from "react";

function checkOrder(order: string[]): { isCorrect: boolean, errors: number } {
    const correct = ['hout', 'stenen', 'zand', 'bloemen'];
    if (order.length !== correct.length) {
        return { isCorrect: false, errors: Math.abs(correct.length - order.length) };
    }
    let errors = 0;
    for (let i = 0; i < correct.length; i++) {
        if (order[i] !== correct[i]) errors++;
    }
    return { isCorrect: errors === 0, errors };
}

export default function GrafheuvelsOnder() {
    useAFKHandler(60000);
    const [order, setOrder] = useState<string[]>([]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        const id = e.currentTarget.dataset.id;
        if (id) {
            e.dataTransfer.setData('text/plain', id);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        if (id && !order.includes(id)) {
            setOrder(prev => [...prev, id]);
        }
    };

    const result = checkOrder(order);

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
                    <p>{result.isCorrect ? 'Goede volgorde!' : `Fouten: ${result.errors}`}</p>
                </div>
            </div>
            <div>
                <div draggable="true" data-id="zand" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/zand.png')" }}>
                </div>
                <div draggable="true" data-id="stenen" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/stenen.png')" }}>
                </div>
                <div draggable="true" data-id="hout" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/hout.png')" }}>
                </div>
                <div draggable="true" data-id="bloemen" className="p-4 rounded mb-2 cursor-move" onDragStart={handleDragStart} style={{ backgroundImage: "url('/bloemen.png')" }}>
                </div>
            </div>
            <button onClick={() => checkOrder(order)}>Check Volgorde</button>
            //React technieken:
            useState voor lagen
            Drag & drop (react-dnd of simpele mouse events)
            Progress bar
        </div>
    );
}