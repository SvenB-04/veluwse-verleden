"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function OmgaanMetDeDoodBoven() {
  useAFKHandler(60000); 
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1>omgaan met de dood Bovenbouw</h1>
        //Spelers analyseren meerdere graven.
        Ze ontdekken:
        Sociale verschillen
        Machtstructuren
        Geloof
        Reflectievragen aan einde.
    </div>
    );
}