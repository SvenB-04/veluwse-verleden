"use client";

import Image from "next/image";
import KledingBovenKnoppen from "@/components/KledingBovenKnoppen";

export default function kleding_boven() {

    return(
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div>
                <Image
                    src={"/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg"}
                    width={100}
                    height={100}
                    alt="bronze tijd hoofdwaar"
                    loading="eager"
                    id="example_top"
                />
                <Image
                    src={"/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg"}
                    width={100}
                    height={100}
                    alt="bronze tijd borstwaar"
                    loading="eager"
                    id="example_middle"
                />
                <Image
                    src={"/veluwse-verleden/public/kleur_MBRONS_ABV_def.jpeg"}
                    width={100}
                    height={100}
                    alt="bronze tijd beenwaar"
                    loading="eager"
                    id = "example_bottom"
                />
                <KledingBovenKnoppen
                laatIn={() => {
                    if (example_top = gast_top) {
                        if (example_middle = gast_middle) {
                            if (example_bottom = gast_bottom) {
                                //generate a new gast
                            }
                            else{
                                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                    <button>probeer opnieuw</button>
                                    <button>kies een andere verhaallijn</button>
                                </div>
                            }
                        }
                        else{
                            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                <button>probeer opnieuw</button>
                                <button>kies een andere verhaallijn</button>
                            </div>
                        }
                    }
                    else{
                        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                            <button>probeer opnieuw</button>
                            <button>kies een andere verhaallijn</button>
                        </div>
                    }
                }}
                laatUit={() =>{
                    if (example_top != gast_top) {
                        if (example_middle != gast_middle) {
                            if (example_bottom != gast_bottom) {
                                //generate a new gast
                            }
                            else{
                                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                    <button>probeer opnieuw</button>
                                    <button>kies een andere verhaallijn</button>
                                </div>
                            }
                        }
                        else{
                            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                                <button>probeer opnieuw</button>
                                <button>kies een andere verhaallijn</button>
                            </div>
                        }
                    }
                    else{
                        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                            <button>probeer opnieuw</button>
                            <button>kies een andere verhaallijn</button>
                        </div>
                    }
                }}
                />
            </div>
        </div>
    )
}