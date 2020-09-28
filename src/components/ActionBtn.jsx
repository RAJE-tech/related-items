import React from 'react';
import { Star, XCircle } from 'react-bootstrap-icons';

const ActionBtn = (props) => {
  let btn;

  if (props.fav) {
    btn = <XCircle size={20} />;
  } else {
    btn = <Star size={20} />;
  }

  return (
    <div>
      { btn }
    </div>
  );
};

export default ActionBtn;