import React, { useState } from 'react';
import './WaistApparel.css';

const WaistApparel = (props) => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const toggleHover = () => setHover(!hover);
  const toggleHover2 = () => setHover2(!hover2);

  return (
    <div className="waistApparel">
      <h1 className="waistApparel__title">{props.title}</h1>
      <p className="waistApparel__desc">{props.description}</p>
      <div className="waistApparel__wrapper">
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
        <div
          className={
            hover2
              ? 'waistApparel__product hovered__apparelProduct'
              : 'waistApparel__product'
          }
          onMouseEnter={toggleHover2}
          onMouseLeave={toggleHover2}
        >
          <img
            src={props.img2}
            alt={props.alt}
            className={hover2 ? 'hovered__img' : ''}
          />
          {hover2 && <button className="waistLink__btn">Go to Product</button>}
          <div className="waistApparel__productDetails">
            <h3 className="product">{props.productDescription2}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaistApparel;
