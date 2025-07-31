// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets'
// import RelatedDoctors from '../components/RelatedDoctors'
// import axios from 'axios'
// import { toast } from 'react-toastify'

// const Appointment = () => {

//     const { docId } = useParams()
//     const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
//     const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

//     const [docInfo, setDocInfo] = useState(false)
//     const [docSlots, setDocSlots] = useState([])
//     const [slotIndex, setSlotIndex] = useState(0)
//     const [slotTime, setSlotTime] = useState('')

//     const navigate = useNavigate()

//     const fetchDocInfo = async () => {
//         const docInfo = doctors.find((doc) => doc._id === docId)
//         setDocInfo(docInfo)
//     }

//     const getAvailableSolts = async () => {

//         setDocSlots([])

//         // getting current date
//         let today = new Date()

//         for (let i = 0; i < 7; i++) {

//             // getting date with index 
//             let currentDate = new Date(today)
//             currentDate.setDate(today.getDate() + i)

//             // setting end time of the date with index
//             let endTime = new Date()
//             endTime.setDate(today.getDate() + i)
//             endTime.setHours(21, 0, 0, 0)

//             // setting hours 
//             if (today.getDate() === currentDate.getDate()) {
//                 currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
//                 currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
//             } else {
//                 currentDate.setHours(10)
//                 currentDate.setMinutes(0)
//             }

//             let timeSlots = [];


//             while (currentDate < endTime) {
//                 let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//                 let day = currentDate.getDate()
//                 let month = currentDate.getMonth() + 1
//                 let year = currentDate.getFullYear()

//                 const slotDate = day + "_" + month + "_" + year
//                 const slotTime = formattedTime

//                 const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

//                 if (isSlotAvailable) {

//                     // Add slot to array
//                     timeSlots.push({
//                         datetime: new Date(currentDate),
//                         time: formattedTime
//                     })
//                 }

//                 // Increment current time by 30 minutes
//                 currentDate.setMinutes(currentDate.getMinutes() + 30);
//             }

//             setDocSlots(prev => ([...prev, timeSlots]))

//         }

//     }

//     const bookAppointment = async () => {

//         if (!token) {
//             toast.warning('Login to book appointment')
//             return navigate('/login')
//         }

//         const date = docSlots[slotIndex][0].datetime

//         let day = date.getDate()
//         let month = date.getMonth() + 1
//         let year = date.getFullYear()

//         const slotDate = day + "_" + month + "_" + year

//         try {

//             const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })
//             if (data.success) {
//                 toast.success(data.message)
//                 getDoctosData()
//                 navigate('/my-appointments')
//             } else {
//                 toast.error(data.message)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }

//     }

//     useEffect(() => {
//         if (doctors.length > 0) {
//             fetchDocInfo()
//         }
//     }, [doctors, docId])

//     useEffect(() => {
//         if (docInfo) {
//             getAvailableSolts()
//         }
//     }, [docInfo])

//     return docInfo ? (
//         <div>

//             {/* ---------- Doctor Details ----------- */}
//             <div className='flex flex-col sm:flex-row gap-4'>
//                 <div>
//                     <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
//                 </div>

//                 <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>

//                     {/* ----- Doc Info : name, degree, experience ----- */}

//                     <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
//                     <div className='flex items-center gap-2 mt-1 text-gray-600'>
//                         <p>{docInfo.degree} - {docInfo.speciality}</p>
//                         <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
//                     </div>

//                     {/* ----- Doc About ----- */}
//                     <div>
//                         <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>About <img className='w-3' src={assets.info_icon} alt="" /></p>
//                         <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
//                     </div>

//                     <p className='text-gray-600 font-medium mt-4'>Appointment fee: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span> </p>
//                 </div>
//             </div>

