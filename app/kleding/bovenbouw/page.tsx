"use client";

import { useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import KledingBovenKnoppen from "@/components/KledingBovenKnoppen";

export default function kleding_boven() {
    const [score, setScore] = useState(0);
    const imagetop = [
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
    ];
    const imagemiddle = [
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
    ];
    const imagebottom = [
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
        "/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg",
    ];
    const [currenttop, setCurrenttop] = useState(imagetop[0]);
    const [currentmiddle, setCurrentmiddle] = useState(imagemiddle[0]);
    const [currentbottom, setCurrentbottom] = useState(imagebottom[0]);
    function changeimage() {
        const randomIndex = Math.floor(Math.random() * imagetop.length);
        setCurrenttop(imagetop[randomIndex]);
        setCurrentmiddle(imagemiddle[randomIndex]);
        setCurrentbottom(imagebottom[randomIndex]);
    }
    
    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="h-screen flex items-center justify-center">
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
            <div>
                <Image
                    src={"/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg"}
                    width={100}
                    height={100}
                    alt="bronze tijd hoofdwaar"
                    loading="eager"
                    id="example_top"
                    className="items-right justify-right"
                />
                <Image
                    src={"/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg"}
                    width={100}
                    height={100}
                    alt="bronze tijd borstwaar"
                    loading="eager"
                    id="example_middle"
                    className="items-right justify-right"
                />
                <Image
                    src={"/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg"}
                    width={100}
                    height={100}
                    alt="bronze tijd beenwaar"
                    loading="eager"
                    id = "example_bottom"
                    className="items-right justify-right"
                />
                <KledingBovenKnoppen
                    laatIn={() => {
                        if (document.getElementById("example_top")?.getAttribute("src") === document.getElementById("gast_top")?.getAttribute("src")) {
                            if (document.getElementById("example_middle")?.getAttribute("src") === document.getElementById("gast_middle")?.getAttribute("src")) {
                                if (document.getElementById("example_bottom")?.getAttribute("src") === document.getElementById("gast_bottom")?.getAttribute("src")) {
                                    changeimage();
                                    setScore(score + 1);
                                }
                                else{
                                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                        <h2 className="text-white text-2xl mb-4">Helaas, dat is niet correct.</h2>
                                        <p className="text-white mb-4">Je hebt {score} punten behaald.</p>
                                        <button>probeer opnieuw</button>
                                        <Link href={"/"}><button>kies een andere verhaallijn</button></Link>
                                    </div>
                                }
                            }
                            else{
                                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                    <h2 className="text-white text-2xl mb-4">Helaas, dat is niet correct.</h2>
                                    <p className="text-white mb-4">Je hebt {score} punten behaald.</p>
                                    <button>probeer opnieuw</button>
                                    <Link href={"/"}><button>kies een andere verhaallijn</button></Link>
                                </div>
                            }
                        }
                        else{
                            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                <h2 className="text-white text-2xl mb-4">Helaas, dat is niet correct.</h2>
                                <p className="text-white mb-4">Je hebt {score} punten behaald.</p>
                                <button>probeer opnieuw</button>
                                <Link href={"/"}><button>kies een andere verhaallijn</button></Link>
                            </div>
                        }
                    }}
                    
                    laatUit={() =>{
                        if (document.getElementById("example_top")?.getAttribute("src") !== document.getElementById("gast_top")?.getAttribute("src")) {
                            if (document.getElementById("example_middle")?.getAttribute("src") !== document.getElementById("gast_middle")?.getAttribute("src")) {
                                if (document.getElementById("example_bottom")?.getAttribute("src") !== document.getElementById("gast_bottom")?.getAttribute("src")) {
                                    changeimage();
                                    setScore(score + 1);
                                }
                                else{
                                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                        <h2 className="text-white text-2xl mb-4">Helaas, dat is niet correct.</h2>
                                        <p className="text-white mb-4">Je hebt {score} punten behaald.</p>
                                        <button>probeer opnieuw</button>
                                        <Link href={"/"}><button>kies een andere verhaallijn</button></Link>
                                    </div>
                                }
                            }
                            else{
                                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                    <h2 className="text-white text-2xl mb-4">Helaas, dat is niet correct.</h2>
                                    <p className="text-white mb-4">Je hebt {score} punten behaald.</p>
                                    <button>probeer opnieuw</button>
                                    <Link href={"/"}><button>kies een andere verhaallijn</button></Link>
                                </div>
                            
                            }
                        }
                        else{
                            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                <h2 className="text-white text-2xl mb-4">Helaas, dat is niet correct.</h2>
                                <p className="text-white mb-4">Je hebt {score} punten behaald.</p>
                                <button>probeer opnieuw</button>
                                <Link href={"/"}><button>kies een andere verhaallijn</button></Link>
                            </div>
                        }
                    }}
                />
            </div>
        </div>
    )
}