import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-4 md:px-16 py-12 text-gray-700">
      
      {/* Heading */}
      <div className="text-center text-3xl font-semibold mb-10 text-[#3d3d3d]">
        <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">ABOUT US</p>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <img
          className="w-full max-w-md mx-auto rounded-lg shadow-md hover:scale-105 transition-transform duration-500 ease-in-out"
          src={assets.about_image}
          alt="About HealthMate"
        />
        <div className="md:w-3/5 flex flex-col gap-6 text-[15px] leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-blue-600">HealthMate</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. We understand the challenges individuals face when it comes to scheduling doctor appointments and managing health records.
          </p>
          <p>
            HealthMate is committed to excellence in healthcare technology. We continuously enhance our platform with the latest advancements to improve user experience and provide superior service. Whether you're booking your first appointment or managing ongoing care, HealthMate is here to support you every step of the way.
          </p>
          <div>
            <h3 className="font-semibold text-lg text-blue-900 mb-1">Our Vision</h3>
            <p>
              To create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, ensuring easy access to quality care — when and where you need it.
            </p>
          </div>
        </div>
      </div>

      {/* Choose Us Section */}
      <div className="text-center text-2xl font-semibold mb-10">
        <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">WHY CHOOSE US</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-sm">
        {/* Card 1 */}
        <div className="border rounded-xl px-6 py-8 text-center hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300 hover:text-grey-400 transition duration-300 shadow-sm cursor-pointer">
          <h4 className="font-bold mb-2">EFFICIENCY</h4>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-xl px-6 py-8 text-center hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300 hover:text-grey-400 transition duration-300 shadow-sm cursor-pointer">
          <h4 className="font-bold mb-2">CONVENIENCE</h4>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-xl px-6 py-8 text-center hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300 hover:text-grey-400 transition duration-300 shadow-sm cursor-pointer">
          <h4 className="font-bold mb-2">PERSONALIZATION</h4>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
