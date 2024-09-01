import React, { useState } from 'react';

const ToggleMessage = () => {
  const [showComponent, setShowComponent] = useState(false);
  const toggleComponent = () => {
    setShowComponent(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleComponent}>
        {showComponent ? 'Hide Component' : 'Show Component'}
      </button>
      {showComponent && <p>Hi! How Are You!!!</p>}
    </div>
  );
};

export default ToggleMessage;

