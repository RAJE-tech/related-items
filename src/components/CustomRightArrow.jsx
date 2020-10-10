import React from 'react';
import 'react-multi-carousel/lib/styles.css';

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className="ets-custom-right" onClick={() => onClick()}>
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  );
};

export default CustomRightArrow;
