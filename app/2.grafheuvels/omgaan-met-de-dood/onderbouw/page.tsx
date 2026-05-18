"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OmgaanMetDeDoodOnder() {
  useAFKHandler(60000, "/2.grafheuvels");
  const router = useRouter();
  
  // State voor geplaatste items op de grafheuvel
  const [placedItems, setPlacedItems] = useState<string[]>([]);
  
  // State voor het oplichten van de grafheuvel
  const [isGlowing, setIsGlowing] = useState(false);
  
  // State voor de modal
  const [showModal, setShowModal] = useState(false);
  
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.setData('text/plain', e.currentTarget.getAttribute('data-item') || '');
  };

  const handleDropGraf = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const item = e.dataTransfer.getData('text/plain');
    
    // Voeg item toe als het nog niet is geplaatst
    if (item && !placedItems.includes(item)) {
      const newItems = [...placedItems, item];
      setPlacedItems(newItems);
      
      // Als beide items (bloem en pot) zijn geplaatst, laat de grafheuvel oplichten
      if (newItems.length === 2) {
        setIsGlowing(true);
        setTimeout(() => {
          setShowModal(true);
        }, 500);
      }
    }
  };

  const resetGame = () => {
    setPlacedItems([]);
    setIsGlowing(false);
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-stone-900">
      <style>{`
        @keyframes glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.3), 0 0 40px rgba(255, 215, 0, 0.1);
            filter: brightness(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.6), 0 0 80px rgba(255, 215, 0, 0.3);
            filter: brightness(1.1);
          }
        }
        .glowing {
          animation: glow 3s ease-in-out forwards;
        }
      `}</style>
      
      <h1 className="text-4xl font-bold text-white mb-8">Omgaan met de dood - Onderbouw</h1>
      <p className="text-white mb-12 text-lg">Sleep de bloem en pot naar de grafheuvel als teken van respect en liefde</p>
      
      {/* Items om te slepen */}
      <div className="flex gap-12 mb-12">
        <div className="text-center">
          <Image
            src={"/omgaan-met-de-dood/bloem.png"}
            alt={"Bloem"}
            data-item="bloem"
            width={100}
            height={100}
            draggable={true}
            onDragStart={handleDragStart}
            className="cursor-move hover:scale-110 transition-transform"
          />
          <p className="text-white mt-2">Bloem</p>
        </div>
        <div className="text-center">
          <Image
            src={"/omgaan-met-de-dood/pot.png"}
            alt={"Pot"}
            data-item="pot"
            width={100}
            height={100}
            draggable={true}
            onDragStart={handleDragStart}
            className="cursor-move hover:scale-110 transition-transform"
          />
          <p className="text-white mt-2">Pot</p>
        </div>
      </div>
      
      {/* Grafheuvel - drop zone */}
      <div
        className={`text-center p-8 rounded-lg transition-all duration-300 ${
          isGlowing ? 'glowing' : ''
        }`}
      >
        <Image
          src={"/omgaan-met-de-dood/grafheuvel.png"}
          alt={"Grafheuvel"}
          width={400}
          height={300}
          onDrop={handleDropGraf}
          onDragOver={(e) => e.preventDefault()}
          className="cursor-pointer"
        />
        <p className="text-white mt-4 text-sm">
          {placedItems.length === 0 && "Sleep items hier"}
          {placedItems.length === 1 && `${placedItems[0]} geplaatst - nog 1 item nodig`}
          {placedItems.length === 2 && "✨ Compleet - wat een mooi eerbetoon ✨"}
        </p>
      </div>
      
      {/* Knop om opnieuw te proberen */}
      {placedItems.length > 0 && placedItems.length < 2 && (
        <button
          onClick={resetGame}
          className="mt-8 px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition-colors"
        >
          Opnieuw
        </button>
      )}
      
      {/* Modal wanneer klaar */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-stone-800 p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 text-center border-2 border-yellow-600">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Wat mooi...</h2>
            <p className="text-white mb-6 text-lg">
              Je hebt een prachtig eerbetoon gebracht aan degene die is overleden. 
              Door bloemen en een pot neer te leggen, toon je liefde en respect.
            </p>
            <p className="text-stone-300 mb-8">
              Dit is een rustige en serene manier om afscheid te nemen.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={resetGame}
                className="px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 transition-colors"
              >
                Opnieuw
              </button>
              <button
                onClick={() => router.push('/2.grafheuvels')}
                className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Terug naar home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}