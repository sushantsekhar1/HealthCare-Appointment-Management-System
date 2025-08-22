import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
  const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext);
  const { currency, backendUrl } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);

  const updateProfile = async () => {
    try {
      const updateData = {
        address: profileData.address,
        fees: profileData.fees,
        about: profileData.about,
        available: profileData.available
      };

      const { data } = await axios.post(
        `${backendUrl}/api/doctor/update-profile`,
        updateData,
        { headers: { dToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setIsEdit(false);
        getProfileData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  useEffect(() => {
    if (dToken) getProfileData();
  }, [dToken]);

  return profileData && (
    <div className="min-h-screen w-full  flex items-center justify-center px-4 py-8">
      <div className="bg-white bg-gradient-to-tr from-white via-sky-50 to-indigo-50 border shadow-xl rounded-2xl max-w-3xl w-full p-8 flex flex-col items-center gap-6">

        {/* Doctor Image */}
        <img
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          src={profileData.image}
          alt="Doctor"
        />

        {/* Doctor Name and Specialization */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-4xl font-bold bg-gradient-to-r from-blue-700  to-blue-700 text-transparent bg-clip-text">{profileData.name}</h1>
          <p className="text-sm text-gray-600 mt-1">{profileData.degree} — {profileData.speciality}</p>
          <span className="text-xs mt-2 inline-block bg-gradient-to-r from-blue-300 to-purple-00 hover:from-blue-200 hover:to-purple-200 px-2 py-1 rounded-full border border-indigo-300">
            {profileData.experience} years experience
          </span>
        </div>

        {/* About Section */}
        <div className="w-full">
          <p className="font-semibold text-sm text-gray-700 mb-1">About:</p>
          {
            isEdit ? (
              <textarea
                rows={4}
                className="w-full border rounded-lg p-2 focus:outline-indigo-400 text-sm"
                value={profileData.about}
                onChange={(e) =>
                  setProfileData(prev => ({ ...prev, about: e.target.value }))
                }
              />
            ) : (
              <p className="text-sm text-gray-600">{profileData.about}</p>
            )
          }
        </div>

        {/* Fee */}
        <div className="w-full text-sm text-gray-700">
          <p className="font-semibold mb-1">Appointment Fee:</p>
          {
            isEdit ? (
              <input
                type="number"
                className="border p-2 rounded w-full"
                value={profileData.fees}
                onChange={(e) =>
                  setProfileData(prev => ({ ...prev, fees: e.target.value }))
                }
              />
            ) : (
              <p>{currency} {profileData.fees}</p>
            )
          }
        </div>

        {/* Address */}
        <div className="w-full text-sm text-gray-700">
          <p className="font-semibold mb-1">Address:</p>
          {
            isEdit ? (
              <>
                <input
                  type="text"
                  className="w-full mb-2 p-2 border rounded"
                  value={profileData.address.line1}
                  onChange={(e) =>
                    setProfileData(prev => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }))
                  }
                />
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={profileData.address.line2}
                  onChange={(e) =>
                    setProfileData(prev => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }))
                  }
                />
              </>
            ) : (
              <>
                <p>{profileData.address.line1}</p>
                <p>{profileData.address.line2}</p>
              </>
            )
          }
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 w-full text-sm text-gray-700">
          <input
            type="checkbox"
            checked={profileData.available}
            onChange={() =>
              isEdit &&
              setProfileData(prev => ({
                ...prev,
                available: !prev.available
              }))
            }
          />
          <label>Available</label>
        </div>

        {/* Action Button */}
        <div className="w-full flex justify-center mt-4">
          {
            isEdit ? (
              <button
                onClick={updateProfile}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition"
              >
                Save Changes
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-100 transition"
              >
                Edit Profile
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
