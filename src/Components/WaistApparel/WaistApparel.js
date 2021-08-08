import React from 'react';
import './WaistApparel.css';

import { waistApparelData } from '../ApparelData';
import WaistApparelCard from './WaistApparelCard';

const WaistApparel = (props) => {
  return (
    <div className="waistApparel">
      <h1 className="waistApparel__title">{props.title}</h1>
      <p className="waistApparel__desc">{props.description}</p>
      <div className="waistApparel__wrapper">
        {waistApparelData.map((item, index) => {
          return (
            <WaistApparelCard
              key={index}
              img={item.img}
              alt={item.alt}
              productDescription={item.productDescription}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WaistApparel;
