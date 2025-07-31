// import React from 'react'
// import { assets } from '../assets/assets'

// const Contact = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
//         <div className='flex flex-col justify-center items-start gap-6'>
//           <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
//           <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
//           <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
//           <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
//           <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Contact


import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 py-12 bg-white text-gray-800">

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

          {/* <div>
            <h3 className="text-lg font-semibold text-gray-700">CAREERS AT PRESCRIPTO</h3>
            <p className="text-gray-500 mt-2">Learn more about our teams and job openings.</p>
            <button className="mt-4 px-6 py-2 border border-gray-800 text-gray-800 font-medium rounded hover:bg-gray-800 hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </div> */}
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
