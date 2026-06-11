"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import { useState } from "react";

//Het zwaard ligt in het midden.

//Spelers krijgen beperkte middelen:

//Voedsel
//Mensen
//Brons
//Vertrouwen

//Ze stemmen of kiezen samen wat ze doen.

//Na keuze start een korte simulatie:

//Oorlog → meer land, minder bevolking
//Offer → meer geloofseenheid
//Diplomatie → handel groeit
//Status → leider krijgt meer invloed

//Na 3 rondes zie je:
//📊 Hoe is jouw bronstijddorp geëindigd?

export default function ZwaardBoven() {
    useAFKHandler(60000, "/2.grafheuvels");

    const [resources, setResources] = useState({ food: 10, people: 10, bronze: 10, trust: 10 });
    const [round, setRound] = useState(1);
    const [gameOver, setGameOver] = useState(false);
    const [simulationResult, setSimulationResult] = useState('');
    const [history, setHistory] = useState<Array<{ round: number; choice: string; result: string }>>([]);

    const makeChoice = (choice: string) => {
        let result = '';
        const newResources = { ...resources };
        switch (choice) {
            case 'oorlog':
                result = 'Oorlog: Meer land veroverd, maar bevolking verminderd.';
                newResources.bronze += 2;
                newResources.people -= 2;
                newResources.food -= 1;
                break;
            case 'offer':
                result = 'Offer: Meer geloofseenheid, maar mensen verloren.';
                newResources.trust += 3;
                newResources.people -= 1;
                break;
            case 'diplomatie':
                result = 'Diplomatie: Handel groeit, meer middelen.';
                newResources.bronze += 1;
                newResources.food += 1;
                newResources.trust += 1;
                break;
            case 'status':
                result = 'Status: Leider krijgt meer invloed, maar kosten.';
                newResources.trust += 2;
                newResources.bronze -= 1;
                break;
        }
        setResources(newResources);
        setHistory([...history, { round, choice, result }]);
        if (round < 3) {
            setRound(round + 1);
        } else {
            setGameOver(true);
            let endResult = '';
            if (newResources.people <= 0) {
                endResult = 'Jouw dorp is uitgestorven.';
            } else if (newResources.trust >= 15) {
                endResult = 'Jouw dorp is een sterke gemeenschap geworden.';
            } else if (newResources.bronze >= 15) {
                endResult = 'Jouw dorp is rijk geworden.';
            } else {
                endResult = 'Jouw dorp heeft overleefd, maar niet gebloeid.';
            }
            setSimulationResult(endResult);
        }
        setSimulationResult(result);
    };

    const resetGame = () => {
        setResources({ food: 10, people: 10, bronze: 10, trust: 10 });
        setRound(1);
        setGameOver(false);
        setSimulationResult('');
        setHistory([]);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
            <h1 className="text-3xl font-bold">Het Zwaard van Keuzes</h1>
            {!gameOver && (
                <div className="bg-yellow-100 border-2 border-yellow-600 rounded-lg p-6 max-w-2xl">
                    <h2 className="text-xl font-bold text-yellow-800 mb-3">🎮 Hoe speel je dit spel?</h2>
                    <p className="text-yellow-900 mb-2"><strong>Doel:</strong> Beheer je bronstijddorp gedurende 3 rondes</p>
                    <p className="text-yellow-900 mb-2"><strong>Je middelen:</strong> Voedsel, Mensen, Brons en Vertrouwen</p>
                    <p className="text-yellow-900 mb-2"><strong>Per ronde:</strong> Kies samen één strategie:</p>
                    <ul className="text-yellow-900 mb-2 ml-4">
                        <li>⚔️ <strong>Oorlog</strong> → Meer brons, minder mensen</li>
                        <li>🙏 <strong>Offer</strong> → Meer vertrouwen, minder mensen</li>
                        <li>🤝 <strong>Diplomatie</strong> → Meer handel en allerlei voordelen</li>
                        <li>👑 <strong>Status</strong> → Meer vertrouwen, minder brons</li>
                    </ul>
                    <p className="text-yellow-900 text-sm">💡 <em>Tip: Zorg dat je volk niet uitsterft! Balanceer je middelen goed!</em></p>
                </div>
            )}
            {!gameOver ? (
                <>
                    <div className="text-lg text-center max-w-md">
                        Het zwaard ligt in het midden. Jullie hebben beperkte middelen: voedsel, mensen, brons en vertrouwen. Stem of kies samen wat jullie doen.
                    </div>
                    <div className="text-center">
                        <p>Ronde: {round}/3</p>
                        <p>Voedsel: {resources.food}</p>
                        <p>Mensen: {resources.people}</p>
                        <p>Brons: {resources.bronze}</p>
                        <p>Vertrouwen: {resources.trust}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <button onClick={() => makeChoice('oorlog')} className="px-4 py-2 bg-red-500 text-white rounded">Oorlog</button>
                        <button onClick={() => makeChoice('offer')} className="px-4 py-2 bg-purple-500 text-white rounded">Offer</button>
                        <button onClick={() => makeChoice('diplomatie')} className="px-4 py-2 bg-blue-500 text-white rounded">Diplomatie</button>
                        <button onClick={() => makeChoice('status')} className="px-4 py-2 bg-green-500 text-white rounded">Status</button>
                    </div>
                    {simulationResult && <p className="text-center max-w-md">{simulationResult}</p>}
                </>
            ) : (
                <>
                    <p className="text-lg text-center max-w-md">
                        📊 Hoe is jouw bronstijddorp geëindigd?
                    </p>
                    <p className="text-xl font-bold text-center">{simulationResult}</p>
                    <div className="text-center">
                        <p>Eindstand:</p>
                        <p>Voedsel: {resources.food}</p>
                        <p>Mensen: {resources.people}</p>
                        <p>Brons: {resources.bronze}</p>
                        <p>Vertrouwen: {resources.trust}</p>
                    </div>
                    <button onClick={resetGame} className="px-4 py-2 bg-gray-500 text-white rounded">Speel opnieuw</button>
                    <button onClick={() => window.location.href = "/2.grafheuvels"} className="px-4 py-2 bg-gray-700 text-white rounded">Terug naar Grafheuvels</button>
                </>
            )}
            {history.length > 0 && (
                <div className="text-center">
                    <h2>Geschiedenis:</h2>
                    {history.map((h, i) => (
                        <p key={i}>Ronde {h.round}: {h.result}</p>
                    ))}
                </div>
            )}
        </div>
    );
}