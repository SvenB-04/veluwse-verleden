"use client";

import React from "react";

type ChoiceModalProps = {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function ChoiceModal({
  isOpen,
  message,
  onConfirm,
  onCancel,
}: ChoiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 text-center">
        <p className="mb-6 text-lg">{message}</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-700"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-600 text-black rounded-lg hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}