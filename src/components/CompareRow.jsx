import React from 'react';
import { Check2 } from 'react-bootstrap-icons';

const CompareRow = (props) => {
  let curr = '';
  let comp = '';

  if (props.vals[0] !== 0) {
    if (props.vals[0] === 'null') {
      curr = <Check2 size={20} />;
    } else {
      curr = props.vals[0];
    }
  }

  if (props.vals[1] !== 0) {
    if (props.vals[1] === 'null') {
      comp = <Check2 size={20} />;
    } else {
      comp = props.vals[1];
    }
  }

  return (
    <div className="row ets-feat-row">
      <div className="col text-left">
        {curr}
      </div>
      <div className="col text-center ets-feat-bld">
        {props.char}
      </div>
      <div className="col text-right">
        {comp}
      </div>
    </div>
  );
};

export default CompareRow;
