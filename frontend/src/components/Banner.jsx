// import React from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom'

// const Banner = () => {

//     const navigate = useNavigate()

//     return (
//         <div className='flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>

//             {/* ------- Left Side ------- */}
//             <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
//                 <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
//                     <p>Book Appointment</p>
//                     <p className='mt-4'>With 100+ Trusted Doctors</p>
//                 </div>
//                 <button onClick={() => { navigate('/login'); scrollTo(0, 0) }} className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all '>Create account</button>
//             </div>

//             {/* ------- Right Side ------- */}
//             <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
//                 <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
//             </div>
//         </div>
//     )
// }

// export default Banner

// import React from 'react';
// import appointment_img from '../assets/appointment_img.png'; // ✅ Correct import

// const Banner = () => {
//   return (
//     <div className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8">
      
//       {/* ----------Left Banner---------- */}
//       <div className="max-w-xl text-center md:text-left">
//         <p className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
//           Book Appointment
//         </p>
//         <p className="text-xl text-gray-700 mb-6">
//           With 100+ Trusted Doctors
//         </p>
//         <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition">
//           Create Account
//         </button>
//       </div>

//       {/* ----------Right Banner---------- */}
//       <div className="w-full md:w-1/2">
//         <img src={appointment_img} alt="Appointment" className="w-full h-auto rounded-xl" />
//       </div>

//     </div>
//   );
// };

// export default Banner;


import React from 'react';
import appointment_img from '../assets/appointment_img.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-cyan-100 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl shadow-md transition-colors duration-500 ">

      {/* ----------Left Banner---------- */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800  mb-4 leading-tight ">
          Book Your Appointment
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          With 100+ Verified & Trusted Doctors near you.
        </p>
        <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition duration-300">
          Create Account
        </button>
      </div>

      {/* ----------Right Banner---------- */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={appointment_img}
          alt="Appointment"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-2xl shadow-lg"
        />
      </div>
      
    </div>
  );
};

export default Banner;

