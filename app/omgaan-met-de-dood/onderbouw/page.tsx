"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function OmgaanMetDeDoodOnder() {
  useAFKHandler(60000); 
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1>omgaan met de dood Onderbouw</h1>
        //Kinderen leggen:
        Bloem
        Pot
        Steen
        Grafheuvel licht zacht op.
        Rustige museumervaring.
    </div>
    );
}