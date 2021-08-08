import React from 'react';
import './TightsApparel.css';

import { tightsApparelData } from '../ApparelData';
import TightsApparelCard from './TightsApparelCard';

function TightsApparel(props) {
  return (
    <div className="tightsApparel">
      <h1 className="tightsApparel__title">{props.title}</h1>
      <p className="tightsApparel__desc">{props.description}</p>
      <div className="tightsApparel__wrapper">
        {tightsApparelData.map((item, index) => {
          return (
            <TightsApparelCard
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
}

export default TightsApparel;
