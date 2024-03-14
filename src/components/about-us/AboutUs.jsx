
import React from "react";

// AboutUs component represents the About Us page for a college project
function AboutUs() {
  return (
    <div className='w-screen bg-gray-100'>
    <div className="container mx-auto mt-16 pt-8 px-4 text-black bg-gray-100 w-screen"> {/* Added bg-gray-100 for light background color */}
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
      <div className="md:flex md:flex-wrap">
        {/* Left Section */}
        <div className="md:w-1/2 md:pr-4 mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Welcome to HomeMed!
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700">
              Welcome to our project, HomeMed! We're a group of students passionate
              about web development, and we've created HomeMed as part of our{" "}
              <span className="font-bold">Avishkar</span> event{" "}
              <span className="font-bold">"Mechathon"</span> under{" "}
              <span className="font-bold">Mechrocosm</span>.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Mission and Vision</h2>
            <p className="text-gray-700">
              Our mission is to develop HomeMed as a learning tool for understanding web development concepts. We aim to provide a hands-on experience for students to explore the process of building and managing a web-based service like HomeMed.
            </p>
          </section>
        </div>
        {/* Right Section */}
        <div className="md:w-1/2 md:pl-4 mb-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <ul className="list-disc list-inside">
              <li>Ranjan Kumar - 20227042</li>
              <li>Akarsh Kumar - 20227001</li>
              <li>Manish Kumar - 20227032</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions or suggestions regarding our project, feel
              free to contact us at{" "}
              {/* <Link to="/contact-us" className="text-blue-500">
                    Get in touch
              </Link> */}
              .
            </p>
            <p className="text-gray-700">MNNIT Allahabad</p>
            <p className="text-gray-700">Production and Industrial Engineering</p>
            <p className="text-gray-700">
              Address: SV Patel Hostel
            </p>
          </section>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
