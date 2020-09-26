import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';

const App = () => {
  // state items:
  // current product id
  const [currId, setCurr] = useState(7);
  // realted product ids - array
  const [relatedIds, setRelated] = useState([]);

  // create function to get related ids
  const getRelated = () => {
    return axios.get(`http://52.26.193.201:3000/products/${currId}/related`)
      .then((res) => {
        setRelated(res.data);
      });
  };

  useEffect(() => {
    getRelated();
  }, []);

  return (
    <div>
      {relatedIds.map((id) =>
        <ProductCard id={id} key={id} />,
      )}
    </div>
  );
};

export default App;
