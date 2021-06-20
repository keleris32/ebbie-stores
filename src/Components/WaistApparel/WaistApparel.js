import React from 'react';
import './WaistApparel.css';

const WaistApparel = (props) => {
  return (
    <div className="waistApparel">
      <h1 className="waistApparel__title">{props.title}</h1>
      <p className="waistApparel__desc">{props.description}</p>
      <div className="waistApparel__wrapper">
        <div className="waistApparel__product">
          <img src={props.img} alt={props.alt} />
          <div className="waistApparel__productDetails">
            <h3 className="product">{props.productDescription}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
        <div className="waistApparel__product">
          <img src={props.img2} alt={props.alt} />
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
