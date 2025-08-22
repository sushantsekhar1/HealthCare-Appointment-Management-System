import React from 'react';
import appointment_img from '../assets/appointment_img.png';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="sm:mx-[10%] bg-gradient-to-r from-blue-100 to-cyan-100 py-16 px-6 flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl shadow-md transition-colors duration-500 ">

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

