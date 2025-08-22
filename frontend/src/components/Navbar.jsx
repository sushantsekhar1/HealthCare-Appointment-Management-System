import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
// import lightlogo from '../assets/lightlogo.png'
import darklogo from '../assets/darklogo.png'

const Navbar = () => {

  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      
      <div onClick={() => navigate('/')} className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10' src={darklogo} alt="Logo" />
        <h1 className="text-2xl font-bold text-black flex items-center">
          Health
          <span className="ml-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent group hover:animate-pulse transition duration-300">
            Mate
          </span>
        </h1>
      </div>

      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' >
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' >
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 mr-9'>
        {
          token && userData ? (
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-red-600 text-red-500 cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          ) : (
              <button onClick={()=> {navigate('/login'); scrollTo(0,0)}} className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ">
                  Create Account
              </button>
          )
        }

        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden ' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full ' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-10' src={darklogo} alt="Logo" />
            <h1 className="text-2xl font-bold text-black dark:text-white flex items-center">
              Health
              <span className="ml-1 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent group hover:animate-pulse transition duration-300">
                Mate
              </span>
            </h1>
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>


          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
            <NavLink to="/" onClick={() => setShowMenu(false)} className={({ isActive }) => `px-4 py-2 rounded inline-block font-medium ${ isActive ? 'bg-blue-400 text-white' : 'text-black' }`}> HOME </NavLink>
            <NavLink to="/doctors" onClick={() => setShowMenu(false)} className={({ isActive }) => `px-4 py-2 rounded inline-block font-medium ${ isActive ? 'bg-blue-400 text-white' : 'text-black' }`}> ALL DOCTORS </NavLink>
            <NavLink to="/about" onClick={() => setShowMenu(false)} className={({ isActive }) => `px-4 py-2 rounded inline-block font-medium ${ isActive ? 'bg-blue-400 text-white' : 'text-black' }`}> ABOUT </NavLink>
            <NavLink to="/contact" onClick={() => setShowMenu(false)} className={({ isActive }) => `px-4 py-2 rounded inline-block font-medium ${ isActive ? 'bg-blue-400 text-white' : 'text-black' }`}> CONTACT </NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
