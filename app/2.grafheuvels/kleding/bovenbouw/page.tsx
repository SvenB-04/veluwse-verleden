"use client";

import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import KledingBovenKnoppen from "@/components/KledingBovenKnoppen";
import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function KledingBoven() {
    useAFKHandler(60000, "/2.grafheuvels"); 
    const [score, setScore] = useState(0);
    const [showIncorrectAlert, setShowIncorrectAlert] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120);
    const [gameOver, setGameOver] = useState(false);
    const imagetop = [
        //de drie afbeeldingen hieronder zijn goed maar meer moeten worden toegevoegd, deze afbeeldingen moeten uit de andere schoolplaten komen maar wel opdeze manier neergezet met voor elke foute afbeelding een goede afbeelding plus een
        "/kleding/hoofd/Schermafbeelding 2026-06-05 113951.png",
        "/kleding/hoofd/Schermafbeelding 2026-06-05 114545.png",
        "/kleding/hoofd/Schermafbeelding 2026-06-04 133040.png",
        "/kleding/hoofd/Schermafbeelding 2026-06-04 133040.png",
        "/kleding/hoofd/Schermafbeelding 2026-06-04 133040.png",
    ];

    const imagemiddle = [
        //de drie afbeeldingen hieronder zijn goed maar meer moeten worden toegevoegd, deze afbeeldingen moeten uit de andere schoolplaten komen maar wel opdeze manier neergezet met voor elke foute afbeelding een goede afbeelding plus een
        "/kleding/borst/Schermafbeelding 2026-06-05 114005.png",
        "/kleding/borst/Schermafbeelding 2026-06-04 133105.png",
        "/kleding/borst/Schermafbeelding 2026-06-05 114553.png",
        "/kleding/borst/Schermafbeelding 2026-06-04 133105.png",
        "/kleding/borst/Schermafbeelding 2026-06-04 133105.png",
    ];
    const imagebottom = [
        //de drie afbeeldingen hieronder zijn goed maar meer moeten worden toegevoegd, deze afbeeldingen moeten uit de andere schoolplaten komen maar wel opdeze manier neergezet met voor elke foute afbeelding een goede afbeelding plus een
        "/kleding/benen/Schermafbeelding 2026-06-04 133115.png",
        "/kleding/benen/Schermafbeelding 2026-06-05 114015.png",
        "/kleding/benen/Schermafbeelding 2026-06-05 114608.png",
        "/kleding/benen/Schermafbeelding 2026-06-04 133115.png",
        "/kleding/benen/Schermafbeelding 2026-06-04 133115.png",
    ];
    const exampleTop = "/kleding/hoofd/Schermafbeelding 2026-06-04 133040.png";
    const exampleMiddle = "/kleding/borst/Schermafbeelding 2026-06-04 133105.png";
    const exampleBottom = "/kleding/benen/Schermafbeelding 2026-06-04 133115.png";
    const [currenttop, setCurrenttop] = useState(() => imagetop[Math.floor(Math.random() * imagetop.length)]);
    const [currentmiddle, setCurrentmiddle] = useState(() => imagemiddle[Math.floor(Math.random() * imagemiddle.length)]);
    const [currentbottom, setCurrentbottom] = useState(() => imagebottom[Math.floor(Math.random() * imagebottom.length)]);
    const handleReset = () => {
        window.location.reload();
    };

    useEffect(() => {
        if (timeLeft > 0 && !showIncorrectAlert) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else if (timeLeft === 0) {
            setGameOver(true);
        }
    }, [timeLeft, showIncorrectAlert]);
    function changeimage() {
        const randomIndextop = Math.floor(Math.random() * imagetop.length);
        const randomIndexmiddle = Math.floor(Math.random() * imagemiddle.length);
        const randomIndexbottom = Math.floor(Math.random() * imagebottom.length);
        setCurrenttop(imagetop[randomIndextop]);
        setCurrentmiddle(imagemiddle[randomIndexmiddle]);
        setCurrentbottom(imagebottom[randomIndexbottom]);
    }
    
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black dark:text-white grid grid-cols-3 gap-4">
            <div className="items-left justify-left">
                <h1 className="text-2xl font-bold mb-4">Kleding Bovenbouw</h1>
                <div className="bg-blue-100 border-2 border-blue-500 rounded-lg p-4 mb-4">
                    <h2 className="text-lg font-bold text-blue-800 mb-2">🎮 Hoe speel je dit spel?</h2>
                    <p className="text-blue-900 mb-2"><strong>Doel:</strong> Laat bezoekers met juiste bronzijdse kleding door!</p>
                    <p className="text-blue-900 mb-2"><strong>Je rol:</strong> Je bent wachter - raad of iemands kledingset overeenkomt met jouw voorbeeld</p>
                    <p className="text-blue-900"><strong>Knoppen:</strong> Klik "Ja" (goed) of "Nee" (fout) voor elke bezoekerscombinatie</p>
                    <p className="text-blue-900 text-sm mt-2">⏱️ <em>Je hebt 2 minuten voor alle checks!</em></p>
                </div>
                <p className="mb-4">Je vader heeft jouw de taak gegeven als bewaker laat de mensen met bekende kledingstukken binnen en laat andere uit over 2 minuten komt de volgende waak rotatie</p>
                <p className="text-lg">Tijd over: {timeLeft} seconden</p>
            </div>
            <div className="items-center justify-center">
                <Image
                    src={currenttop}
                    style={{ width: 200, height: 200 }}
                    alt="clothing top"
                    id="gast_top"
                    className="h-auto"
                />
                <Image
                    src={currentmiddle}
                    style={{ width: 200, height: 200 }}
                    alt="clothing middle"
                    id="gast_middle"
                    className="h-auto"
                />
                <Image
                    src={currentbottom}
                    style={{ width: 200, height: 200 }}
                    alt="clothing bottom"
                    id="gast_bottom"
                    className="h-auto"
                />
            </div>
            <div className="items-right justify-right">
                <Image
                    src={"/kleding/hoofd/Schermafbeelding 2026-06-04 133040.png"}
                    style={{ width: 100, height: 100}}
                    alt="bronze tijd hoofdwaar"
                    loading="eager"
                    id="example_top"
                    className="items-right justify-right h-auto"
                />
                <Image
                    src={"/kleding/borst/Schermafbeelding 2026-06-04 133105.png"}
                    style={{ width: 100, height: 100 }}
                    alt="bronze tijd borstwaar"
                    loading="eager"
                    id="example_middle"
                    className="items-right justify-right h-auto"
                />
                <Image
                    src={"/kleding/benen/Schermafbeelding 2026-06-04 133115.png"}
                    style={{ width: 100, height: 100 }}
                    alt="bronze tijd beenwaar"
                    loading="eager"
                    id = "example_bottom"
                    className="items-right justify-right h-auto"
                />
                <KledingBovenKnoppen
                    laatIn={() => {
                        if (currenttop === exampleTop && currentmiddle === exampleMiddle && currentbottom === exampleBottom) {
                            changeimage();
                            setScore(score + 1);
                        }
                        else{
                            setShowIncorrectAlert(true);
                        }
                    }}

                    laatUit={() =>{
                        if (currenttop !== exampleTop || currentmiddle !== exampleMiddle || currentbottom !== exampleBottom) {
                            changeimage();
                            setScore(score + 1);
                        }
                        else{
                            setShowIncorrectAlert(true);
                        }
                    }}
                />
            </div>
            {showIncorrectAlert && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="grid-cols-2">
                        <h2 className="text-white text-2xl mb-4 col-span-2">Helaas, dat is niet correct en je hebt iemand binnen gelaten die hier niet hoort. je hebt {timeLeft} seconden over.</h2>
                        <p className="text-white mb-4 col-span-2">Je hebt {score} punten behaald.</p>
                        <button onClick={handleReset} className="items-left justify-left px-4 py-2 mr-3">probeer opnieuw</button>
                        <Link href={"/2.grafheuvels"}><button className="item-right justify-right px-4 py-2 ml-3">kies een andere verhaallijn</button></Link>
                    </div>
                </div>
            )}
            {gameOver && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="grid-cols-2">
                        <h2 className="text-white text-2xl mb-4 col-span-2">de andere waak is er!</h2>
                        <p className="text-white mb-4 col-span-2">Je hebt {score} punten behaald.</p>
                        <button onClick={handleReset} className="items-left justify-left px-4 py-2 mr-3">probeer opnieuw</button>
                        <Link href={"/2.grafheuvels"}><button className="item-right justify-right px-4 py-2 ml-3">kies een andere verhaallijn</button></Link>
                    </div>
                </div>
            )}
        </div>
    )
}