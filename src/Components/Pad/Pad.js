import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import './Pad.css';

const Pad = (props) => {
  return (
    <div className="pad">
      <div className="pad-wrapper">
        <img src={props.imgOne} alt={props.altOne} className="pad-imgOne" />
        <div className="pad-desc-con">
          <h1 className="desc-title">{props.title}</h1>
          <p className="desc-subtitle">{props.subtitle}</p>
          <button className="btn">
            EXPLORE
            <AiOutlineRight className="arrow" />
          </button>
        </div>
        <img src={props.imgTwo} alt={props.altTwo} className="pad-imgTwo" />
      </div>
      <div className="pattern"></div>
    </div>
  );
};

export default Pad;
