
import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import { Link } from 'react-router-dom';

function Footer() {
  // Contact information
  const contactInfo = {
    address: "SV Patel Hostel, MNNIT Allahabad, Prayagraj",
    email: "contact@homemed.com",
    phone: "+1234567890",
  };

  // Social media links
  const socialMediaLinks = [
    { name: "Facebook", icon: <FiFacebook /> },
    { name: "Twitter", icon: <FiTwitter /> },
    { name: "Instagram", icon: <FiInstagram /> },
    { name: "LinkedIn", icon: <FiLinkedin /> },
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto flex flex-wrap">
        {/* Contact section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-2xl mb-4">Contact Us</h2>
          <p className="flex items-center mb-2"><FaMapMarkerAlt className="mr-2" /> {contactInfo.address}</p>
          <p className="flex items-center mb-2"><FaEnvelope className="mr-2" /> {contactInfo.email}</p>
          <p className="flex items-center"><FaPhone className="mr-2" /> {contactInfo.phone}</p>
        </div>

        {/* Social media links section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-2xl mb-4">Follow Us</h2>
          <ul className="flex">
            {socialMediaLinks.map((link, index) => (
              <li key={index} className="mr-4">{link.icon}</li>
            ))}
          </ul>
        </div>

        {/* Logo section */}
        <div className="w-full lg:w-1/3 flex-col justify-center items-center">
          <h1 className="text-4xl font-bold">HomeMed</h1>
          <p>Aapka Subhchintak!!</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

