import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard.jsx';
import AddCard from './AddCard.jsx';

const ItemDisplay = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1050 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1050, min: 800 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
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
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
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
