"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function KledingOnder() {
    useAFKHandler(60000); 
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
        //de drie afbeeldingen hieronder zijn placeholders, deze moeten vervangen worden door echte afbeeldingen van kledingstukken uit de bronperiode en andere tijdperken
        "/kleding/8f3d7702ea124824ba92a0e1292d334d.png",
        "/kleding/clothing character design.png",
        "/kleding/Schermafbeelding_20221209_131843.png",
    ];

    const imagemiddle = [
        //de drie afbeeldingen hieronder zijn placeholders, deze moeten vervangen worden door echte afbeeldingen van kledingstukken uit de bronperiode en andere tijdperken
        "/kleding/8f3d7702ea124824ba92a0e1292d334d.png",
        "/kleding/clothing character design.png",
        "/kleding/Schermafbeelding_20221209_131843.png",
    ];
    const imagebottom = [
        //de drie afbeeldingen hieronder zijn placeholders, deze moeten vervangen worden door echte afbeeldingen van kledingstukken uit de bronperiode en andere tijdperken
        "/kleding/8f3d7702ea124824ba92a0e1292d334d.png",
        "/kleding/clothing character design.png",
        "/kleding/Schermafbeelding_20221209_131843.png",
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
        <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col flex-1 items-left justify-left bg-zinc-50 font-sans dark:bg-black">
                <h1 className="text-2xl font-bold mb-4">Kleding Onderbouw</h1>
                <p className="mb-4"></p>
                <p className="text-lg"></p>
            </div>
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black grid grid-rows-3 gap-4">
                <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => schuifOmhoog('bottom')} className="items-left justify-left"><Image src={'/ui/pijl_naar_links.png'} width={50} height={50} alt="pijl naar links" className="justify-left items-left"/></button>
                    <Image
                        src={imagebottom[bottomIndex]}
                        style={{ width: 200, height: 200}}
                        width={200}
                        height={200}
                        alt="clothing bottom"
                        className="justify-center items-center"
                    />
                    <button onClick={() => schuifOmlaag('bottom')} className="items-right justify-right"><Image src={'/ui/pijl_naar_rechts.png'} width={50} height={50} alt="pijl naar rechts" className="items-right justify-right"/></button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => schuifOmhoog('middle')} className="items-left justify-left"><Image src={'/ui/pijl_naar_links.png'} width={50} height={50} alt="pijl naar links" className="justify-left items-left"/></button>
                    <Image
                        src={imagemiddle[middleIndex]}
                        style={{ width: 200, height: 200 }}
                        width={200}
                        height={200}
                        alt="clothing middle"
                        className="justify-center items-center"
                    />
                    <button onClick={() => schuifOmlaag('middle')} className="items-right justify-right"><Image src={'/ui/pijl_naar_rechts.png'} width={50} height={50} alt="pijl naar rechts" className="items-right justify-right"/></button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => schuifOmhoog('bottom')} className="items-left justify-left"><Image src={'/pijl_naar_links.png'} width={50} height={50} alt="pijl naar links" className="justify-left items-left"/></button>
                    <Image
                        src={imagebottom[bottomIndex]}
                        style={{ width: 200, height: 200 }}
                        width={200}
                        height={200}
                        alt="clothing bottom"
                        className="justify-center items-center"

                    />
                    <button onClick={() => schuifOmlaag('bottom')} className="items-right justify-right"><Image src={'/pijl_naar_rechts.png'} width={50} height={50} alt="pijl naar rechts" className="items-right justify-right"/></button>
                </div>
            </div>
            <div className="flex flex-col flex-1 items-right justify-right bg-zinc-50 font-sans dark:bg-black">
                <div>
                    <p id="top_informatie"> {informationtop[topIndex]} </p>
                </div>
                <div>
                    <p id="middle_informatie"> {informationmiddle[middleIndex]} </p>
                </div>
                <div>
                    <p id="bottom_informatie"> {informationbottom[bottomIndex]} </p>
                </div>
                <Link href="/">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded">Terug naar overzicht</button>
                </Link>
            </div>
        </div>
    );
}