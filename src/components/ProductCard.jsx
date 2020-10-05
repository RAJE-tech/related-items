import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';
import ImageCarousel from './ImageCarousel.jsx';
import ActionBtn from './ActionBtn.jsx';
import Review from './Review.jsx';

const ProductCard = (props) => {
  const [photos, setPhotos] = useState([{ thumbnail_url: '' }]);
  const [category, setCat] = useState('');
  const [title, setTitle] = useState('');
  const [style, setStyle] = useState(''); // style name
  const [ogPrice, setPrice] = useState('');
  const [salesPrice, setSalesPrice] = useState('');
  const [ratings, setRating] = useState([]);

  const getItemInfo = () => {
    axios.get(`http://52.26.193.201:3000/products/${props.id}`)
      .then((res) => {
        setCat(res.data.category);
        setTitle(res.data.name);
      });
  };

  const getStyleInfo = () => {
    axios.get(`http://52.26.193.201:3000/products/${props.id}/styles`)
      .then((res) => {
        setPhotos(res.data.results[0].photos);
        setStyle(res.data.results[0].name);
        setPrice(res.data.results[0].original_price);
        setSalesPrice(res.data.results[0].sale_price);
      });
  };

  const getRatings = () => {
    axios.get(`http://52.26.193.201:3000/reviews/${props.id}/list`)
      .then((res) => {
        console.log('Product ID: ', props.id);
        let total = 0; // sum of reviews
        let num = 0; // number of reviews
        const results = res.data.results;

        if (results.length === 0) {
          setRating([...ratings, 0]);
        } else {
          let data = [];
          results.forEach((obj) => {
            data.push(obj.rating);
          });
          setRating([...ratings, ...data]);
        }
      });
  };

  useEffect(() => {
    getItemInfo();
    getStyleInfo();
    getRatings();
  }, []);


  photos.forEach((photo) => {
    if (photo.thumbnail_url === null) {
      photo.thumbnail_url = 'https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png';
    }
  });

  let photoImgs;
  if (photos.length === 1) {
    photoImgs = <CardImg variant="top" src={photos[0].thumbnail_url} />;
  } else {
    photoImgs = <ImageCarousel photos={photos} />;
  }

  let price;
  if (salesPrice === '0') {
    price = <div>
              {`$${ogPrice}`}
            </div>
  } else {
    price = <div>
              <div>
               <span className="ets-strike"> {`$${ogPrice}`} </span> <span className="ets-discount"> {`$${salesPrice}`} </span>
              </div>
            </div>
  }

  return (
    <div className="container">
      <Card style={{ height: '370px', width: '230px' }}>
        {photoImgs}
        <div>
          <div onClick={() => {
            if (props.fav === true) {
              props.handleActionBtn(props.id, false);
            } else {
              props.handleActionBtn(props.id, true);
            }
          }}>
            <ActionBtn fav={props.fav} />
          </div>
        </div>
        <div>
          <CardBody className="ets-card-b">
            <CardText className="ets-text-pc">
              {category}
            </CardText>
            <CardText className="ets-text-pc ets-title-pc">
              {title + ' ' + style}
            </CardText>
            <CardText className="ets-text-pc">
              {price}
            </CardText>
            <Review ratings={ratings} className="ets-text-pc ets-stars-pc" />
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
