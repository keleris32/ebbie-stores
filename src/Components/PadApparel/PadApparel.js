import React, { useState } from 'react';
import './PadApparel.css';

function PadApparel(props) {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);

  const toggleHover = () => setHover(!hover);
  const toggleHover2 = () => setHover2(!hover2);
  return (
    <div className="padApparel">
      {/* <h1 className="padApparel__title">{props.title}</h1>
      <p className="padApparel__desc">{props.description}</p>
      <div className="padApparel__wrapper">
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
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
        <div
          className={
            hover2
              ? 'padApparel__product hovered__apparelProduct'
              : 'padApparel__product'
          }
          onMouseEnter={toggleHover2}
          onMouseLeave={toggleHover2}
        >
          <img
            src={props.img2}
            alt={props.alt}
            className={hover2 ? 'hovered__img' : ''}
          />
          {hover2 && <button className="link__btn">Go to Product</button>}
          <div className="padApparel__productDetails">
            <h3 className="product">{props.productDescription2}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PadApparel;
