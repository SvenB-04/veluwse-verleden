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
    const [zoom, setZoom] = useState(1);

    const minZoom = 1.0;
    const maxZoom = 2.2;
    const zoomStep = 0.1;

    const handleZoomIn = () => setZoom((current) => Math.min(maxZoom, +(current + zoomStep).toFixed(2)));
    const handleZoomOut = () => setZoom((current) => Math.max(minZoom, +(current - zoomStep).toFixed(2)));
    const handleResetZoom = () => setZoom(1);
    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    };

    const kledingOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/kleding/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/kleding/bovenbouw"); setOpen(false); }
        }
    ];

    const kledingInfo = <p>Ontdek hoe de mensen in de grafheuvelcultuur zich kleedden. Leer over materialen, stijlen en symboliek van kleding uit die tijd.</p>;

    const grafheuvelsOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/grafheuvels/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/grafheuvels/bovenbouw"); setOpen(false); }
        }
    ];

    const grafheuvelsInfo = <p>Leer over de grafheuvels, de monumentale graven uit de bronstijd. Ontdek hoe ze gebouwd werden en wat ze vertellen over de samenleving.</p>;

    const dierenOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/dieren/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/dieren/bovenbouw"); setOpen(false); }
        }
    ];

    const dierenInfo = <p>Ontdek de dieren die leefden tijdens de grafheuvelcultuur. Leer over wilde dieren, huisdieren en hun rol in de samenleving.</p>;

    const doodOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/omgaan-met-de-dood/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/omgaan-met-de-dood/bovenbouw"); setOpen(false); }
        }
    ];

    const doodInfo = <p>Leer hoe mensen in de grafheuvelcultuur omgingen met de dood. Ontdek rituelen, geloven en manieren van begraven.</p>;

    const ritueelOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/ritueel/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/ritueel/bovenbouw"); setOpen(false); }
        }
    ];

    const ritueelInfo = <p>Ontdek de grafrituelen van de bronstijd. Leer over ceremonies, symbolen en de betekenis van begraven in grafheuvels.</p>;

    const sieradenOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/sieraden/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/sieraden/bovenbouw"); setOpen(false); }
        }
    ];

    const sieradenInfo = <p>Leer over sieraden uit de grafheuvelcultuur. Ontdek materialen, ontwerpen en hun culturele betekenis.</p>;

    const stoomkuilenOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/stoomkuilen/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/stoomkuilen/bovenbouw"); setOpen(false); }
        }
    ];

    const stoomkuilenInfo = <p>Ontdek stoomkuilen, een techniek uit de bronstijd voor het bereiden van voedsel. Leer hoe ze werkten en hun belang.</p>;

    const klokbekerOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/klokbeker/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/klokbeker/bovenbouw"); setOpen(false); }
        }
    ];

    const klokbekerInfo = <p>Leer over klokbekers, een type aardewerk uit de grafheuvelcultuur. Ontdek hun vorm, decoratie en gebruik.</p>;

    const zwaardOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/zwaard/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/zwaard/bovenbouw"); setOpen(false); }
        }
    ];

    const zwaardInfo = <p>Ontdek zwaarden uit de bronstijd. Leer over hun vorm, materialen en rol in de samenleving.</p>;

    const landschapOptions: { content: React.ReactNode; onClick: () => void }[] = [
        {
            content: <><h3>onderbouw</h3><br /><p>groep 3 t/m 5</p><br /><p>leeftijd 6 t/m 9</p></>,
            onClick: () => { router.push("/2.grafheuvels/landschap/onderbouw"); setOpen(false); }
        },
        {
            content: <><h3>bovenbouw</h3><br /><p>groep 6 t/m 2e jaar</p><br /><p>leeftijd 10 t/m 14</p></>,
            onClick: () => { router.push("/2.grafheuvels/landschap/bovenbouw"); setOpen(false); }
        }
    ];

    const landschapInfo = <p>Leer over het landschap tijdens de grafheuvelcultuur. Ontdek hoe mensen leefden in harmonie met de natuur.</p>;

    return (
            <div className="relative flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">


                <div className="relative h-screen w-full overflow-hidden" onWheel={handleWheel}>
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-center bg-no-repeat bg-cover transition-transform duration-200 ease-out"
                            style={{
                                backgroundImage: "url('/kleur_MBRONS_ABV_def.jpeg')",
                                transform: `scale(${zoom})`,
                                transformOrigin: "center center",
                            }}
                        />
                    </div>

                    <div className="absolute inset-0 z-20 pointer-events-auto">
                        <div className="absolute top-4 left-4 flex flex-col gap-2">
                            <div className="flex flex-wrap items-center gap-3 rounded-xl bg-zinc-950/30 p-4 text-white shadow-lg backdrop-blur-md">
                                <button
                                    onClick={handleZoomOut}
                                    className="px-4 py-2 rounded bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
                                >
                                    −
                                </button>
                                <button
                                    onClick={handleResetZoom}
                                    className="px-4 py-2 rounded bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
                                >
                                    reset
                                </button>
                                <button
                                    onClick={handleZoomIn}
                                    className="px-4 py-2 rounded bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
                                >
                                    +
                                </button>
                                <span className="text-sm">Zoom: {Math.round(zoom * 100)}%</span>
                            </div>
                        </div>

                        <div className="absolute top-4 right-4">
                            <button
                                onClick={() => router.push("/")}
                                className="px-4 py-2 rounded bg-zinc-200 hover:bg-zinc-300"
                            >
                                home
                            </button>
                        </div>

                        {buttonsVisible && (
                            <>
                                <button
                                    onClick={() => {
                                        setCurrentOptions(grafheuvelsOptions);
                                        setCurrentMessage("Kies voor grafheuvels: boven- of onderbouw?");
                                        setCurrentInfo(grafheuvelsInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[40%] left-[70%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    🪦️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(ritueelOptions);
                                        setCurrentMessage("Kies voor grafritueel: boven- of onderbouw?");
                                        setCurrentInfo(ritueelInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[65%] left-[75%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    🔥️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(kledingOptions);
                                        setCurrentMessage("Kies voor kleding: boven- of onderbouw?");
                                        setCurrentInfo(kledingInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[60%] left-[30%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    👕️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(sieradenOptions);
                                        setCurrentMessage("Kies voor sieraden: boven- of onderbouw?");
                                        setCurrentInfo(sieradenInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[45%] left-[20%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    💍️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(stoomkuilenOptions);
                                        setCurrentMessage("Kies voor stoomkuilen: boven- of onderbouw?");
                                        setCurrentInfo(stoomkuilenInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[45%] left-[35%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    ♨️️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(klokbekerOptions);
                                        setCurrentMessage("Kies voor klokbeker: boven- of onderbouw?");
                                        setCurrentInfo(klokbekerInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[20%] left-[30%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    🏺️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(zwaardOptions);
                                        setCurrentMessage("Kies voor zwaard: boven- of onderbouw?");
                                        setCurrentInfo(zwaardInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[73%] left-[10%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    🗡️️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(landschapOptions);
                                        setCurrentMessage("Kies voor landschap: boven- of onderbouw?");
                                        setCurrentInfo(landschapInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[8%] left-[45%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    🌳️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(dierenOptions);
                                        setCurrentMessage("Kies voor dieren: boven- of onderbouw?");
                                        setCurrentInfo(dierenInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[85%] left-[50%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    🐄️
                                </button>

                                <button
                                    onClick={() => {
                                        setCurrentOptions(doodOptions);
                                        setCurrentMessage("Kies voor omgaan met de dood: boven- of onderbouw?");
                                        setCurrentInfo(doodInfo);
                                        setOpen(true);
                                    }}
                                    className="absolute top-[25%] left-[70%] text-3xl hover:scale-110 transition cursor-pointer px-4 py-3 rounded-full bg-white/90 shadow-lg border border-white/70 opacity-70"
                                >
                                    ⚰️️
                                </button>
                            </>
                        )}
                        <div className="absolute top-[50%] right-[0%]">
                            <button
                                onClick={() => setButtonsVisible(!buttonsVisible)}
                                className="px-4 py-2 rounded bg-zinc-200 hover:bg-zinc-300"
                            >
                                {buttonsVisible ? "Maak onzichtbaar" : "Maak zichtbaar"}
                            </button>
                        </div>
                    </div>
                </div>
                <ChoiceModal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    message={currentMessage}
                    options={currentOptions}
                    info={currentInfo}
                />
            </div>
    );
}