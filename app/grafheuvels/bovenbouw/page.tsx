"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function GrafheuvelsBoven() {
  useAFKHandler(60000); 
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Grafheuvels Bovenbouw</h1>
      <p>Welkom bij de grafheuvels voor bovenbouw.</p>
      //Spelers graven lagen weg en analyseren vondsten:
      Bronzen dolk
      Klokbeker
      Sieraden
      Ze bepalen:
      Status van persoon
      Tijdvak binnen de Bronstijd
      🎛 Tafel: taakverdeling (graver / analist)
      🎛 Tablet: wisselmodus
    </div>
  );
}