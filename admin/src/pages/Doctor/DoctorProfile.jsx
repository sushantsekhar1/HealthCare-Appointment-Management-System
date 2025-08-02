// import React, { useContext, useEffect, useState } from 'react'
// import { DoctorContext } from '../../context/DoctorContext'
// import { AppContext } from '../../context/AppContext'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const DoctorProfile = () => {

//     const { dToken, profileData, setProfileData, getProfileData } = useContext(DoctorContext)
//     const { currency, backendUrl } = useContext(AppContext)
//     const [isEdit, setIsEdit] = useState(false)

//     const updateProfile = async () => {

//         try {

//             const updateData = {
//                 address: profileData.address,
//                 fees: profileData.fees,
//                 about: profileData.about,
//                 available: profileData.available
//             }

//             const { data } = await axios.post(backendUrl + '/api/doctor/update-profile', updateData, { headers: { dToken } })

//             if (data.success) {
//                 toast.success(data.message)
//                 setIsEdit(false)
//                 getProfileData()
//             } else {
//                 toast.error(data.message)
//             }

//             setIsEdit(false)

//         } catch (error) {
//             toast.error(error.message)
//             console.log(error)
//         }

//     }

//     useEffect(() => {
//         if (dToken) {
//             getProfileData()
//         }
//     }, [dToken])

//     return profileData && (
//         <div>
//             <div className='flex flex-col gap-4 m-5'>
//                 <div>
//                     <img className='bg-primary/80 w-full sm:max-w-64 rounded-lg' src={profileData.image} alt="" />
//                 </div>

//                 <div className='flex-1 border border-stone-100 rounded-lg p-8 py-7 bg-white'>

//                     {/* ----- Doc Info : name, degree, experience ----- */}

//                     <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{profileData.name}</p>
//                     <div className='flex items-center gap-2 mt-1 text-gray-600'>
//                         <p>{profileData.degree} - {profileData.speciality}</p>
//                         <button className='py-0.5 px-2 border text-xs rounded-full'>{profileData.experience}</button>
//                     </div>

//                     {/* ----- Doc About ----- */}
//                     <div>
//                         <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About :</p>
//                         <p className='text-sm text-gray-600 max-w-[700px] mt-1'>
//                             {
//                                 isEdit
//                                     ? <textarea onChange={(e) => setProfileData(prev => ({ ...prev, about: e.target.value }))} type='text' className='w-full outline-primary p-2' rows={8} value={profileData.about} />
//                                     : profileData.about
//                             }
//                         </p>
//                     </div>

//                     <p className='text-gray-600 font-medium mt-4'>
//                         Appointment fee: <span className='text-gray-800'>{currency} {isEdit ? <input type='number' onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} /> : profileData.fees}</span>
//                     </p>

//                     <div className='flex gap-2 py-2'>
//                         <p>Address:</p>
//                         <p className='text-sm'>
//                             {isEdit ? <input type='text' onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} /> : profileData.address.line1}
//                             <br />
//                             {isEdit ? <input type='text' onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} /> : profileData.address.line2}
//                         </p>
//                     </div>

//                     <div className='flex gap-1 pt-2'>
//                         <input type="checkbox" onChange={() => isEdit && setProfileData(prev => ({ ...prev, available: !prev.available }))} checked={profileData.available} />
//                         <label htmlFor="">Available</label>
//                     </div>

//                     {
//                         isEdit
//                             ? <button onClick={updateProfile} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Save</button>
//                             : <button onClick={() => setIsEdit(prev => !prev)} className='px-4 py-1 border border-primary text-sm rounded-full mt-5 hover:bg-primary hover:text-white transition-all'>Edit</button>
//                     }

//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DoctorProfile


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
          <h1 className="text-3xl font-bold text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 text-transparent bg-clip-text">{profileData.name}</h1>
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
