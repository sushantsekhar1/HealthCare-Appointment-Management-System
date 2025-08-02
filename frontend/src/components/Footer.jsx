import React from 'react'
import { assets } from '../assets/assets'

import lightlogo from '../assets/lightlogo.png'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
             <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer'>
               <img className='w-10' src={lightlogo} alt="Logo" />
               <h1 className="text-2xl font-bold text-black flex items-center">
                 Health
                 <span className="ml-1 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent group hover:animate-pulse transition duration-300">
                   Mate
                 </span>
               </h1>
             </div>
            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Empowering lives with seamless healthcare access. Your health, our priority.
            </p>
        </div>

        <div className='text-center'>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <a href="/"><li className="hover:text-blue-500 cursor-pointer">Home</li></a>
            <a href="/about"><li className="hover:text-blue-500 cursor-pointer">About Us</li></a>
            <a href="/contact"><li className="hover:text-blue-500 cursor-pointer">Contact Us</li></a>
            <a href="#"> <li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li></a>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +91-123-786-3344</li>
            <li>📧 healthmate@gmail.com</li>
          </ul>
        </div>

      </div>

      <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-4 text-sm">
        <p>&copy; 2025 HealthMate.com – All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
