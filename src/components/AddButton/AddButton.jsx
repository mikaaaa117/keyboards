import * as React from 'react';
import './AddButton.scss';

const AddButton = ({ active, onclick }) => {
  return (
    <div
      onClick={() => onclick()}
      className={`add-button ${
        active ? 'bg-red-500 active' : 'bg-green-500'
      } w-8 h-8 rounded-md flex
    justify-center relative items-center transition-all hover:scale-110
    hover:cursor-pointer shadow-sm`}
    />
  );
};

export default AddButton;
