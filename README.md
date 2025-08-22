🏥 HealthMate – Healthcare Appointment Management System

📌 Overview

HealthMate is a full-stack web application designed to streamline healthcare appointment management for patients, doctors, and administrators. It enables patients to book appointments online, doctors to manage schedules, and admins to oversee the entire healthcare workflow efficiently.
Built with the MERN stack (MongoDB, Express.js, React, Node.js), HealthMate ensures a smooth, scalable, and user-friendly experience.

🚀 Features

👨‍⚕️ For Patients
Register/Login securely
Book, reschedule, or cancel appointments
View appointment history & medical records

🩺 For Doctors
Manage patient appointments
View daily/weekly schedules
Access patient history before consultation
Update consultation notes

👨‍💻 For Admin
Manage doctors, patients, and appointments
Assign specializations to doctors
View analytics and reports


🛠️ Tech Stack
Frontend: React, Vite, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)

Other Tools:
JWT Authentication
REST APIs
MongoDB Atlas (Cloud DB)


⚙️ Installation & Setup

🔹 Prerequisites
Node.js & npm installed
MongoDB (local or MongoDB Atlas)

🔹 Backend Setup
cd HealthMate/backend
npm install
npm start

Configure .env file with:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

🔹 Frontend Setup
cd HealthMate/frontend
npm install
npm run dev
Runs on: http://localhost:5173

📖 Usage
Start the backend server (npm start)
Run the frontend (npm run dev)
Register as a patient or login as a doctor/admin
Book and manage appointments seamlessly

📈 Future Enhancements
Payment gateway integration (Stripe/PayPal)
Video consultation support
AI-based doctor recommendation system
Mobile app version (React Native)

