import React, {useState} from "react";
import Modal from "./ModalPopUp";
export default function ModalPopUpTest(){
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Modal Popup Example</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={openModal}>
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}