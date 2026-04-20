"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function DierenBoven() {
  useAFKHandler(60000); 
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h2>Dieren Bovenbouw</h2>
        <p>Welkom bij de dieren voor bovenbouw.</p>
      </div>

        //Spelers beheren:
        Jacht
        Veeteelt
        Overbegrazing
        Te veel schapen → heide ontstaat.
        te weinig schapen → bos ontstaat.
        balans → grasland ontstaat en het dorp groeit.
        Echte link met landschapsvorming
    </div>
  );
}