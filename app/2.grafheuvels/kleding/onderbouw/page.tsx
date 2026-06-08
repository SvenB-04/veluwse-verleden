"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function KledingOnder() {
    useAFKHandler(60000, "/2.grafheuvels"); 
    //zorg dat de teksten hieronder overeenkomen met de afbeeldingen die erbij horen, deze moeten ook nog worden toegevoegd. dus de tekst die op index 0 staat hoort bij de afbeelding die op index 0 staat en zo verder
    const informationtop = [
        "test1",
        "test2",
        "test3",
    ];
    const informationmiddle = [
        "test1",
        "test2",
        "test3",
    ];
    const informationbottom = [
        "test1",
        "test2",
        "test3",
    ];
    const imagetop = [
        //de drie afbeeldingen hieronder zijn goed maar meer moeten worden toegevoegd, deze afbeeldingen moeten uit de andere schoolplaten komen
        "/kleding/hoofd/Schermafbeelding 2026-06-04 133040.png",
        "/kleding/hoofd/Schermafbeelding 2026-06-05 113951.png",
        "/kleding/hoofd/Schermafbeelding 2026-06-05 114545.png",
    ];

    const imagemiddle = [
        //de drie afbeeldingen hieronder zijn goed maar meer moeten worden toegevoegd, deze afbeeldingen moeten uit de andere schoolplaten komen
        "/kleding/borst/Schermafbeelding 2026-06-04 133105.png",
        "/kleding/borst/Schermafbeelding 2026-06-05 114005.png",
        "/kleding/borst/Schermafbeelding 2026-06-05 114553.png",
    ];
    const imagebottom = [
        //de drie afbeeldingen hieronder zijn goed maar meer moeten worden toegevoegd, deze afbeeldingen moeten uit de andere schoolplaten komen
        "/kleding/benen/Schermafbeelding 2026-06-04 133115.png",
        "/kleding/benen/Schermafbeelding 2026-06-05 114015.png",
        "/kleding/benen/Schermafbeelding 2026-06-05 114608.png",
    ];
    const [topIndex, setTopIndex] = useState(() => Math.floor(Math.random() * imagetop.length));
    const [middleIndex, setMiddleIndex] = useState(() => Math.floor(Math.random() * imagemiddle.length));
    const [bottomIndex, setBottomIndex] = useState(() => Math.floor(Math.random() * imagebottom.length));

    const schuifOmhoog = (type: string) => {
        if (type === 'top') {
            setTopIndex((prev) => (prev - 1 + imagetop.length) % imagetop.length);
        } else if (type === 'middle') {
            setMiddleIndex((prev) => (prev - 1 + imagemiddle.length) % imagemiddle.length);
        } else if (type === 'bottom') {
            setBottomIndex((prev) => (prev - 1 + imagebottom.length) % imagebottom.length);
        }
    };

    const schuifOmlaag = (type: string) => {
        if (type === 'top') {
            setTopIndex((prev) => (prev + 1 + imagetop.length) % imagetop.length);
        } else if (type === 'middle') {
            setMiddleIndex((prev) => (prev + 1 + imagemiddle.length) % imagemiddle.length);
        } else if (type === 'bottom') {
            setBottomIndex((prev) => (prev + 1 + imagebottom.length) % imagebottom.length);
        }
    };

    return (
        <div className="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col flex-1 items-start justify-start bg-zinc-50 font-sans dark:bg-black p-4 rounded-lg">
                <h1 className="text-2xl font-bold mb-4">Kleding Onderbouw</h1>
                <p className="mb-4"></p>
                <p className="text-lg"></p>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-4 p-4 rounded-lg">
                <div className="grid grid-cols-3 gap-2 w-full items-center">
                    <button onClick={() => schuifOmhoog('top')} className="flex items-center justify-center"><Image src={'/ui/pijl_naar_links.png'} width={50} height={50} alt="pijl naar links" className="h-auto"/></button>
                    <Image
                        src={imagetop[topIndex]}
                        style={{ width: 200, height: 200}}
                        width={200}
                        height={200}
                        alt="clothing top"
                        className="mx-auto"
                    />
                    <button onClick={() => schuifOmlaag('top')} className="flex items-center justify-center"><Image src={'/ui/pijl_naar_rechts.png'} width={50} height={50} alt="pijl naar rechts" className="h-auto"/></button>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full items-center">
                    <button onClick={() => schuifOmhoog('middle')} className="flex items-center justify-center"><Image src={'/ui/pijl_naar_links.png'} width={50} height={50} alt="pijl naar links" className="h-auto"/></button>
                    <Image
                        src={imagemiddle[middleIndex]}
                        style={{ width: 200, height: 200 }}
                        width={200}
                        height={200}
                        alt="clothing middle"
                        className="mx-auto"
                    />
                    <button onClick={() => schuifOmlaag('middle')} className="flex items-center justify-center"><Image src={'/ui/pijl_naar_rechts.png'} width={50} height={50} alt="pijl naar rechts" className="h-auto"/></button>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full items-center">
                    <button onClick={() => schuifOmhoog('bottom')} className="flex items-center justify-center"><Image src={'/ui/pijl_naar_links.png'} width={50} height={50} alt="pijl naar links" className="h-auto"/></button>
                    <Image
                        src={imagebottom[bottomIndex]}
                        style={{ width: 200, height: 200 }}
                        width={200}
                        height={200}
                        alt="clothing bottom"
                        className="mx-auto"
                    />
                    <button onClick={() => schuifOmlaag('bottom')} className="flex items-center justify-center"><Image src={'/ui/pijl_naar_rechts.png'} width={50} height={50} alt="pijl naar rechts" className="h-auto"/></button>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-end justify-end bg-zinc-50 font-sans dark:bg-black p-4 rounded-lg text-right">
                <div>
                    <p id="top_informatie"> {informationtop[topIndex]} </p>
                </div>
                <div>
                    <p id="middle_informatie"> {informationmiddle[middleIndex]} </p>
                </div>
                <div>
                    <p id="bottom_informatie"> {informationbottom[bottomIndex]} </p>
                </div>
                <Link href="/2.grafheuvels">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Terug naar overzicht</button>
                </Link>
            </div>
        </div>
    );
}