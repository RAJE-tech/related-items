import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard.jsx';
import AddCard from './AddCard.jsx';

const ItemDisplay = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1205 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1205, min: 992 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 990, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={false}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >

        {props.ids.map((id) =>
          <ProductCard id={id} fav={props.fav} handleActionBtn={props.handleActionBtn} key={id} />,
        )}
      </Carousel>
    </div>
  );
};

export default ItemDisplay;
