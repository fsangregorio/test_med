import React, { useState } from 'react'
import HourDropdown from '../../AppointmentForm/DropdownMenu';
import { useNavigate } from "react-router-dom";

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    const alertSuccess = () => {
        alert(`Appointment Booked!`);
        navigate("/");
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber});
      setName('');
      setPhoneNumber('');
      setDate('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="date">Appointment Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => date(e.target.value)}
            
          />
        </div>
        <div>
      <h1>Select an Hour</h1>
      <HourDropdown />
    </div>
        <button onClick={alertSuccess} type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
