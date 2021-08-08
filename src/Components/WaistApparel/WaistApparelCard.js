import React, { useState } from 'react';
import './WaistApparelCard.css';

function WaistApparelCard(props) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div>
      <div
        className={
          hover
            ? 'waistApparel__product hovered__apparelProduct'
            : 'waistApparel__product'
        }
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <img
          src={props.img}
          alt={props.alt}
          className={hover ? 'hovered__img' : ''}
        />
        {hover && <button className="waistLink__btn">Go to Product</button>}
        <div className="waistApparel__productDetails">
          <h3 className="product">{props.productDescription}</h3>
          <p className="price">&#8358;{props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default WaistApparelCard;
