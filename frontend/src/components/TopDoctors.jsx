import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10">
      {/* Section Heading */}
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-500">
        Browse our list of highly-rated, experienced and trusted doctors.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
            className="border border-[#C9D8FF] rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-2 hover:shadow-lg duration-300"
          >
            {/* Doctor Image */}
            <img className="w-full h-50 object-cover bg-[#EAEFFF]" src={doctor.image} alt={doctor.name} />

            {/* Doctor Info */}
            <div className="p-4 space-y-1">
              {/* Availability Badge */}
              <div className="flex items-center gap-2 text-sm">
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    doctor.available ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                ></span>
                <span className={doctor.available ? 'text-green-600' : 'text-gray-500'}>
                  {doctor.available ? 'Available' : 'Not Available'}
                </span>
              </div>

              <p className="text-[#262626] text-lg font-semibold">{doctor.name}</p>
              <p className="text-[#5C5C5C] text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          navigate('/doctors');
          scrollTo(0, 0);
        }}
        className="inline-block bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
      >
        View More Doctors
      </button>
    </div>
  );
};

export default TopDoctors;
