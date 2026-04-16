"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function GrafheuvelsBoven() {
  useAFKHandler(60000); 
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1>dieren Bovenbouw</h1>
        <p>Welkom bij de dieren voor bovenbouw.</p>
        //Spelers beheren:
        Jacht
        Veeteelt
        Overbegrazing
        Te veel schapen → heide ontstaat.
        te weinig schapen → bos ontstaat.
        Echte link met landschapsvorming
    </div>
  );
}