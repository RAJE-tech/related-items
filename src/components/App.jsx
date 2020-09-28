import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import ItemDisplay from './ItemDisplay.jsx';

const App = () => {
  // current product id
  const [currId, setCurr] = useState(7);
  // realted product ids - array
  const [relatedIds, setRelated] = useState([]);
  // outfit ids
  const [outfitIds, setOutfit] = useState([]);

  // create function to get related ids
  const getRelated = () => {
    return axios.get(`http://52.26.193.201:3000/products/${currId}/related`)
      .then((res) => {
        setRelated(res.data);
      });
  };

  const handleActionBtn = (id, add) => {
    if (add) {
      // add id to outfit array
      setOutfit([...outfitIds, id]);
    } else {
      console.log('removing');
    }
  };

  useEffect(() => {
    getRelated();
  }, []);

  let outfits;
  if (outfitIds.length !== 0) {
    outfits = <ItemDisplay ids={outfitIds} />;
  } else {
    outfits = '';
  }
  return (
    <div>
      <div className="container">
        <h1>Related Products</h1>
        <ItemDisplay ids={relatedIds} handleActionBtn={handleActionBtn} />
      </div>
      <div className="container">
        <h1>Outfits</h1>
        {outfits}
      </div>
    </div>
  );
};

export default App;
