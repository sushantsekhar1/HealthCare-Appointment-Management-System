import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { assets } from '../assets/assets'
import darklogo from '../assets/darklogo.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='md:mx-9'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* Logo & Description */}
        <div>
          <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer'>
            <img className='w-10' src={darklogo} alt="Logo" />
            <h1 className="text-2xl font-bold text-black flex items-center">
              Health
              <span className="ml-1 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent group hover:animate-pulse transition duration-300">
                Mate
              </span>
            </h1>
          </div>
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 mt-2">
            Empowering lives with seamless healthcare access. Your health, our priority.
          </p>
        </div>

        {/* Company Links */}
        <div className='text-center'>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <a href="/"><li className="hover:text-blue-500 cursor-pointer">Home</li></a>
            <a href="/about"><li className="hover:text-blue-500 cursor-pointer">About Us</li></a>
            <a href="/contact"><li className="hover:text-blue-500 cursor-pointer">Contact Us</li></a>
            <a href="#"><li className="hover:text-blue-500 cursor-pointer">Privacy Policy</li></a>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm mb-4">
            <li>📞 +91-123-786-3344</li>
            <li>📧 healthmate@gmail.com</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-black">
              <FaXTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-gray-300 dark:border-gray-700 pt-4 text-sm ">
        <p>&copy; 2025 HealthMate.com – All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
