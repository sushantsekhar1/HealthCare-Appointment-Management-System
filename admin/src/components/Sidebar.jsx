// import React, { useContext } from 'react'
// import { assets } from '../assets/assets'
// import { NavLink } from 'react-router-dom'
// import { DoctorContext } from '../context/DoctorContext'
// import { AdminContext } from '../context/AdminContext'

// const Sidebar = () => {

//   const { dToken } = useContext(DoctorContext)
//   const { aToken } = useContext(AdminContext)

//   return (
//     <div className='min-h-screen bg-white border-r'>
//       {aToken && <ul className='text-[#515151] mt-5'>

//         <NavLink to={'/admin-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
//           <img className='min-w-5' src={assets.home_icon} alt='' />
//           <p className='hidden md:block'>Dashboard</p>
//         </NavLink>
//         <NavLink to={'/all-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
//           <img className='min-w-5' src={assets.appointment_icon} alt='' />
//           <p className='hidden md:block'>Appointments</p>
//         </NavLink>
//         <NavLink to={'/add-doctor'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
//           <img className='min-w-5' src={assets.add_icon} alt='' />
//           <p className='hidden md:block'>Add Doctor</p>
//         </NavLink>
//         <NavLink to={'/doctor-list'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
//           <img className='min-w-5' src={assets.people_icon} alt='' />
//           <p className='hidden md:block'>Doctors List</p>
//         </NavLink>
//       </ul>}

//       {dToken && <ul className='text-[#515151] mt-5'>
//         <NavLink to={'/doctor-dashboard'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
//           <img className='min-w-5' src={assets.home_icon} alt='' />
//           <p className='hidden md:block'>Dashboard</p>
//         </NavLink>
//         <NavLink to={'/doctor-appointments'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
//           <img className='min-w-5' src={assets.appointment_icon} alt='' />
//           <p className='hidden md:block'>Appointments</p>
//         </NavLink>
//         <NavLink to={'/doctor-profile'} className={({ isActive }) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary' : ''}`}>
//           <img className='min-w-5' src={assets.people_icon} alt='' />
//           <p className='hidden md:block'>Profile</p>
//         </NavLink>
//       </ul>}
//     </div>
//   )
// }

// export default Sidebar

import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { DoctorContext } from '../context/DoctorContext';
import { AdminContext } from '../context/AdminContext';

const Sidebar = () => {
  const { dToken } = useContext(DoctorContext);
  const { aToken } = useContext(AdminContext);

  const navClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group
    ${isActive 
      ? 'bg-gradient-to-r from-teal-400 to-cyan-600 hover:from-teal-300 hover:to-cyan-500 font-semibold  shadow-sm' 
      : 'text-gray-700 hover:bg-gray-100 hover:text-blue-500'}`;

  const MenuItem = ({ to, icon, label }) => (
    <NavLink to={to} className={navClasses}>
      <img className="w-5 transition-transform group-hover:scale-110" src={icon} alt="" />
      <p className="hidden md:block text-sm">{label}</p>
    </NavLink>
  );

  return (
    <aside className="min-h-screen w-full md:w-64 bg-white border-r shadow-lg p-4 flex flex-col gap-4 ">
      {/* Sidebar header/logo */}
      <nav className="flex flex-col gap-2">
        {aToken && (
          <>
            <MenuItem to="/admin-dashboard" icon={assets.home_icon} label="Dashboard" />
            <MenuItem to="/all-appointments" icon={assets.appointment_icon} label="Appointments" />
            <MenuItem to="/add-doctor" icon={assets.add_icon} label="Add Doctor" />
            <MenuItem to="/doctor-list" icon={assets.people_icon} label="Doctors List" />
          </>
        )}

        {dToken && (
          <>
            <MenuItem to="/doctor-dashboard" icon={assets.home_icon} label="Dashboard" />
            <MenuItem to="/doctor-appointments" icon={assets.appointment_icon} label="Appointments" />
            <MenuItem to="/doctor-profile" icon={assets.people_icon} label="Profile" />
          </>
        )}
      </nav>

      {/* Optional: footer / version info */}
      <div className="mt-auto text-xs text-gray-400 text-center">
        &copy; 2025 HealthMate. All rights reserved.
      </div>
    </aside>
  );
};

export default Sidebar;
