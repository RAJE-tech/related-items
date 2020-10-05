import React, { useState, useEffect } from 'react';
import CompareRow from './CompareRow.jsx';

const CompareCard = (props) => {
  return (
    <div className="container ets-compare">
      <div>
        Comparing
      </div>
      <div className="ets-c-prodName row">
        <div className="ets-curr-n col-sm text-left">
          {props.currName}
        </div>
        <div className="ets-comp-n col-sm text-right">
          {props.compName}
        </div>
      </div>
      <div className="ets-features">
      {Object.keys(props.features).map((keyName, i) =>
        <CompareRow char={keyName} vals={props.features[keyName]} key={i} />,
      )}
      </div>
    </div>
  );
};

export default CompareCard;
