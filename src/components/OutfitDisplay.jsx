import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard.jsx';
import AddCard from './AddCard.jsx';

const CustomRightArrow = ({ onClick }) => {
  // onMove means if dragging or swiping in progress.
  return (
    <button className="ets-custom-right" onClick={() => onClick()}>
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </button>
  );
};
const CustomLeftArrow = ({ onClick }) => {
  // onMove means if dragging or swiping in progress.
  return (
    <button className="ets-custom-left" onClick={() => onClick()}>
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
      </svg>
    </button>
  );
};

const OutfitDisplay = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1199, min: 773 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 772, min: 0 },
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
