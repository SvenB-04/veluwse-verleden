"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Grave {
  id: number;
  name: string;
  description: string;
  image: string;
  insights: string[];
}

const graven: Grave[] = [
  {
    id: 1,
    name: "Grafheuvel 1",
    description: "Een eenvoudig graf met een bloem",
    image: "/omgaan-met-de-dood/grafheuvel-eenvoudig.png",
    insights: ["Eenvoudige begrafenis", "Persoonlijk eerbetoon"]
  },
  {
    id: 2,
    name: "Grafheuvel 2",
    description: "Een groot familiegraf met veel bloemen",
    image: "/omgaan-met-de-dood/grafheuvel-familie.png",
    insights: ["Welgestelde familie", "Groot maatschappelijk aanzien"]
  },
  {
    id: 3,
    name: "Grafheuvel 3",
    description: "Een graf met religieuze symbolen",
    image: "/omgaan-met-de-dood/grafheuvel-religieus.png",
    insights: ["Geloof speelt een rol", "Religie bepaalt begrafenisceremonie"]
  }
];

const reflectieVragen = [
  "Welke sociale verschillen zie je tussen de graven?",
  "Wat zegt de grootte en decoratie van een graf over de persoon?",
  "Hoe bepaalt geloof de manier van begraven?",
  "Welke machtstructuren zie je in de keuze van locatie en grootte van het graf?"
];

export default function OmgaanMetDeDoodBoven() {
  useAFKHandler(60000);
  const router = useRouter();
  
  const [currentGraveIndex, setCurrentGraveIndex] = useState(0);
  const [analyzedGraves, setAnalyzedGraves] = useState<number[]>([]);
  const [showReflection, setShowReflection] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  
  const currentGrave = graven[currentGraveIndex];
  
  const handleAnalyzeGrave = () => {
    if (!analyzedGraves.includes(currentGrave.id)) {
      setAnalyzedGraves([...analyzedGraves, currentGrave.id]);
    }
  };
  
  const handleNextGrave = () => {
    if (currentGraveIndex < graven.length - 1) {
      setCurrentGraveIndex(currentGraveIndex + 1);
    } else {
      setShowReflection(true);
    }
  };
  
  const handlePreviousGrave = () => {
    if (currentGraveIndex > 0) {
      setCurrentGraveIndex(currentGraveIndex - 1);
    }
  };
  
  const isGraveAnalyzed = analyzedGraves.includes(currentGrave.id);

  if (showReflection) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 p-8">
        <h1 className="text-4xl font-bold text-white mb-8">Reflectie</h1>
        <p className="text-white mb-8 text-lg">Beantwoord de reflectievragen over wat je hebt ontdekt:</p>
        
        <div className="bg-stone-800 p-8 rounded-2xl max-w-2xl w-full mb-8 border border-stone-700">
          {reflectieVragen.map((vraag, index) => (
            <div key={index} className="mb-6">
              <p className="text-white font-semibold mb-3">{index + 1}. {vraag}</p>
              <textarea
                value={selectedAnswers[`vraag${index}`] || ''}
                onChange={(e) => setSelectedAnswers({
                  ...selectedAnswers,
                  [`vraag${index}`]: e.target.value
                })}
                placeholder="Jouw antwoord..."
                className="w-full p-3 rounded bg-stone-700 text-white placeholder-stone-400 min-h-20"
              />
            </div>
          ))}
        </div>
        
        <div className="flex gap-4">
          <button
            onClick={() => setShowReflection(false)}
            className="px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition-colors"
          >
            Terug naar graven
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
          >
            Terug naar home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-900 p-8">
      <h1 className="text-4xl font-bold text-white mb-4">Omgaan met de dood - Bovenbouw</h1>
      <p className="text-stone-300 mb-8 text-lg">Analyseer meerdere graven en ontdek sociale verschillen, machtstructuren en geloof</p>
      
      {/* Huiding voortgang */}
      <div className="mb-8 text-center">
        <p className="text-white text-sm">
          Graf {currentGraveIndex + 1} van {graven.length}
        </p>
        <div className="flex gap-2 mt-3 justify-center">
          {graven.map((grave, index) => (
            <div
              key={grave.id}
              className={`w-3 h-3 rounded-full transition-colors ${
                analyzedGraves.includes(grave.id) ? 'bg-yellow-500' : 'bg-stone-600'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Huidge graf */}
      <div className="bg-stone-800 p-12 rounded-2xl max-w-2xl w-full mb-8 border-2 border-stone-700">
        <h2 className="text-2xl font-bold text-white mb-4">{currentGrave.name}</h2>
        <p className="text-stone-300 mb-6 text-lg italic">"{currentGrave.description}"</p>
        
        {/* Afbeelding van het graf */}
        <div className="mb-8 flex justify-center">
          <Image
            src={currentGrave.image}
            alt={currentGrave.name}
            width={300}
            height={250}
            className="rounded-lg"
          />
        </div>
        
        {isGraveAnalyzed && (
          <div className="bg-stone-700 p-6 rounded-lg">
            <h3 className="text-yellow-400 font-bold mb-4">Wat we ontdekken:</h3>
            <ul className="text-white space-y-2">
              {currentGrave.insights.map((insight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-yellow-400">•</span>
                  {insight}
                </li>
              ))}
            </ul>
            <p className="text-stone-300 mt-6 text-sm">
              Dit graf toont hoe het graf meer vertelt dan alleen waar iemand begraven is. Het vertelt een verhaal over de persoon, hun welstand, hun geloof, en hun maatschappelijke status.
            </p>
          </div>
        )}
        
        {!isGraveAnalyzed && (
          <button
            onClick={handleAnalyzeGrave}
            className="w-full px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
          >
            Analyseer dit graf
          </button>
        )}
      </div>
      
      {/* Navigatie knoppen */}
      <div className="flex gap-4 justify-center flex-wrap">
        <button
          onClick={handlePreviousGrave}
          disabled={currentGraveIndex === 0}
          className="px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ← Vorige
        </button>
        
        {isGraveAnalyzed && (
          <button
            onClick={handleNextGrave}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            {currentGraveIndex === graven.length - 1 ? 'Naar reflectievragen' : 'Volgende →'}
          </button>
        )}
      </div>
      
      {currentGraveIndex === graven.length - 1 && isGraveAnalyzed && (
        <button
          onClick={() => router.push('/')}
          className="mt-6 px-6 py-3 bg-stone-600 text-white rounded-lg hover:bg-stone-500 transition-colors"
        >
          Terug naar home (zonder reflectie)
        </button>
      )}
    </div>
  );
}