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
