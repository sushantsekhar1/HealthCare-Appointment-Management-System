// import React from 'react'
// import { specialityData } from '../assets/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//     return (
//         <div id='speciality' className='flex flex-col items-center gap-4 py-16 text-[#262626]'>
//             <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//             <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
//             <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '>
//                 {specialityData.map((item, index) => (
//                     <Link to={`/doctors/${item.speciality}`} onClick={() => scrollTo(0, 0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                         <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt="" />
//                         <p>{item.speciality}</p>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SpecialityMenu

import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <div
            id="speciality"
            className="flex flex-col items-center gap-4 py-16 px-4 text-[#262626] bg-gradient-to-b from-[#f9f9f9] to-white"
        >
            {/* Gradient Title */}
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Find by Speciality
            </h1>

            {/* Subtext */}
            <p className="sm:w-1/2 text-center text-sm text-gray-600">
                Browse through our extensive list of trusted doctors & schedule your appointment with ease.
            </p>

            {/* Speciality Icons */}
            <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto no-scrollbar">
                {specialityData.map((item, index) => (
                    <Link
                        key={index}
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className="group flex flex-col items-center bg-white shadow-md rounded-xl p-4 text-sm cursor-pointer flex-shrink-0 min-w-[100px] sm:min-w-[120px] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out border border-transparent hover:border-blue-500"
                    >
                        <img
                            className="w-14 sm:w-20 mb-2 transform transition-transform duration-300 group-hover:rotate-6 animate-float"
                            src={item.image}
                            alt={item.speciality}
                        />
                        <p className="font-medium text-center text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                            {item.speciality}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;
