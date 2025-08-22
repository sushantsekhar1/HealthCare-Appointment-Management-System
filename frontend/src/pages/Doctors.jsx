import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const specialities = [
  'General physician',
  'Gynecologist',
  'Dermatologist',
  'Pediatricians',
  'Neurologist',
  'Gastroenterologist'
];

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    if (speciality) {
      setFilteredDoctors(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilteredDoctors(doctors);
    }
  }, [doctors, speciality]);

  return (
    <div className="py-12 px-4 md:px-10  min-h-screen text-[#1f1f1f]">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
        Browse Specialist Doctors
      </h1>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {specialities.map((spec, index) => (
          <button
            key={index}
            onClick={() =>
              speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)
            }
            className={`px-5 py-2 rounded-full border-2 transition-all duration-200 text-sm md:text-base ${
              speciality === spec
                ? 'bg-purple-300 text-white border-purple-500'
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            {spec}
          </button>
        ))}
      </div>

      {/* Doctor cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="bg-gradient-to-r from-indigo-100 to-white-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer p-6 text-center hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover bg-[#eaf0ff]"
            />
            <div className="flex justify-center items-center gap-2 text-sm mb-1">
              <span
                className={`w-2 h-2 rounded-full ${
                  item.available ? 'bg-green-500' : 'bg-gray-400'
                }`}
              ></span>
              <span
                className={`${
                  item.available ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                {item.available ? 'Available' : 'Not Available'}
              </span>
            </div>
            <h3 className="font-semibold text-lg text-[#1f1f1f]">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.speciality}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
