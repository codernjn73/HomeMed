// import React, { useState } from "react";
// // ContactUs component for providing feedback
// export default function ContactUs() {
//   // State variables to store form data
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   // Function to handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can handle form submission, like sending data to a server or displaying a confirmation message
//     console.log("Form submitted!");
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Message:", message);
//     // Clear form fields after submission
//     setName("");
//     setEmail("");
//     setMessage("");
//   };

//   return (
//     <div className='flex my-12 mx-8 justify-between items-center'>
//       <div>
//         <img src="/temp/ContactUs.png" alt="Contact Us" />
//       </div>
//       <div className="container mt-8">
//         {/* Form title */}
//         <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//         <p className='text-lg'>Have any question or query? Get in touch with us.</p>
//         {/* Feedback form */}
//         <form onSubmit={handleSubmit} className="max-w-md mt-4">
//           {/* Name input */}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           {/* Phone number */}
//           <div className="mb-4">
//             <label
//               htmlFor="name"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Phone No.
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           {/* Email input */}
//           <div className="mb-4">
//             <label
//               htmlFor="email"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             />
//           </div>
//           {/* Message input */}
//           <div className="mb-4">
//             <label
//               htmlFor="message"
//               className="block text-gray-700 font-semibold mb-2"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows="4"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
//             ></textarea>
//           </div>
//           {/* Submit button */}
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function ContactUs() {
  // State variables to store form data
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to a server or displaying a confirmation message
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear form fields after submission
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");

  };

  return (
    <div className="flex flex-col md:flex-row my-12 mx-8 justify-between items-center">
      {/* Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src="/temp/ContactUs.png" alt="Contact Us" />
      </div>
      {/* Form */}
      <div className="w-full md:w-1/2">
        <div className="container mt-8">
          {/* Form title */}
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">
            Have any questions or queries? Get in touch with us.
          </p>
          {/* Feedback form */}
          <form onSubmit={handleSubmit} className="max-w-md mt-4">
            {/* Name input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Phone number */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-2"
              >
                Phone No.
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Email input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            {/* Message input */}
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

