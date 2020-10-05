import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard.jsx';
import ItemDisplay from './ItemDisplay.jsx';
import OutfitDisplay from './OutfitDisplay.jsx';
import CompareCard from './CompareCard.jsx';

const App = () => {
  const [currId, setCurr] = useState(7);
  const [currName, setName] = useState('');
  const [compName, setCompName] = useState('');
  const [features, setFeat] = useState({});
  const [relatedIds, setRelated] = useState([]);
  const [outfitIds, setOutfit] = useState([]);
  const [compare, setComp] = useState(false);

  // reusable for both current product id and selected product id
  const getFeats = (id, curr) => {
    return axios.get(`http://52.26.193.201:3000/products/${id}`)
      .then((res) => {
        // update the name of current product
        if (curr) {
          setName(res.data.name);
        } else {
          setCompName(res.data.name);
        }

        const featData = res.data.features;
        const newFeats = {};

        featData.forEach((obj) => {
          let key = obj.feature;
          const val = obj.value;

          if (curr) {
            newFeats[key] = [val, 0];
          } else if (key in features) {
            features[key].splice(1, 1, val);
          } else {
            newFeats[key] = [0, val];
          }
        });

        setFeat({
          ...features,
          ...newFeats,
        });
      });
  };

  // request related item ids from api
  const getRelated = () => {
    return axios.get(`http://52.26.193.201:3000/products/${currId}/related`)
      .then((res) => {
        setRelated(res.data);
      });
  };

  // add the current product to the outfit
  const addOutfit = () => {
    // disable this button if compare div is open
    if (!compare) {
      const idx = outfitIds.indexOf(currId);
      if (idx === -1) {
        setOutfit([...outfitIds, currId]);
      }
    }
  };

  const handleActionBtn = (id, comp) => {
    if (comp) {
      // clicking star - compare curr product to clicked product
      if (!compare) {
        getFeats(id, false);
        setComp(!compare);
      }
    } else {
      // clicking x - remove from outfit carousel
      const idx = outfitIds.indexOf(id);
      outfitIds.splice(idx, 1);
      setOutfit([...outfitIds]);
    }
  };

  const removeCompare = () => {
    // toggle compare card off
    setComp(!compare);

    // remove compared product features from features variable
    const keys = Object.keys(features);
    for (let i = 0; i < keys.length; i++) {
      if (features[keys[i]][0] === 0) {
        delete features[keys[i]];
      } else if (features[keys[i]][1] !== 0) {
        features[keys[i]][1] = 0;
      }
    }

    setFeat({ ...features });
  };

  useEffect(() => {
    getRelated();
    getFeats(currId, true);
  }, []);

  let comparison;
  if (compare) {
    comparison = <div className="item">
                   <CompareCard features={features} currName={currName} compName={compName}/>
                 </div>
  }

  return (
    <div className="container" onClick={() => {
      if (compare) {
        removeCompare();
      }
    }}>
      {comparison}
      <div className="item">
        <h1 className="ets-title">Related Products</h1>
        <ItemDisplay ids={relatedIds} fav={false} handleActionBtn={handleActionBtn} />
      </div>
      <div className="item">
        <h1 className="ets-title">Outfits</h1>
        <OutfitDisplay ids={outfitIds} fav={true} add={true} addOutfit={addOutfit} handleActionBtn={handleActionBtn} />
      </div>
    </div>
  );
};

export default App;
