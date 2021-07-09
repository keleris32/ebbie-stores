import React from 'react';
import './PadApparel.css';

function PadApparel(props) {
  return (
    <div className="padApparel">
      <h1 className="padApparel__title">{props.title}</h1>
      <p className="padApparel__desc">{props.description}</p>
      <div className="padApparel__wrapper">
        <div className="padApparel__product">
          <img src={props.img} alt={props.alt} />
          <div className="padApparel__productDetails">
            <h3 className="product">{props.productDescription}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
        <div className="padApparel__product">
          <img src={props.img2} alt={props.alt} />
          <div className="padApparel__productDetails">
            <h3 className="product">{props.productDescription2}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PadApparel;
