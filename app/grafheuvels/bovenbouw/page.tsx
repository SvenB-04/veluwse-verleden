"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function GrafheuvelsBoven() {
  useAFKHandler(60000); 
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1>Grafheuvels Bovenbouw</h1>
        <p>Welkom bij de grafheuvels voor bovenbouw.</p>
      </div>
      <div style={{backgroundImage: 'url("/grond.png")'}} className="z-1"></div>
      <div style={{backgroundImage: 'url("/steen.png")'}} className="z-2" onClick={removeLayer}></div>
      <div style={{backgroundImage: 'url("/steen.png")'}} className="z-3" onClick={removeLayer}></div>
      <div style={{backgroundImage: 'url("/hout.png")'}} className="z-4" onClick={removeLayer}></div>
      <div style={{backgroundImage: 'url("/zand.png")'}} className="z-5" onClick={removeLayer}></div>
      <div style={{backgroundImage: 'url("/bloemen.png")'}} className="z-6" onClick={removeLayer}></div>
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