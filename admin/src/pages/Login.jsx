import axios from 'axios'
import React, { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const { setDToken } = useContext(DoctorContext)
  const { setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const url = state === 'Admin'
        ? `${backendUrl}/api/admin/login`
        : `${backendUrl}/api/doctor/login`

      const { data } = await axios.post(url, { email, password })

      if (data.success) {
        const tokenKey = state === 'Admin' ? 'aToken' : 'dToken'
        const setToken = state === 'Admin' ? setAToken : setDToken

        setToken(data.token)
        localStorage.setItem(tokenKey, data.token)
        toast.success(`${state} login successful`)
      } else {
        toast.error(data.message)
      }

    } catch (err) {
      toast.error("Login failed. Check credentials or server.")
    }
  }

  return (
    <div className="min-h-[90vh] flex items-center justify-center h-screen" >
      <form onSubmit={onSubmitHandler} className="bg-white shadow-2xl rounded-xl p-8 w-[340px] sm:w-[400px] flex flex-col gap-4 border border-gray-200">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          {state} Login
        </h2>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="example@gmail.com"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="••••••••"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-white py-2 rounded-md hover:bg-opacity-90 transition">
          Login
        </button>

        <p className="text-sm text-center mt-2">
          {
            state === 'Admin'
              ? <>Doctor Login? <span onClick={() => setState('Doctor')} className="text-blue-500 cursor-pointer underline">Click here</span></>
              : <>Admin Login? <span onClick={() => setState('Admin')} className="text-blue-500 cursor-pointer underline">Click here</span></>
          }
        </p>
      </form>
    </div>
  )
}

export default Login

