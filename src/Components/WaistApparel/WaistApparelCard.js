import React, { useState } from 'react';
import './WaistApparelCard.css';
import Skeleton from 'react-loading-skeleton';

function WaistApparelCard(props) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => setHover(!hover);

  return (
    <>
      <div style={{ display: props.imgLoaded ? 'block' : 'none' }}>
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
            onLoad={() => props.setImgLoaded(true)}
          />
          {hover && <button className="waistLink__btn">Go to Product</button>}
          <div className="waistApparel__productDetails">
            <h3 className="product">{props.productDescription}</h3>
            <p className="price">&#8358;{props.price}</p>
          </div>
        </div>
      </div>

      {/* To display the skeleton UI */}
      <div style={{ display: props.imgLoaded ? 'none' : 'block' }}>
        <div
          className={
            hover
              ? 'waistApparel__product hovered__apparelProduct'
              : 'waistApparel__product'
          }
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <Skeleton count={3} />
        </div>
      </div>
    </>
  );
}

export default WaistApparelCard;
