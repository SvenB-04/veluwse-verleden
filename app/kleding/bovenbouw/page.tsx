"use client";

import { useState, useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import KledingBovenKnoppen from "@/components/KledingBovenKnoppen";

export default function kleding_boven() {
    const [score, setScore] = useState(0);
    const [showIncorrectAlert, setShowIncorrectAlert] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120);
    const [gameOver, setGameOver] = useState(false);
    const imagetop = [
        "/8f3d7702ea124824ba92a0e1292d334d.png",
        "/clothing character design.png",
        "/Schermafbeelding_20221209_131843.png",
        "/Schermafbeelding_20221209_131843.png",
        "/Schermafbeelding_20221209_131843.png",
    ];

    const imagemiddle = [
        "/8f3d7702ea124824ba92a0e1292d334d.png",
        "/clothing character design.png",
        "/Schermafbeelding_20221209_131843.png",
        "/clothing character design.png",
        "/clothing character design.png",
    ];
    const imagebottom = [
        "/8f3d7702ea124824ba92a0e1292d334d.png",
        "/clothing character design.png",
        "/Schermafbeelding_20221209_131843.png",
        "/8f3d7702ea124824ba92a0e1292d334d.png",
        "/8f3d7702ea124824ba92a0e1292d334d.png",
    ];
    const exampleTop = "/Schermafbeelding_20221209_131843.png";
    const exampleMiddle = "/clothing character design.png";
    const exampleBottom = "/8f3d7702ea124824ba92a0e1292d334d.png";
    const [currenttop, setCurrenttop] = useState(imagetop[0]);
    const [currentmiddle, setCurrentmiddle] = useState(imagemiddle[0]);
    const [currentbottom, setCurrentbottom] = useState(imagebottom[0]);
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
                <p className="mb-4">maak geen fouten voor 120 seconden en verzamel punten</p>
                <p className="text-lg">Time left: {timeLeft} seconds</p>
            </div>
            <div className="items-center justify-center">
                <Image
                    src={currenttop}
                    width={200}
                    height={200}
                    alt="clothing top"
                    id="gast_top"
                />
                <Image
                    src={currentmiddle}
                    width={200}
                    height={200}
                    alt="clothing middle"
                    id="gast_middle"
                />
                <Image
                    src={currentbottom}
                    width={200}
                    height={200}
                    alt="clothing bottom"
                    id="gast_bottom"
                />
            </div>
            <div className="items-right justify-right">
                <Image
                    src={"/Schermafbeelding_20221209_131843.png"}
                    width={100}
                    height={100}
                    alt="bronze tijd hoofdwaar"
                    loading="eager"
                    id="example_top"
                    className="items-right justify-right"
                />
                <Image
                    src={"/clothing character design.png"}
                    width={100}
                    height={100}
                    alt="bronze tijd borstwaar"
                    loading="eager"
                    id="example_middle"
                    className="items-right justify-right"
                />
                <Image
                    src={"/8f3d7702ea124824ba92a0e1292d334d.png"}
                    width={100}
                    height={100}
                    alt="bronze tijd beenwaar"
                    loading="eager"
                    id = "example_bottom"
                    className="items-right justify-right"
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
                        <h2 className="text-white text-2xl mb-4 col-span-2">Helaas, dat is niet correct. je hebt {timeLeft} seconden over.</h2>
                        <p className="text-white mb-4 col-span-2">Je hebt {score} punten behaald.</p>
                        <button onClick={handleReset} className="items-left justify-left px-4 py-2 mr-3">probeer opnieuw</button>
                        <Link href={"/"}><button className="item-right justify-right px-4 py-2 ml-3">kies een andere verhaallijn</button></Link>
                    </div>
                </div>
            )}
            {gameOver && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="grid-cols-2">
                        <h2 className="text-white text-2xl mb-4 col-span-2">Tijd is op!</h2>
                        <p className="text-white mb-4 col-span-2">Je hebt {score} punten behaald.</p>
                        <button onClick={handleReset} className="items-left justify-left px-4 py-2 mr-3">probeer opnieuw</button>
                        <Link href={"/"}><button className="item-right justify-right px-4 py-2 ml-3">kies een andere verhaallijn</button></Link>
                    </div>
                </div>
            )}
        </div>
    )
}