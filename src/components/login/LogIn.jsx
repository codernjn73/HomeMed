import React, { useState } from "react";

export default function LogIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to a server or displaying a confirmation message
    console.log("Form submitted!");
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear form fields after submission
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className='flex justify-center m-4 p-4'>
      <div className="my-8 flex flex-col items-center border-2 rounded-2xl justify-center w-1/2">
        {/* Form title */}
        <h1 className="text-3xl font-bold mb-4">Log In</h1>
        <p className="text-lg">Log In to get our services.</p>
        {/* Feedback form */}
        <form onSubmit={handleSubmit} className="max-w-md mt-4">

          {/* Username input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-semibold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          {/* Password input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
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
  );
}
