// import React from 'react'
// import { useContext } from 'react'
// import { useEffect } from 'react'
// import { DoctorContext } from '../../context/DoctorContext'
// import { assets } from '../../assets/assets'
// import { AppContext } from '../../context/AppContext'

// const DoctorDashboard = () => {

//   const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
//   const { slotDateFormat, currency } = useContext(AppContext)


//   useEffect(() => {

//     if (dToken) {
//       getDashData()
//     }

//   }, [dToken])

//   return dashData && (
//     <div className='m-5'>

//       <div className='flex flex-wrap gap-3'>
//         <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
//           <img className='w-14' src={assets.earning_icon} alt="" />
//           <div>
//             <p className='text-xl font-semibold text-gray-600'>{currency} {dashData.earnings}</p>
//             <p className='text-gray-400'>Earnings</p>
//           </div>
//         </div>
//         <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
//           <img className='w-14' src={assets.appointments_icon} alt="" />
//           <div>
//             <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
//             <p className='text-gray-400'>Appointments</p>
//           </div>
//         </div>
//         <div className='flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-100 cursor-pointer hover:scale-105 transition-all'>
//           <img className='w-14' src={assets.patients_icon} alt="" />
//           <div>
//             <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
//             <p className='text-gray-400'>Patients</p></div>
//         </div>
//       </div>

//       <div className='bg-white'>
//         <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
//           <img src={assets.list_icon} alt="" />
//           <p className='font-semibold'>Latest Bookings</p>
//         </div>

//         <div className='pt-4 border border-t-0'>
//           {dashData.latestAppointments.slice(0, 5).map((item, index) => (
//             <div className='flex items-center px-6 py-3 gap-3 hover:bg-gray-100' key={index}>
//               <img className='rounded-full w-10' src={item.userData.image} alt="" />
//               <div className='flex-1 text-sm'>
//                 <p className='text-gray-800 font-medium'>{item.userData.name}</p>
//                 <p className='text-gray-600 '>Booking on {slotDateFormat(item.slotDate)}</p>
//               </div>
//               {item.cancelled
//                 ? <p className='text-red-400 text-xs font-medium'>Cancelled</p>
//                 : item.isCompleted
//                   ? <p className='text-green-500 text-xs font-medium'>Completed</p>
//                   : <div className='flex'>
//                     <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
//                     <img onClick={() => completeAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt="" />
//                   </div>
//               }
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }

// export default DoctorDashboard


import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext)
  const { slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (dToken) getDashData()
  }, [dToken])

  return dashData && (
    <div className="m-4 sm:m-6 ">

      {/* --- Overview Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 ">
        <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 shadow-md hover:scale-[1.02] transition">
          <img className="w-14" src={assets.earning_icon} alt="" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{currency} {dashData.earnings}</p>
            <p className="text-sm text-gray-500">Total Earnings</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-teal-100 via-cyan-100 to-blue-100 shadow-md hover:scale-[1.02] transition">
          <img className="w-14" src={assets.appointments_icon} alt="" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{dashData.appointments}</p>
            <p className="text-sm text-gray-500">Appointments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 rounded-xl bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 shadow-md hover:scale-[1.02] transition">
          <img className="w-14" src={assets.patients_icon} alt="" />
          <div>
            <p className="text-2xl font-bold text-gray-700">{dashData.patients}</p>
            <p className="text-sm text-gray-500">Patients</p>
          </div>
        </div>
      </div>

      {/* --- Latest Bookings Section --- */}
      <div className="bg-white border rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-white via-gray-50 to-indigo-50">
        <div className="flex items-center gap-3 px-6 py-4 border-b bg-gradient-to-r from-blue-100 to-purple-100">
          <img src={assets.list_icon} alt="" className="w-5 h-5" />
          <p className="font-semibold text-gray-700 ">Latest Bookings</p>
        </div>

        <div className="divide-y">
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="flex items-center px-6 py-4 gap-4 hover:bg-gray-50 transition-all hover:bg-indigo-50"
            >
              <img
                className="rounded-full w-12 h-12 object-cover border border-gray-200"
                src={item.userData.image}
                alt={item.userData.name}
              />
              <div className="flex-1 text-sm">
                <p className="text-gray-800 font-medium">{item.userData.name}</p>
                <p className="text-gray-500">Booking on {slotDateFormat(item.slotDate)}</p>
              </div>

              {item.cancelled ? (
                <p className="text-red-500 text-xs font-semibold">Cancelled</p>
              ) : item.isCompleted ? (
                <p className="text-green-600 text-xs font-semibold">Completed</p>
              ) : (
                <div className="flex gap-2">
                  <img
                    onClick={() => cancelAppointment(item._id)}
                    className="w-9 cursor-pointer hover:scale-110 transition"
                    src={assets.cancel_icon}
                    alt="Cancel"
                  />
                  <img
                    onClick={() => completeAppointment(item._id)}
                    className="w-9 cursor-pointer hover:scale-110 transition"
                    src={assets.tick_icon}
                    alt="Complete"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DoctorDashboard
