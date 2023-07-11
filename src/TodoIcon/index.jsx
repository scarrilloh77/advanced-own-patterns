import React from 'react';
import { CheckLogo } from './CheckLogo';
import { DeleteLogo } from './DeleteLogo';
import './TodoIcon.css';

const iconTypes = {
  check: (color) => (
    <CheckLogo className="Icon-svg Icon-svg--check" fill={color} />
  ),
  delete: (color) => (
    <DeleteLogo className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

export const TodoIcon = ({ type, color = 'gray', onClick }) => {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
};
