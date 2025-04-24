// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation.js';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import FindDoctorSearchIC from './Components/InstantConsultation/FindDoctorSearchIC/FindDoctorSearchIC.js';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm.js';
import AppointmentFormIC from './Components/InstantConsultation/AppointmentFormIC/AppointmentFormIC';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import DoctorCardIC from './Components/InstantConsultation/DoctorCardIC/DoctorCardIC';
import Notification from './Components/Notification/Notification.js';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          <Notification>

          {/* Set up the Routes for different pages */}
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Sign_Up" element={<Sign_Up/>}/>            
            <Route path="/InstantConsultation" element={<InstantConsultation />} />

            <Route path="/FindDoctorSearch" element={<FindDoctorSearch/>}/>
            <Route path="/FindDoctorSearchIC" element={<FindDoctorSearchIC />} /> 
            <Route path="/AppointmentFormIC" element={<AppointmentFormIC />} /> 
            <Route path="/search/doctors" element={<BookingConsultation/>}/>
            <Route path="/AppointmentForm" element={<AppointmentForm/>}/>
            <Route path="/DoctorCardIC" element={<DoctorCardIC />} /> 
            <Route path="/DoctorCard" element={<DoctorCard />} /> 
            <Route path="</Notification>" element={<Notification/>}/>




            {/* Define individual Route components for different pages */}
          </Routes>
          </Notification>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;