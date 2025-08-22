import React from 'react'
import { assets } from '../assets/assets'
import group_profile from "../assets/group_profiles.png";

const Header = () => {
  return (
    <div className=" sm:mx-[10%] bg-[#DFF6FF] rounded-xl px-6 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between">

      {/* Left Section */}
      <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0D47A1] leading-tight mb-4">
            Book Your <br /> Appointment 
            </h1>
            <img src={group_profile} alt="Group Profile" className="w-25 h-12 rounded-full object-cover ring-2 ring-white"/>
            <p className="text-gray-700 text-lg mb-6">
            With 100+ Verified & Trusted Doctors near you.
            </p>
            <a href="#speciality" className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
            Book Appointment
            </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={assets.header_img}
          alt="Doctor"
          className="max-w-xs md:max-w-sm rounded-2xl shadow-xl"
        />
      </div>
    </div>
  )
}

export default Header
