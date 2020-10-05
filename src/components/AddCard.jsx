import React from 'react';
import { Plus } from 'react-bootstrap-icons';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';

const AddCard = (props) => {
  return (
    <div className="container" onClick={props.addOutfit}>
      <Card style={{ height: '370px', width: '230px' }}>
        <div className="col-sm d-flex align-items-center justify-content-center">
          <div className="row text-center">
            <span className="ets-plus">+</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AddCard;
