import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard.jsx';
import AddCard from './AddCard.jsx';

const OutfitDisplay = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1205 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1205, min: 992 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 990, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  let addCard;
  if (props.add) {
    addCard = <AddCard addOutfit={props.addOutfit} />;
  }

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
        {addCard}
        {props.ids.map((id) =>
          <ProductCard id={id} fav={props.fav} handleActionBtn={props.handleActionBtn} key={id} />,
        )}
      </Carousel>
    </div>
  );
};

export default OutfitDisplay;
