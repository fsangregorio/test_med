import React, { useState } from 'react';
import './AppointmentForm.css';
import HourDropdown from './DropdownMenu.js';
import { useNavigate } from "react-router-dom";

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    const [time, setTime] = useState('');

    const alertSuccess = () => {
        alert(`Appointment Booked!`);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      // Save doctor info to localStorage
      const doctorData = {
        name: doctorName,
        speciality: doctorSpeciality
      };
      const appointment = {
        date: date,
        time: time,
      }
      localStorage.setItem('doctorData', JSON.stringify(doctorData));
      localStorage.setItem('appointment', JSON.stringify(appointment));

      // Call the parent onSubmit (if needed for other logic)
      onSubmit({ name, phoneNumber, date, time });

      // Reset form fields
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
            onChange={(e) => setDate(e.target.value)}
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

export default AppointmentForm;
