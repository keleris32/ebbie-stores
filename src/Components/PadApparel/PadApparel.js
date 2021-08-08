import React from 'react';
import './PadApparel.css';

import { padsApparelData } from '../ApparelData';
import PadApparelCard from './PadApparelCard';

function PadApparel(props) {
  return (
    <div className="padApparel">
      <h1 className="padApparel__title">{props.title}</h1>
      <p className="padApparel__desc">{props.description}</p>
      <div className="padApparel__wrapper">
        {padsApparelData.map((item, index) => {
          return (
            <PadApparelCard
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

export default PadApparel;
