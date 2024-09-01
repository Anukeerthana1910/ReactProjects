import React, { useState } from 'react';

const GokuTransformation = () => {
  const [transformation, setTransformation] = useState('Kaioken');
  const toggleTransformation = () => {
    setTransformation(prevTransformation =>
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      <h1>Current Transformation: {transformation}</h1>
      <button onClick={toggleTransformation}>
        Switch Transformation
      </button>
    </div>
  );
};

export default GokuTransformation;
