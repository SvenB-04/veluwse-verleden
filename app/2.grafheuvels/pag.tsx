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
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="h-screen flex items-center justify-center w-full gap-4" style={{ backgroundImage: `url('/kleur_MBRONS_ABV_def.jpeg')` }}>
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
                </button>
                <button
                    onClick={() => { setCurrentOptions(dierenOptions); setCurrentMessage("Kies voor dieren: boven- of onderbouw?"); setOpen(true); }}
                    className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                >
                </button>
                <button
                    onClick={() => { setCurrentOptions(doodOptions); setCurrentMessage("Kies voor omgaan met de dood: boven- of onderbouw?"); setOpen(true); }}
                    className="px-4 py-2 rounded bg-zinc-200 bg-transparent-50 hover:bg-transparent-75"
                >
                </button>
                <ChoiceModal
                    isOpen={open}
                    message={currentMessage}
                    options={currentOptions}
                />
            </div>
        </div>
    );
}
