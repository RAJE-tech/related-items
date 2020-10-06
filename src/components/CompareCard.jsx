import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import CompareRow from './CompareRow.jsx';

const CompareCard = (props) => {
  return (
    <Modal
      {...props}
      size = "md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <span className="ets-compare">Comparing</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ets-c-prodName row">
          <div className="ets-curr-n col text-left">
            {props.currName}
          </div>
          <div className="ets-comp-n col text-right">
            {props.compName}
          </div>
        </div>
        <div className="ets-features">
          {Object.keys(props.features).map((keyName, i) =>
            <CompareRow char={keyName} vals={props.features[keyName]} key={i} />,
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CompareCard;
