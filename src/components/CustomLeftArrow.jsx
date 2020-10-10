import React from 'react';
import 'react-multi-carousel/lib/styles.css';

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className="ets-custom-left" onClick={() => onClick()}>
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </button>
  );
};

export default CustomLeftArrow;
