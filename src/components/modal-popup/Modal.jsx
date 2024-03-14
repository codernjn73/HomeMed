import React from "react";

export default function Modal({ isVisible, onClose, modal}) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={onClose}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">{modal}</div>
      </div>
    </div>
  );
}
