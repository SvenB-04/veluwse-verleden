"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import ChoiceModal from "@/components/ChoiceModel";

export default function Home() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [currentOptions, setCurrentOptions] = useState<{ content: React.ReactNode; onClick: () => void }[]>([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [currentInfo, setCurrentInfo] = useState<React.ReactNode>("");
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const kledingOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/kleding/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/kleding/bovenbouw"); setOpen(false); }
        }
    ];

    const kledingInfo = <p>Ontdek hoe de mensen in de grafheuvelcultuur zich kleedden. Leer over materialen, stijlen en symboliek van kleding uit die tijd.</p>;

    const grafheuvelsOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/grafheuvels/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/grafheuvels/bovenbouw"); setOpen(false); }
        }
    ];

    const grafheuvelsInfo = <p>Leer over de grafheuvels, de monumentale graven uit de bronstijd. Ontdek hoe ze gebouwd werden en wat ze vertellen over de samenleving.</p>;

    const dierenOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/dieren/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/dieren/bovenbouw"); setOpen(false); }
        }
    ];

    const dierenInfo = <p>Ontdek de dieren die leefden tijdens de grafheuvelcultuur. Leer over wilde dieren, huisdieren en hun rol in de samenleving.</p>;

    const doodOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/omgaan-met-de-dood/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/omgaan-met-de-dood/bovenbouw"); setOpen(false); }
        }
    ];

    const doodInfo = <p>Leer hoe mensen in de grafheuvelcultuur omgingen met de dood. Ontdek rituelen, geloven en manieren van begraven.</p>;

    const ritueelOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/grafritueel/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/grafritueel/bovenbouw"); setOpen(false); }
        }
    ];

    const ritueelInfo = <p>Ontdek de grafrituelen van de bronstijd. Leer over ceremonies, symbolen en de betekenis van begraven in grafheuvels.</p>;

    const sieradenOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/sieraden/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/sieraden/bovenbouw"); setOpen(false); }
        }
    ];

    const sieradenInfo = <p>Leer over sieraden uit de grafheuvelcultuur. Ontdek materialen, ontwerpen en hun culturele betekenis.</p>;

    const stoomkuilenOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/stoomkuilen/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/stoomkuilen/bovenbouw"); setOpen(false); }
        }
    ];

    const stoomkuilenInfo = <p>Ontdek stoomkuilen, een techniek uit de bronstijd voor het bereiden van voedsel. Leer hoe ze werkten en hun belang.</p>;

    const klokbekerOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/klokbeker/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/klokbeker/bovenbouw"); setOpen(false); }
        }
    ];

    const klokbekerInfo = <p>Leer over klokbekers, een type aardewerk uit de grafheuvelcultuur. Ontdek hun vorm, decoratie en gebruik.</p>;

    const zwaardOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/zwaard/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/zwaard/bovenbouw"); setOpen(false); }
        }
    ];

    const zwaardInfo = <p>Ontdek zwaarden uit de bronstijd. Leer over hun vorm, materialen en rol in de samenleving.</p>;

    const landschapOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/landschap/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/landschap/bovenbouw"); setOpen(false); }
        }
    ];

    const landschapInfo = <p>Leer over het landschap tijdens de grafheuvelcultuur. Ontdek hoe mensen leefden in harmonie met de natuur.</p>;

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <button
                onClick={() => setButtonsVisible(!buttonsVisible)}
                className="px-4 py-2 rounded bg-zinc-200 hover:bg-zinc-300 mb-4"
            >
                {buttonsVisible ? "Maak de knoppen onzichtbaar" : "Maak de knoppen zichtbaar"}
            </button>
            <div className="h-screen flex items-center justify-center w-full gap-4" style={{ backgroundImage: `url('/kleur_MBRONS_ABV_def.jpeg')` }}>
                {buttonsVisible && (
                    <>
                        <button
                            onClick={() => { setCurrentOptions(kledingOptions); setCurrentMessage("Kies voor kleding: boven- of onderbouw?"); setCurrentInfo(kledingInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            Kleding
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(grafheuvelsOptions); setCurrentMessage("Kies voor grafheuvels: boven- of onderbouw?"); setCurrentInfo(grafheuvelsInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            grafheuvel
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(dierenOptions); setCurrentMessage("Kies voor dieren: boven- of onderbouw?"); setCurrentInfo(dierenInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            dieren
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(doodOptions); setCurrentMessage("Kies voor omgaan met de dood: boven- of onderbouw?"); setCurrentInfo(doodInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            omgaan met de dood
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(ritueelOptions); setCurrentMessage("kies voor grafritueel: boven- of onderbouw?"); setCurrentInfo(ritueelInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            grafritueel
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(sieradenOptions); setCurrentMessage("kies voor sieraden: boven- of onderbouw?"); setCurrentInfo(sieradenInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            sieraden
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(stoomkuilenOptions); setCurrentMessage("kies voor stoomkuilen: boven- of onderbouw"); setCurrentInfo(stoomkuilenInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            stoomkuilen
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(klokbekerOptions); setCurrentMessage("kies voor klokbeker: boven- of onderbouw?"); setCurrentInfo(klokbekerInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            klokbeker
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(zwaardOptions); setCurrentMessage("kies voor zwaard: boven- of onderbouw?"); setCurrentInfo(zwaardInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            🗡
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(landschapOptions); setCurrentMessage("kies voor landschap: boven- of onderbouw?"); setCurrentInfo(landschapInfo); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            landschap
                        </button>
                    </>
                )}
                <ChoiceModal
                    isOpen={open}
                    message={currentMessage}
                    options={currentOptions}
                    info={currentInfo}
                />
            </div>
        </div>
    );
}