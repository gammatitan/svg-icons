import React from 'react';
import Icons from './assets/icons.svg';

const Icon = ({ name, color, size }) => {
  return (
    <svg fill={color} width={size} height={size}>
      <use href={`${Icons}#icon-${name}`} />
    </svg>
  );
};

export default Icon;
