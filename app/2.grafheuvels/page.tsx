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
                            onClick={() => { setCurrentOptions(kledingOptions); setCurrentMessage("Kies voor kleding: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            Kleding
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(grafheuvelsOptions); setCurrentMessage("Kies voor grafheuvels: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            grafheuvel
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(dierenOptions); setCurrentMessage("Kies voor dieren: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            dieren
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(doodOptions); setCurrentMessage("Kies voor omgaan met de dood: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            omgaan met de dood
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(ritueelOptions); setCurrentMessage("kies voor grafritueel: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            grafritueel
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(sieradenOptions); setCurrentMessage("kies voor sieraden: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            sieraden
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(stoomkuilenOptions); setCurrentMessage("kies voor stoomkuilen: boven- of onderbouw"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            stoomkuilen
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(klokbekerOptions); setCurrentMessage("kies voor klokbeker: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            klokbeker
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(zwaardOptions); setCurrentMessage("kies voor zwaard: boven- of onderbouw?"); setOpen(true); }}
                            className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                        >
                            🗡
                        </button>
                        <button
                            onClick={() => { setCurrentOptions(landschapOptions); setCurrentMessage("kies voor landschap: boven- of onderbouw?"); setOpen(true); }}
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
                />
            </div>
        </div>
    );
}