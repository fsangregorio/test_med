// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import FindDoctorSearchIC from './Components/InstantConsultation/FindDoctorSearchIC/FindDoctorSearchIC.js';
import AppointmentForm from './Components/AppointmentForm/AppointmentForm';
import AppointmentFormIC from './Components/InstantConsultation/AppointmentFormIC/AppointmentFormIC';
import DoctorCard from './Components/DoctorCard/DoctorCard';
import DoctorCardIC from './Components/InstantConsultation/DoctorCardIC/DoctorCardIC';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}
          <Routes>
          <Route path="/" element={<Landing_Page/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<Sign_Up/>}/>
            <Route path="/Search/Doctors" element={<FindDoctorSearch/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/FindDoctorSearchIC" element={<FindDoctorSearchIC />} /> 
            <Route path="/AppointmentFormIC" element={<AppointmentFormIC />} /> 
            <Route path="/AppointmentForm" element={<AppointmentForm />} /> 
            <Route path="/DoctorCardIC" element={<DoctorCardIC />} /> 
            <Route path="/DoctorCard" element={<DoctorCard />} /> 




            {/* Define individual Route components for different pages */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;