import React, { useEffect, useState } from 'react';

const SubscribeAnimation = ({ text }) => {
  const [rotationDegrees, setRotationDegrees] = useState([]);

  useEffect(() => {
    setRotationDegrees(Array.from({ length: text.length }, (_, i) => 11 * i));
  }, [text]);

  return (
    <div id="text" className="subscribe-animation">
      {rotationDegrees.map((rotation, index) => (
        <span
          key={index}
          style={{
            transform: `rotate(${rotation}deg)`,
            backgroundColor: 'white',
            color: 'red',
            borderRadius: '100%',
          }}
        >
          {text[index]}
        </span>
      ))}
    </div>
  );
};

export default SubscribeAnimation;