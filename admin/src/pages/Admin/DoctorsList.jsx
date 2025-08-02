// import React, { useContext, useEffect } from 'react'
// import { AdminContext } from '../../context/AdminContext'

// const DoctorsList = () => {

//   const { doctors, changeAvailability , aToken , getAllDoctors} = useContext(AdminContext)

//   useEffect(() => {
//     if (aToken) {
//         getAllDoctors()
//     }
// }, [aToken])

//   return (
//     <div className='m-5 max-h-[90vh] overflow-y-scroll'>
//       <h1 className='text-lg font-medium'>All Doctors</h1>
//       <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
//         {doctors.map((item, index) => (
//           <div className='border border-[#C9D8FF] rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
//             <img className='bg-[#EAEFFF] group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
//             <div className='p-4'>
//               <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
//               <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
//               <div className='mt-2 flex items-center gap-1 text-sm'>
//                 <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
//                 <p>Available</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DoctorsList
import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, changeAvailability, aToken, getAllDoctors } = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className="min-h-screen w-full  p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">All Doctors</h1>
      <div className="w-full flex flex-wrap justify-center gap-6 overflow-y-auto max-h-[85vh] px-4">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden max-w-[240px] w-full transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="relative group">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-44 object-cover transition duration-300"
              />
              {/* Gradient Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 via-pink-300 to-blue-300 opacity-0 group-hover:opacity-40 transition duration-300"></div>
            </div>
            <div className="p-4 bg-gradient-to-br from-white via-gray-50 to-white">
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">{item.speciality}</p>
              <div className="mt-3 flex items-center gap-2 text-sm">
                <input
                  onChange={() => changeAvailability(item._id)}
                  type="checkbox"
                  checked={item.available}
                  className="accent-blue-600"
                />
                <span className="text-gray-600">Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList
