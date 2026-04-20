"use client";

import { useAFKHandler } from "@/hooks/useAFKHandler";
import Image from "next/image";

export default function DierenOnder() {
  useAFKHandler(60000); 
  const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.setData('text/plain', e.currentTarget.getAttribute('data-transfer') || '');
  };

  const handleDropWild = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    const animalwild = e.dataTransfer.getData('text/plain');
  };

  const handleDropBoerderij = (e: React.DragEvent<HTMLImageElement>) => {
    e.preventDefault();
    const animalboerderij = e.dataTransfer.getData('text/plain');
  };

  //Sleep: Hert → wild Schaap → boerderij rund → boerderij wild zwijn → wild vos → wild
  return (
    <div className="flex flex-col items-center justify-center h-screen grid-cols-4">
      <div>
        <h2>Dieren Onderbouw</h2>
        <p>Welkom bij de dieren voor onderbouw.</p>
      </div>
      <div>
        <Image src="/dieren/hert.svg" alt="Hert" data-transfer="hert" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/schaap.svg" alt="Schaap" data-transfer="schaap" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/rund.svg" alt="Rund" data-transfer="rund" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/wildzwijn.svg" alt="Wild Zwijn" data-transfer="wildzwijn" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
        <Image src="/dieren/vos.svg" alt="Vos" data-transfer="vos" width={100} height={100} draggable={true} onDragStart={handleDragStart}/>
      </div>
      <div>
        <Image src="/dieren/wild.svg" alt="wild" width={200} height={200} onDrop={handleDropWild}/>
        <Image src="/dieren/boerderij.svg" alt="Boerderij" width={200} height={200} onDrop={handleDropBoerderij}/>
      </div>
        
    </div>
  );
}