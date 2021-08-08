import React, { useState } from 'react';
import './TightsApparelCard.css';

function TightsApparelCard(props) {
  const [tightsHoverOne, setTightsHoverOne] = useState(false);

  const toggleTightsHover = () => setTightsHoverOne(!tightsHoverOne);

  return (
    <div>
      <div
        className={
          tightsHoverOne
            ? 'tightsApparel__product hovered__apparelProduct'
            : 'tightsApparel__product'
        }
        onMouseEnter={toggleTightsHover}
        onMouseLeave={toggleTightsHover}
      >
        <img
          src={props.img}
          alt={props.alt}
          className={tightsHoverOne ? 'hovered__img' : ''}
        />
        {tightsHoverOne && (
          <button className="tightsLink__btn">Go to Product</button>
        )}
        <div className="tightsApparel__productDetails">
          <h3 className="product">{props.productDescription}</h3>
          <p className="price">&#8358;{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default TightsApparelCard;
