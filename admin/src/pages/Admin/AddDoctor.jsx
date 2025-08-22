import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'
import axios from 'axios'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState('1 Year')
  const [fees, setFees] = useState('')
  const [about, setAbout] = useState('')
  const [speciality, setSpeciality] = useState('General physician')
  const [degree, setDegree] = useState('')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')

  const { backendUrl } = useContext(AppContext)
  const { aToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      if (!docImg) return toast.error('Image Not Selected')

      const formData = new FormData()
      formData.append('image', docImg)
      formData.append('name', name)
      formData.append('email', email)
      formData.append('password', password)
      formData.append('experience', experience)
      formData.append('fees', Number(fees))
      formData.append('about', about)
      formData.append('speciality', speciality)
      formData.append('degree', degree)
      formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

      const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

      if (data.success) {
        toast.success(data.message)
        setDocImg(false)
        setName('')
        setPassword('')
        setEmail('')
        setAddress1('')
        setAddress2('')
        setDegree('')
        setAbout('')
        setFees('')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="p-6 w-full max-w-6xl mx-auto ">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add Doctor</h2>

      <div className="bg-white rounded-2xl shadow-md p-8 space-y-10 border bg-gradient-to-r from-blue-100 to-white-100">

        {/* Image Upload */}
        <div className="flex items-center gap-6">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              className="w-20 h-20 object-cover rounded-full border-2 border-dashed border-gray-300 bg-gray-100"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Upload"
            />
          </label>
          <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
          <div className="text-gray-600">
            <p className="font-medium">Upload Doctor Picture</p>
            <p className="text-sm text-gray-400">PNG or JPG (max 2MB)</p>
          </div>
        </div>

        {/* Form Grid */}
        <div className="grid lg:grid-cols-2 gap-8 text-gray-700">

          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input value={name} onChange={e => setName(e.target.value)} type="text" required placeholder="Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder="Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input value={password} onChange={e => setPassword(e.target.value)} type="password" required placeholder="Password"
                className="w-full border rounded-lg px-4 py-2 focus:outline-primary" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Experience</label>
              <select value={experience} onChange={e => setExperience(e.target.value)}
                className="w-full border rounded-lg px-4 py-2">
                {['1','2','3','4','5','6','7','8','9','10'].map(year => (
                  <option key={year} value={`${year} Year`}>{year} Year{year > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Fees</label>
              <input value={fees} onChange={e => setFees(e.target.value)} type="number" required placeholder="Doctor fees"
                className="w-full border rounded-lg px-4 py-2" />
            </div>
          </div>

          <div className="space-y-4">

            <div>
              <label className="block mb-1 font-medium">Speciality</label>
              <select value={speciality} onChange={e => setSpeciality(e.target.value)}
                className="w-full border rounded-lg px-4 py-2">
                {[
                  'General physician',
                  'Gynecologist',
                  'Dermatologist',
                  'Pediatricians',
                  'Neurologist',
                  'Gastroenterologist',
                ].map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Degree</label>
              <input value={degree} onChange={e => setDegree(e.target.value)} type="text" required placeholder="Degree"
                className="w-full border rounded-lg px-4 py-2" />
            </div>

            <div>
              <label className="block mb-1 font-medium">Address</label>
              <input value={address1} onChange={e => setAddress1(e.target.value)} type="text" required placeholder="Address Line 1"
                className="w-full border rounded-lg px-4 py-2 mb-2" />
              <input value={address2} onChange={e => setAddress2(e.target.value)} type="text" required placeholder="Address Line 2"
                className="w-full border rounded-lg px-4 py-2" />
            </div>
          </div>
        </div>

        {/* About Doctor */}
        <div>
          <label className="block mb-2 font-medium">About Doctor</label>
          <textarea value={about} onChange={e => setAbout(e.target.value)} rows={4} placeholder="Write about doctor..."
            className="w-full border rounded-lg px-4 py-3 focus:outline-primary resize-none"></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button type="submit"
            className=" bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 rounded-full font-semibold px-6 py-3 rounded-full transition">
            Add Doctor
          </button>
        </div>

      </div>
    </form>
  )
}

export default AddDoctor
