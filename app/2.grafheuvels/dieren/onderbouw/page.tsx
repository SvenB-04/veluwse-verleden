"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DierenOnder() {
  useAFKHandler(60000, "/2.grafheuvels"); 
  const router = useRouter();
  
  // State voor de dieren in elke zone
  const [wildAnimals, setWildAnimals] = useState<string[]>([]);
  const [farmAnimals, setFarmAnimals] = useState<string[]>([]);
  
  // State voor de modal
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{
    isCorrect: boolean;
    message: string;
  }>({ isCorrect: false, message: '' });
  
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.setData('text/plain', e.currentTarget.getAttribute('data-transfer') || '');
  };

  const handleDropWild = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    const animal = e.dataTransfer.getData('text/plain');
    if (animal && !wildAnimals.includes(animal)) {
      setWildAnimals(prev => [...prev, animal]);
    }
  };

  const handleDropBoerderij = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    const animal = e.dataTransfer.getData('text/plain');
    if (animal && !farmAnimals.includes(animal)) {
      setFarmAnimals(prev => [...prev, animal]);
    }
  };

  // Functie om te resetten
  const resetGame = () => {
    setWildAnimals([]);
    setFarmAnimals([]);
    setShowModal(false);
  };

  // Functie om te controleren of alle dieren op de juiste plek zijn gesleept
  const checkDierenPlaatsing = () => {
    // Juiste indeling volgens de commentaar:
    // Hert → wild, Schaap → boerderij, Rund → boerderij, Wild zwijn → wild, Vos → wild
    const juisteWild = ['hert', 'wildzwijn', 'vos'];
    const juisteBoerderij = ['schaap', 'rund'];
    
    // Controleer of alle dieren in de juiste zones zitten
    const wildCorrect = juisteWild.every(animal => wildAnimals.includes(animal)) && 
      wildAnimals.every(animal => juisteWild.includes(animal));
    const boerderijCorrect = juisteBoerderij.every(animal => farmAnimals.includes(animal)) && 
      farmAnimals.every(animal => juisteBoerderij.includes(animal));
    
    // Controleer of alle dieren zijn geplaatst (5 dieren totaal)
    const alleDierenGeplaatst = wildAnimals.length + farmAnimals.length === 5;
    
    return {
      isCorrect: wildCorrect && boerderijCorrect && alleDierenGeplaatst,
      wildCorrect,
      boerderijCorrect,
      alleDierenGeplaatst
    };
  };

  //Sleep: Hert → wild Schaap → boerderij rund → boerderij wild zwijn → wild vos → wild
  return (
    <div className="flex flex-col items-center justify-center h-screen grid-cols-4">
      <div>
        <h2>Dieren Onderbouw</h2>
        <p>Welkom bij de dieren voor onderbouw.</p>
        <p>Sleep de dieren naar de juiste plek: wild of boerderij.</p>
      </div>
      <div>
        <Image src="/dieren/hert.svg" alt="Hert" data-transfer="hert" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/schaap.svg" alt="Schaap" data-transfer="schaap" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/rund.svg" alt="Rund" data-transfer="rund" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/wildzwijn.svg" alt="Wild Zwijn" data-transfer="wildzwijn" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/vos.svg" alt="Vos" data-transfer="vos" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
      </div>
      <div className="flex gap-8">
        <div className="text-center">
          <h3>Wild</h3>
          <Image src="/dieren/wild.svg" alt="wild" width={200} height={200} onDrop={handleDropWild} onDragOver={(e) => e.preventDefault()}/>
          <div className="mt-2">
            <p>Dieren hier: {wildAnimals.join(', ')}</p>
          </div>
        </div>
        <div className="text-center">
          <h3>Boerderij</h3>
          <Image src="/dieren/boerderij.svg" alt="Boerderij" width={200} height={200} onDrop={handleDropBoerderij} onDragOver={(e) => e.preventDefault()}/>
          <div className="mt-2">
            <p>Dieren hier: {farmAnimals.join(', ')}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button 
          onClick={() => {
            const result = checkDierenPlaatsing();
            let message = '';
            if (result.isCorrect) {
              message = 'Goed gedaan! Alle dieren zijn op de juiste plek gesleept.';
            } else {
              message = 'Niet helemaal goed. ';
              if (!result.alleDierenGeplaatst) {
                message += 'Niet alle dieren zijn geplaatst. ';
              }
              if (!result.wildCorrect) {
                message += 'Controleer de wilde dieren. ';
              }
              if (!result.boerderijCorrect) {
                message += 'Controleer de boerderijdieren. ';
              }
            }
            setModalContent({ isCorrect: result.isCorrect, message });
            setShowModal(true);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Controleer antwoord
        </button>
      </div>
      
      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-bold mb-4">
              {modalContent.isCorrect ? 'Gefeliciteerd!' : 'Probeer opnieuw'}
            </h3>
            <p className="mb-6">{modalContent.message}</p>
            <div className="flex gap-4 justify-end">
              {modalContent.isCorrect ? (
                <button
                  onClick={() => router.push('/')}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Terug naar hoofdpagina
                </button>
              ) : (
                <>
                  <button
                    onClick={resetGame}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Opnieuw proberen
                  </button>
                  <button
                    onClick={() => router.push('/')}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                  >
                    Terug naar hoofdpagina
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}