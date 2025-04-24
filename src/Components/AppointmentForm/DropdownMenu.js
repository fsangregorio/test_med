import React, { useState } from 'react';

const HourDropdown = () => {
  const hours = [];
  for (let i = 8; i <= 17; i++) {
    const hour = i > 12 ? i - 12 : i;
    const period = i >= 12 ? 'PM' : 'AM';
    hours.push(`${hour} ${period}`);
  }

  const [selectedHour, setSelectedHour] = useState(() => {
    const saved = localStorage.getItem('appointment');
    return saved ? JSON.parse(saved).time : hours[0];
  });

  const handleChange = (event) => {
    const newHour = event.target.value;
    setSelectedHour(newHour);
    localStorage.setItem('appointment', JSON.stringify({ time: newHour }));
  };

  return (
    <div>
      <label htmlFor="hour-dropdown">Select an hour:</label>
      <select id="hour-dropdown" value={selectedHour} onChange={handleChange}>
        {hours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <p>Selected Hour: {selectedHour}</p>
    </div>
  );
};

export default HourDropdown;
