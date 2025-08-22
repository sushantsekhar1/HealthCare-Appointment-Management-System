import React, { useEffect, useContext } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {
  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">All Appointments</h2>

      <div className="bg-white rounded-xl border shadow-sm max-h-[80vh] overflow-y-auto text-sm bg-gradient-to-br from-white via-gray-50 to-indigo-50">
        {/* Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2.5fr_1fr_2.5fr_2.5fr_1fr_1fr] px-6 py-3 border-b bg-gray-50 sticky top-0 z-10 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100">
          <p className="font-medium text-gray-600">#</p>
          <p className="font-medium text-gray-600">Patient</p>
          <p className="font-medium text-gray-600">Age</p>
          <p className="font-medium text-gray-600">Date & Time</p>
          <p className="font-medium text-gray-600">Doctor</p>
          <p className="font-medium text-gray-600">Fees</p>
          <p className="font-medium text-gray-600">Action</p>
        </div>

        {/* Rows */}
        {appointments.map((item, index) => (
          <div
            key={index}
            className="flex flex-wrap sm:grid sm:grid-cols-[0.5fr_2.5fr_1fr_2.5fr_2.5fr_1fr_1fr] items-center px-6 py-4 border-b hover:bg-gray-50 transition text-gray-700 hover:bg-indigo-50 "
          >
            <p className="max-sm:hidden">{index + 1}</p>

            <div className="flex items-center gap-3">
              <img src={item.userData.image} alt="User" className="w-8 h-8 rounded-full object-cover" />
              <p>{item.userData.name}</p>
            </div>

            <p className="max-sm:hidden">{calculateAge(item.userData.dob)}</p>

            <p>
              {slotDateFormat(item.slotDate)}, <span className="text-gray-500">{item.slotTime}</span>
            </p>

            <div className="flex items-center gap-3">
              <img src={item.docData.image} alt="Doctor" className="w-8 h-8 rounded-full object-cover bg-gray-100" />
              <p>{item.docData.name}</p>
            </div>

            <p className="font-medium">{currency}{item.amount}</p>

            <div>
              {item.cancelled ? (
                <span className="text-xs px-2 py-1 rounded bg-red-100 text-red-500 font-semibold">Cancelled</span>
              ) : item.isCompleted ? (
                <span className="text-xs px-2 py-1 rounded bg-green-100 text-green-600 font-semibold">Completed</span>
              ) : (
                <img
                  onClick={() => cancelAppointment(item._id)}
                  src={assets.cancel_icon}
                  alt="Cancel"
                  className="w-8 cursor-pointer hover:scale-105 transition"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments
