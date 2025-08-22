import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      if (image) formData.append('image', image)

      const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, {
        headers: { token },
      })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return userData ? (
    <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-10">
      {/* Profile Image */}
      <div className="flex items-center justify-center mb-6">
        {isEdit ? (
          <label htmlFor="image">
            <div className="relative cursor-pointer group">
              <img
                className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-md group-hover:opacity-75 transition"
                src={image ? URL.createObjectURL(image) : userData.image}
                alt="Profile"
              />
              <img
                className="w-8 absolute bottom-2 right-2"
                src={image ? '' : assets.upload_icon}
                alt=""
              />
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
          </label>
        ) : (
          <img
            className="w-36 h-36 object-cover rounded-full border-4 border-white shadow-md"
            src={userData.image}
            alt="Profile"
          />
        )}
      </div>

      {/* Name */}
      <div className="text-center">
        {isEdit ? (
          <input
            className="text-3xl font-semibold text-center w-full bg-gray-100 px-3 py-2 rounded-lg"
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
          />
        ) : (
          <h2 className="text-3xl font-semibold text-gray-800">{userData.name}</h2>
        )}
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Contact Information */}
      <div>
        <h3 className="text-lg font-bold text-gray-700 mb-3 underline">Contact Information</h3>
        <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
          <span className="font-semibold text-gray-600">Email:</span>
          <span className="text-blue-600">{userData.email}</span>

          <span className="font-semibold text-gray-600">Phone:</span>
          {isEdit ? (
            <input
              className="bg-gray-100 px-2 py-1 rounded w-full"
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <span className="text-blue-600">{userData.phone}</span>
          )}

          <span className="font-semibold text-gray-600">Address:</span>
          {isEdit ? (
            <div className="space-y-2">
              <input
                className="bg-gray-100 px-2 py-1 rounded w-full"
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <input
                className="bg-gray-100 px-2 py-1 rounded w-full"
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </div>
          ) : (
            <span className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </span>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div className="mt-6">
        <h3 className="text-lg font-bold text-gray-700 mb-3 underline">Basic Information</h3>
        <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
          <span className="font-semibold text-gray-600">Gender:</span>
          {isEdit ? (
            <select
              className="bg-gray-100 px-2 py-1 rounded"
              value={userData.gender}
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <span className="text-gray-500">{userData.gender}</span>
          )}

          <span className="font-semibold text-gray-600">Birthday:</span>
          {isEdit ? (
            <input
              className="bg-gray-100 px-2 py-1 rounded"
              type="date"
              value={userData.dob}
              onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <span className="text-gray-500">{userData.dob}</span>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="mt-8 text-center">
        {isEdit ? (
          <button
            onClick={updateUserProfileData}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  ) : null
}

export default MyProfile
