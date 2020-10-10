import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomRightArrow from './CustomRightArrow.jsx';
import CustomLeftArrow from './CustomLeftArrow.jsx';
import ProductCard from './ProductCard.jsx';
import AddCard from './AddCard.jsx';

const OutfitDisplay = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1199, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 500 },
      items: 2,
    },
    mobile2: {
      breakpoint: { max: 499, min: 0 },
      items: 2,
    },
  };

  let addCard;
  if (props.add) {
    addCard = <AddCard addOutfit={props.addOutfit} />;
  }

  return (
    <div>
      <Carousel
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
        centerMode={false}
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        keyBoardControl={true}
        removeArrowOnDeviceType={["mobile2"]}
      >
        {addCard}
        {props.ids.map((id) =>
          <ProductCard id={id} fav={props.fav} handleActionBtn={props.handleActionBtn} key={id} />,
        )}
      </Carousel>
    </div>
  );
};

export default OutfitDisplay;
