import React, { useState } from 'react';
import './TightsApparel.css';

function TightsApparel(props) {
  const [tightsHoverOne, setTightsHoverOne] = useState(false);
  const [tightsHoverTwo, setTightsHoverTwo] = useState(false);

  const toggleTightsHover = () => setTightsHoverOne(!tightsHoverOne);
  const toggleTightsHover3 = () => setTightsHoverTwo(!tightsHoverTwo);
  return (
    <div className="tightsApparel">
      <h1 className="tightsApparel__title">{props.title}</h1>
      <p className="tightsApparel__desc">{props.description}</p>
      <div className="tightsApparel__wrapper">
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
          {/* {tightsHoverOne && (
            <button className="tightsLink__btn">Go to Product</button>
          )} */}
          <div className="tightsApparel__productDetails">
            <h3 className="product">{props.productDescription}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
        <div
          className={
            tightsHoverTwo
              ? 'tightsApparel__product hovered__apparelProduct'
              : 'tightsApparel__product'
          }
          onMouseEnter={toggleTightsHover3}
          onMouseLeave={toggleTightsHover3}
        >
          <img
            src={props.img2}
            alt={props.alt}
            className={tightsHoverTwo ? 'hovered__img' : ''}
          />
          {/* {tightsHoverTwo && (
            <button className="link__btn">Go to Product</button>
          )} */}
          <div className="tightsApparel__productDetails">
            <h3 className="product">{props.productDescription2}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TightsApparel;
