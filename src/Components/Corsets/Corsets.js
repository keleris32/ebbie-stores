import React from 'react';
import './Corsets.css';
import { AiOutlineRight } from 'react-icons/ai';

const Corsets = (props) => {
  const imgOneSwap = {
    backgroundColor: props.imgStart
      ? 'var(--imgOne-bg-color)'
      : 'var(--imgTwo-bg-color)',
    left: props.imgStart ? '0' : '4em',
  };

  const imgTwoSwap = {
    backgroundColor: props.imgStart
      ? 'var(--imgTwo-bg-color)'
      : 'var(--imgOne-bg-color)',
    left: props.imgStart ? '10em' : '13.75em',
  };

  return (
    <div className="corsets">
      <div
        className="corsets-wrapper"
        style={{ flexDirection: props.imgStart ? 'row' : 'row-reverse' }}
      >
        <div className="corsets-img-con">
          <div className="corsets-img-wrap">
            <div className="corsets-ellipse" />
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
            <button className="btn">
              EXPLORE
              <AiOutlineRight className="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Corsets;
