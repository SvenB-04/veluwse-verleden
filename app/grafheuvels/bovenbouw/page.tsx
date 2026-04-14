"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function GrafheuvelsBoven() {
  useAFKHandler(60000); // 60 segundos sin actividad
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Grafheuvels Bovenbouw</h1>
      <p>Welkom bij de grafheuvels voor bovenbouw.</p>
    </div>
  );
}