import React, { useState } from 'react';
function WeatherDisplay({ location, updateLocation }) {
    const [inputValue, setInputValue] = useState(location); 
    const handleInputChange = (e) => {
      setInputValue(e.target.value); 
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      updateLocation(inputValue); 
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter new location"
            />
          <button type="submit">Update Location</button>
        </form>
            <h2>Current Weather in {location}</h2>
            <p>Temparature: 20{'\u00b0'}C</p>
            
            <p>Condition: Sunny</p>
            
      </div>
    );
  }
function WeatherApp() {
  const [location, setLocation] = useState('New York'); 

  const updateLocation = (newLocation) => {
    setLocation(newLocation); 
  };

  return (
    <div>
      <h1>Weather Application</h1>
      <WeatherDisplay location={location} updateLocation={updateLocation} />
    </div>
  );
}

export default WeatherApp;
