import React, { useState } from 'react';

const HourDropdown = () => {
  const hours = [];
  for (let i = 8; i <= 17; i++) {
    const hour = i > 12 ? i - 12 : i;
    const period = i >= 12 ? 'PM' : 'AM';
    hours.push(`${hour} ${period}`);
  }

  const [selectedHour, setSelectedHour] = useState(hours[0]);

  const handleChange = (event) => {
    setSelectedHour(event.target.value);
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