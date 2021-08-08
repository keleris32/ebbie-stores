import React, { useState } from 'react';
import './PadApparelCard.css';

function PadApparelCard(props) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <div>
      <div
        className={
          hover
            ? 'padApparel__product hovered__apparelProduct'
            : 'padApparel__product'
        }
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <img
          src={props.img}
          alt={props.alt}
          className={hover ? 'hovered__img' : ''}
        />
        {hover && <button className="link__btn">Go to Product</button>}
        <div className="padApparel__productDetails">
          <h3 className="product">{props.productDescription}</h3>
          <p className="price">&#8358; {props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default PadApparelCard;
