import React from 'react';
import './Hero.css';
import Typical from 'react-typical';
import { AiOutlineRight } from 'react-icons/ai';
import img from '../../Media/engin-akyurt-ehdI_89nzMo-unsplash_1-removebg-preview.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-nav">
        <h1>ebbie.</h1>
      </div>
      <div className="hero-wrapper">
        <div className="description-con">
          <div className="desc-wrapper">
            <p className="sub-title">New collection</p>
            <h1 className="title">
              Perfect{' '}
              <Typical
                loop={Infinity}
                wrapper="n"
                steps={['Waist!', 3500, 'Hips!', 3500, 'Legs!', 3500]}
              />
            </h1>
            <button className="btn">
              OPEN CATALOG
              <AiOutlineRight className="arrow" />
            </button>
          </div>
        </div>
        <div className="img-con">
          <div>
            <div className="ellipse"></div>
            <img
              src={img}
              alt="Model wearing a waist trainer"
              className="hero-img"
            />
            <div className="decor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