//             {/* Booking slots */}
//             <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
//                 <p >Booking slots</p>
//                 <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
//                     {docSlots.length && docSlots.map((item, index) => (
//                         <div onClick={() => setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-[#DDDDDD]'}`}>
//                             <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                             <p>{item[0] && item[0].datetime.getDate()}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
//                     {docSlots.length && docSlots[slotIndex].map((item, index) => (
//                         <p onClick={() => setSlotTime(item.time)} key={index} className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-[#949494] border border-[#B4B4B4]'}`}>{item.time.toLowerCase()}</p>
//                     ))}
//                 </div>

//                 <button onClick={bookAppointment} className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'>Book an appointment</button>
//             </div>

//             {/* Listing Releated Doctors */}
//             <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
//         </div>
//     ) : null
// }

// export default Appointment



import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedDoctors from '../components/RelatedDoctors'
import axios from 'axios'
import { toast } from 'react-toastify'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext)
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState('')
  const navigate = useNavigate()

  const fetchDocInfo = () => {
    const info = doctors.find((doc) => doc._id === docId)
    setDocInfo(info)
  }

  const getAvailableSlots = async () => {
    setDocSlots([])
    let today = new Date()

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10))
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
        currentDate.setHours(10, 0, 0, 0)
      }

      let timeSlots = []
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const slotDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`
        const available = !(docInfo.slots_booked[slotDate]?.includes(formattedTime))

        if (available) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime
          })
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      setDocSlots((prev) => [...prev, timeSlots])
    }
  }

  const bookAppointment = async () => {
    if (!token) {
      toast.warning('Login to book appointment')
      return navigate('/login')
    }

    const date = docSlots[slotIndex][0].datetime
    const slotDate = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`

    try {
      const { data } = await axios.post(`${backendUrl}/api/user/book-appointment`, {
        docId,
        slotDate,
        slotTime
      }, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        getDoctosData()
        navigate('/my-appointments')
      } else {
        toast.error(data.message)
      }

    } catch (err) {
      console.error(err)
      toast.error(err.message)
    }
  }

  useEffect(() => {
    if (doctors.length > 0) fetchDocInfo()
  }, [doctors, docId])

  useEffect(() => {
    if (docInfo) getAvailableSlots()
  }, [docInfo])

  return docInfo ? (
    <div className="px-4 md:px-10 py-6">
      {/* Doctor Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <img className="w-full md:max-w-[300px] rounded-xl shadow-md object-cover" src={docInfo.image} alt={docInfo.name} />

        <div className="flex-1 p-6 rounded-xl shadow-lg bg-white">
          <div className="text-3xl font-semibold bg-gradient-to-r from-gray-900 to-gray-100 bg-clip-text text-transparent flex items-center gap-2">
            {docInfo.name}
            <img src={assets.verified_icon} alt="verified" className="w-5 h-5" />
          </div>
          <div className="text-gray-600 mt-1 flex flex-wrap items-center gap-2">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">{docInfo.experience}</span>
          </div>

          <div className="mt-4">
            <p className="text-sm font-medium text-gray-700 flex items-center gap-1">
              About <img src={assets.info_icon} alt="info" className="w-3 h-3" />
            </p>
            <p className="text-gray-600 text-sm mt-1">{docInfo.about}</p>
          </div>

          <p className="mt-4 text-gray-700 font-medium">
            Appointment Fee: <span className="text-black">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">Booking Slots</h2>

        <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-thin">
          {docSlots.map((slots, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`text-center py-4 px-3 min-w-[64px] rounded-xl cursor-pointer transition-all duration-300 ${
                slotIndex === index ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              <p>{slots[0] && daysOfWeek[slots[0].datetime.getDay()]}</p>
              <p>{slots[0] && slots[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        <div className="flex overflow-x-auto gap-2 mt-5 pb-2 scrollbar-thin">
          {docSlots[slotIndex]?.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSlotTime(slot.time)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                slot.time === slotTime
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
            >
              {slot.time.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="mt-6">
          <button
            onClick={bookAppointment}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Related Doctors */}
      <div className="mt-16">
        <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
      </div>
    </div>
  ) : null
}

export default Appointment
