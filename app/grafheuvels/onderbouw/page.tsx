"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function GrafheuvelsOnder() {
    useAFKHandler(60000); // 60 segundos sin actividad
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Grafheuvels Onderbouw</h1>
            <p>Welkom bij de grafheuvels voor onderbouw.</p>
            //Groep 3–5: “Bouw je eigen Grafheuvel”
            Type: Drag & drop bouwspel
            Gameplay:

            Sleep zand, stenen, hout en bloemen naar de juiste plek
            Bouw stap voor stap een grafheuvel
            Als alles goed ligt → animatie van voltooiing 🎉

            React technieken:

            useState voor lagen
            Drag & drop (react-dnd of simpele mouse events)
            Progress bar
        </div>
    );
}