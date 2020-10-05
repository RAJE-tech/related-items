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
    <div onClick={props.addOutfit}>
      <Card style={{ height: '370px', width: '230px' }}>
          <div className="col-sm d-flex align-items-center justify-content-center">
            <div className="row text-center plus-div">
              <span className="ets-plus">+</span>
            </div>
            <div className="row text-center ets-ato-div">
              <span className="ets-ato">Add to Outfit</span>
            </div>
          </div>
      </Card>
    </div>
  );
};

export default AddCard;
