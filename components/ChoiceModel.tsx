"use client";

import React from "react";

type ChoiceModalProps = {
  isOpen: boolean;
  message: string;
  options: { content: React.ReactNode; onClick: () => void }[];
  info?: React.ReactNode;
};

export default function ChoiceModal({
  isOpen,
  message,
  options,
  info,
}: ChoiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
        <p className="mb-6 text-black">{message}</p>
        {info && <div className="mb-4 text-black">{info}</div>}

        <div className="flex justify-center gap-4 flex-wrap">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={option.onClick}
              className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-700"
            >
              {option.content}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}