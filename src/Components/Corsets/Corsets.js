import React from 'react';
import './Corsets.css';
import './CorsetsMediaQueries.css';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Corsets = (props) => {
  const imgOneSwap = {
    backgroundColor: props.imgStart
      ? 'var(--imgOne-bg-color)'
      : 'var(--imgTwo-bg-color)',
  };

  const imgTwoSwap = {
    backgroundColor: props.imgStart
      ? 'var(--imgTwo-bg-color)'
      : 'var(--imgOne-bg-color)',
  };

  return (
    <div className="corsets">
      <div
        className="corsets-wrapper"
        style={{ flexDirection: props.imgStart ? 'row' : 'row-reverse' }}
      >
        <div className="corsets-img-con">
          <div
            className={
              props.imgStart
                ? 'corsets-img-wrap corsets-imgWrap-truthy'
                : 'corsets-img-wrap corsets-imgWrap-falsey'
            }
          >
            <img
              src={props.imgOne}
              alt={props.altOne}
              className="corsets-img-one"
              style={imgOneSwap}
            />
            <img
              src={props.imgTwo}
              alt={props.altTwo}
              className="corsets-img-two"
              style={imgTwoSwap}
            />
          </div>
        </div>
        <div className="corsets-desc-con">
          <div className="corsets-desc-wrapper">
            <h1 className="desc-title">{props.title}</h1>
            <p className="desc-subtitle">{props.subtitle}</p>
            <Link to="apparel" style={{ textDecoration: 'none' }}>
              <button className="btn">
                EXPLORE
                <AiOutlineRight className="arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corsets;
