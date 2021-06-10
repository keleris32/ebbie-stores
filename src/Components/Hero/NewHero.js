import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import './NewHero.css';
import './HeroMediaQueries.css';
import img from '../../Media/ShapellxNeoSweatLatexThreeBeltwithHookWaistTrainer_10-removebg-preview.png';
import Typical from 'react-typical';

// _DSC2082-removebg-preview.png
// engin-akyurt-ehdI_89nzMo-unsplash_1-removebg-preview.png
// ShapellxNeoSweatLatexThreeBeltwithHookWaistTrainer_10-removebg-preview.png
// 2_34-removebg-preview.png

const NewHero = () => {
  return (
    <div className="new-hero">
      <div className="description-con">
        <div className="desc-wrapper">
          <p className="sub-title">New collection</p>
          <h1 className="title">
            Perfect Waist{' '}
            {/* <Typical
              loop={Infinity}
              wrapper="n"
              steps={['Waist!', 3500, 'Hips!', 3500, 'Legs!', 3500]}
            /> */}
          </h1>
          <button className="btn">
            OPEN CATALOG
            <AiOutlineRight className="arrow" />
          </button>
        </div>
      </div>
      <div className="img-con">
        <div>
          <div className="ellipse" />
          <img
            src={img}
            alt="Model wearing a waist trainer"
            className="hero-img"
          />
          <div className="decor" />
        </div>
      </div>
    </div>
  );
};

export default NewHero;
