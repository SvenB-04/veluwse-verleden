"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";

export default function GrafheuvelsBoven() {
  function removeLayer(event: React.MouseEvent<HTMLDivElement>) {
    const target = event.currentTarget;
    target.style.display = "none";
  }

  const relikwieën = [
    { name: "Bronzen dolk", image: "/dolk.png" },
    { name: "Klokbeker", image: "/klokbeker.png" },
    { name: "Sieraden", image: "/sieraden.png" },
    { name: "Niks", image: ""}
  ];

  function checkCorrectStatus(chosenStatus: string){
    const foundRelics = ["Bronzen dolk", "Klokbeker", "Sieraden"];
    let correctStatus = "gewone persoon";
    
    if (foundRelics.includes("Bronzen dolk")) {
      correctStatus = "strijder";
    } else if (foundRelics.includes("Sieraden") || foundRelics.includes("Klokbeker")) {
      correctStatus = "belangerijk persoon";
    }
    
    if (chosenStatus === correctStatus) {
      alert("Correct! De status is juist bepaald.");
    } else {
      alert("Incorrect! Probeer opnieuw.");
    }
  }

  useAFKHandler(60000);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1>Grafheuvels Bovenbouw</h1>
        <p>Welkom bij de grafheuvels voor bovenbouw.</p>
      </div>
      <div>
        <div style={{backgroundImage: 'url("/grond.png")'}} className="z-1"></div>
        <div style={{backgroundImage: 'url("/hout.png")'}} className="z-2" onClick={removeLayer}></div>
        <div style={{backgroundImage: 'url("/steen.png")'}} className="z-3" onClick={removeLayer}></div>
        <div style={{backgroundImage: 'url("/steen.png")'}} className="z-4" onClick={removeLayer}></div>
        <div style={{backgroundImage: 'url("/zand.png")'}} className="z-5" onClick={removeLayer}></div>
        <div style={{backgroundImage: 'url("/zand.png")'}} className="z-6" onClick={removeLayer}></div>
        <div style={{backgroundImage: 'url("/bloemen.png")'}} className="z-7" onClick={removeLayer}></div>
      </div>
      <div>
        <h2>Documentatie</h2>
        <p>bepaal met behulp van de gevonden voorwerpen de status van de persoon die hier begraven is.</p>
        <button onClick={() => checkCorrectStatus("belangerijk persoon")} className="">belangerijk persoon</button>
        <button onClick={() => checkCorrectStatus("gewone persoon")} className="">gewone persoon</button>
        <button onClick={() => checkCorrectStatus("strijder")} className="">strijder</button>
      </div>
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