import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { backendUrl, token, setToken } = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const url = state === 'Sign Up'
        ? `${backendUrl}/api/user/register`
        : `${backendUrl}/api/user/login`

      const payload = state === 'Sign Up'
        ? { name, email, password }
        : { email, password }

      const { data } = await axios.post(url, payload)

      if (data.success) {
        localStorage.setItem('token', data.token)
        setToken(data.token)
        toast.success(`${state} successful`)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    }
  }

  useEffect(() => {
    if (token) navigate('/')
  }, [token])

  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl transition-all duration-300"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {state === 'Sign Up' ? 'Create Account' : 'Welcome Back'}
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          {state === 'Sign Up' ? 'Sign up to book your appointment' : 'Log in to continue'}
        </p>

        {state === 'Sign Up' && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Rajesh Kumar"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-white py-2 rounded-md hover:bg-opacity-90 transition"
        >
          {state === 'Sign Up' ? 'Create Account' : 'Login'}
        </button>

        <div className="text-center mt-4 text-sm">
          {state === 'Sign Up' ? (
            <>
              Already have an account?{' '}
              <span
                onClick={() => setState('Login')}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Login here
              </span>
            </>
          ) : (
            <>
              New here?{' '}
              <span
                onClick={() => setState('Sign Up')}
                className="text-blue-500 cursor-pointer hover:underline"
              >
                Create account
              </span>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default Login
