"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function GrafheuvelsBoven() {
  useAFKHandler(60000); 
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1>dieren onderbouw</h1>
        <p>Welkom bij de dieren voor onderbouw.</p>
        //Sleep:
        Hert → wild
        Schaap → boerderij
    </div>
  );
}