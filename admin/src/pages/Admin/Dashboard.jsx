import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className="m-5 space-y-10  p-6 rounded-xl">

      {/* Summary Cards */}
      <div className="flex flex-wrap gap-6">
        {[
          { icon: assets.doctor_icon, count: dashData.doctors, label: 'Doctors' },
          { icon: assets.appointments_icon, count: dashData.appointments, label: 'Appointments' },
          { icon: assets.patients_icon, count: dashData.patients, label: 'Patients' }
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-5 min-w-[200px] bg-gradient-to-r from-white via-indigo-50 to-pink-50 shadow-lg hover:shadow-xl transition rounded-2xl border border-gray-200 hover:scale-[1.03] backdrop-blur-md"
          >
            <img src={item.icon} alt="" className="w-14" />
            <div>
              <p className="text-2xl font-extrabold text-indigo-700">{item.count}</p>
              <p className="text-gray-600 font-medium">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Bookings Section */}
      <div className="bg-gradient-to-br from-white via-gray-50 to-indigo-50 border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b bg-gradient-to-r from-indigo-100 to-pink-100">
          <img src={assets.list_icon} alt="" className="w-5" />
          <h3 className="text-lg font-bold text-gray-700">Latest Bookings</h3>
        </div>

        <div className="divide-y">
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div key={index} className="flex items-center gap-4 px-6 py-4 hover:bg-indigo-50 transition-all">
              <img src={item.docData.image} alt="" className="w-11 h-11 rounded-full border object-cover shadow-sm" />
              <div className="flex-1 text-sm">
                <p className="text-gray-800 font-semibold">{item.docData.name}</p>
                <p className="text-gray-500">Booking on {slotDateFormat(item.slotDate)}</p>
              </div>

              {item.cancelled ? (
                <span className="text-red-600 text-xs font-bold bg-red-100 px-2 py-1 rounded">Cancelled</span>
              ) : item.isCompleted ? (
                <span className="text-green-700 text-xs font-bold bg-green-100 px-2 py-1 rounded">Completed</span>
              ) : (
                <img
                  onClick={() => cancelAppointment(item._id)}
                  src={assets.cancel_icon}
                  alt="Cancel"
                  className="w-8 cursor-pointer hover:scale-110 transition"
                />
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dashboard
