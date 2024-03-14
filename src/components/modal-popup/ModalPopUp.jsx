import { ReactDOM } from "react";

export default function ModalPopUp({ isOpen, onClose }) {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Modal Content</h2>
          <p>This is a simple modal popup.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={onClose}>
            Close
          </button>
        </div>
      </div>,
      document.getElementById("modal-root")
    );
  }