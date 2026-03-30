"use client";

import Image from "next/image";
import { useState } from "react";
import ChoiceModal from "@/components/ChoiceModel";

export default function Home() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="h-screen flex items-center justify-center">
                <button
                    onClick={() => setOpen(true)}
                    className="px-4 py-2 rounded"
                >
                    <Image
                        src={"/veluws-verleden/public/kleur_MBRONS_ABV_def.jpeg"}
                        width={1000}
                        height={400}
                        alt="schoolplaat graafhuevels"
                        loading="eager"
                    />
                </button>
                <ChoiceModal
                    isOpen={open}
                    message="zit jij in de boven- of onderbouw?"
                    onCancel={() => {
                        <link href="/kleding/onderbouw"></link>
                        setOpen(false)
                    } }
                    onConfirm={() => {
                        <link href="/kleding/bovenbouw"></link>
                        setOpen(false);
                    }}
                />
            </div>
        </div>
    );
}
