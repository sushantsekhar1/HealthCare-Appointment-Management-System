import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-12 text-gray-800">

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          CONTACT US</h2>
        <p className="mt-2 text-gray-500">We would love to hear from you!</p>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Info Section */}
        <div className="flex-1 space-y-6 text-sm md:text-base">
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">OUR OFFICE</h3>
            <p className="text-gray-500 mt-2">
              6th Cross Road, Neeladri Nagar<br />
              Electronic City Phase I, Electronic City, Bengaluru, Karnataka

            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">CONTACT</h3>
            <p className="text-gray-500 mt-2">
              Tel: +91-123-786-3344<br />
              Email: <a href="mailto:healthmate@gmail.com" className="text-blue-600 underline">healthmate@gmail.com</a>
            </p>
          </div>

  
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img 
            src={assets.contact_image} 
            alt="Contact Us" 
            className="w-full max-w-md mx-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
