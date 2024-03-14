
import React, { useState } from "react";
import Modal from "../modal-popup/ModalPopUp";
import SignUp from "../signup/SignUp";
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening the modal
  const handleSignUp = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header className="text-white my-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-6 h-auto">
        {/* Logo */}
        <div className="text-2xl bg-black rounded-3xl h-12 md:h-12 flex items-center w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0 md:mr-4">
          <p className="text-center md:text-left">HomeMed</p>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4 md:space-x-6 bg-black rounded-3xl h-12 w-full md:w-auto flex items-center justify-center md:justify-end px-2 md:px-4 mb-2 md:mb-0">
          <NavLink to='/' className="hover:text-gray-400">
            Home
          </NavLink>
          <a href="#" className="hover:text-gray-400">
            Our Services
          </a>
          <a href="#" className="hover:text-gray-400">
            Order Medicine
          </a>
          <NavLink to='/about' className="hover:text-gray-400">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-400">
            Contact Us
          </NavLink>
        </nav>

        {/* Login/Sign Up Buttons */}
        <div className="bg-black rounded-3xl h-12 flex items-center w-1/6 justify-around">
          <NavLink to='/login' className="hover:bg-blue-600 text-white h-full rounded-3xl w-1/2 flex justify-center items-center">
            Log In
          </NavLink>

          <NavLink to='/signup'
            className="hover:bg-blue-600 text-white h-full rounded-3xl w-1/2 flex justify-center items-center"
            onClick={handleSignUp}
          >
            Sign Up
          </NavLink>
        </div>
      </div>

      {/* Modal */}
      {/* <Modal isVisible={isModalOpen} onClose={handleCloseModal} modal={<SignUp/>} /> */}
    </header>
  );
}
