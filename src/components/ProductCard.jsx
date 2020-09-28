import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';
import ActionBtn from './ActionBtn.jsx';

const ProductCard = (props) => {
  // state vars
  // images
  const [photos, setPhotos] = useState([{ thumbnail_url: '' }]);
  // category
  const [category, setCat] = useState('');
  // title
  const [title, setTitle] = useState('');
  // style
  const [style, setStyle] = useState('');
  // Price
  const [price, setPrice] = useState('');
  // Rating

  const getItemInfo = () => {
    axios.get(`http://52.26.193.201:3000/products/${props.id}`)
      .then((res) => {
        setCat(res.data.category);
        setTitle(res.data.name);
        setPrice(res.data.default_price);
      });
  };

  const getStyleInfo = () => {
    axios.get(`http://52.26.193.201:3000/products/${props.id}/styles`)
      .then((res) => {
        setPhotos(res.data.results[0].photos);
        setStyle(res.data.results[0].name);
      });
  };

  useEffect(() => {
    getItemInfo();
    getStyleInfo();
  }, []);

  // if no imgage is found for a product
  if (photos[0].thumbnail_url === null) {
    photos[0].thumbnail_url = 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png';
  }

  return (
    <div className="container">
      <Card style={{ height: '400px', width: '250px' }}>
        <div>
          <div className="click-icon" onClick={() => {
            if (props.fav === true) {
              props.handleActionBtn(props.id, false);
            } else {
              props.handleActionBtn(props.id, true);
            }
          }}>
            <ActionBtn fav={props.fav} />
          </div>
          <CardImg variant="top" src={photos[0].thumbnail_url} />
        </div>
        <div>
          <CardBody className="card-b">
            <CardText className="text-pc">
              {category}
            </CardText>
            <CardText className="text-pc title-pc">
              {title + ' ' + style}
            </CardText>
            <CardText className="text-pc">
              {`$${price}`}
            </CardText>
            <CardText className="text-pc stars-pc">
              <Rating name="size-small" defaultValue={3} readOnly={true} size="small" />
            </CardText>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
