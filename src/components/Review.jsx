import React from 'react';
import Rating from '@material-ui/lab/Rating';

const Review = ({ ratings }) => {
  let total = 0;
  let num = 0;

  ratings.forEach((rate) => {
    total += rate;
    num += 1;
  });

  const avg = total / num;

  return (
    <div>
      <Rating
        name="simple-controlled"
        value={avg}
        precision={0.25}
        size="small"
        readOnly
      />
    </div>
  );
};

export default Review;
