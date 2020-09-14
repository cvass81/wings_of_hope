import React from 'react';

const AnimatedCard = ({ animation, digit }) => (
  <div className={`flipCard ${animation}`}>
    <span>{digit}</span>
  </div>
);

export default AnimatedCard;
