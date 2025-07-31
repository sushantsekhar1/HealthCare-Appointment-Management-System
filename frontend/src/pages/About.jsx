// import React from 'react'
// import { assets } from '../assets/assets'

// const About = () => {
//   return (
//     <div>

//       <div className='text-center text-2xl pt-10 text-[#707070]'>
//         <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
//       </div>

//       <div className='my-10 flex flex-col md:flex-row gap-12'>
//         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
//         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
//           <p>Welcome to HealthMate, your trusted partner in managing your healthcare needs conveniently and efficiently. At HealthMate, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
//           <p>HealthMate is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, HealthMate is here to support you every step of the way.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>Our vision at HealthMate is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//         </div>
//       </div>

//       <div className='text-xl my-4'>
//         <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col md:flex-row mb-20'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>EFFICIENCY:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>CONVENIENCE: </b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>PERSONALIZATION:</b>
//           <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default About



import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-4 md:px-16 py-12 bg-[#f9fbff] text-gray-700">
      
      {/* Heading */}
      <div className="text-center text-3xl font-semibold mb-10 text-[#3d3d3d]">
        <p className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">ABOUT US</p>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
        <img
          className="w-full md:max-w-md rounded-xl shadow-md"
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
        <div className="border rounded-xl px-6 py-8 text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white transition duration-300 shadow-sm cursor-pointer">
          <h4 className="font-bold mb-2">EFFICIENCY</h4>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-xl px-6 py-8 text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white transition duration-300 shadow-sm cursor-pointer">
          <h4 className="font-bold mb-2">CONVENIENCE</h4>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-xl px-6 py-8 text-center hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:text-white transition duration-300 shadow-sm cursor-pointer">
          <h4 className="font-bold mb-2">PERSONALIZATION</h4>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
