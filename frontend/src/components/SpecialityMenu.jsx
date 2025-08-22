
import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
    return (
        <div
            id="speciality"
            className="sm:mx-[10%] flex flex-col items-center gap-4 py-16 px-4 text-[#262626]"
        >
            {/* Gradient Title */}
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Find by Speciality
            </h1>

            {/* Subtext */}
            <p className="sm:w-1/2 text-center text-sm text-gray-700">
                Browse through our extensive list of trusted doctors & schedule your appointment with ease.
            </p>

            {/* Speciality Icons */}
            <div className="flex sm:justify-center gap-6 pt-8 w-full overflow-x-auto no-scrollbar">
                {specialityData.map((item, index) => (
                    <Link
                        key={index}
                        to={`/doctors/${item.speciality}`}
                        onClick={() => scrollTo(0, 0)}
                        className="group flex flex-col items-center bg-white/10 shadow-md rounded-xl p-4 text-sm cursor-pointer flex-shrink-0 min-w-[100px] sm:min-w-[120px] hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out border border-white/20 hover:border-blue-500 backdrop-blur-sm"
                    >
                        <img
                            className="w-14 sm:w-20 mb-2 transform transition-transform duration-300 group-hover:rotate-6 animate-float"
                            src={item.image}
                            alt={item.speciality}
                        />
                        <p className="font-medium text-center text-grey group-hover:text-blue-700 transition-colors duration-300 ">
                            {item.speciality}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SpecialityMenu;
