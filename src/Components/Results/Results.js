import React from 'react';
import './Results.css';

const Results = (props) => {
  return (
    <div className="results">
      <h1 className="results-title">{props.title}</h1>
      <div className="results-wrapper">
        <div className="results-img-con">
          <img src={props.imgOne} alt={props.altOne} className="results-img" />
          <p className="results-img-desc">{props.descOne}</p>
        </div>
        <div className="results-img-con">
          <img src={props.imgTwo} alt={props.altTwo} className="results-img" />
          <p className="results-img-desc">{props.descTwo}</p>
        </div>
        <div className="results-img-con">
          <img
            src={props.imgThree}
            alt={props.altThree}
            className="results-img"
          />
          <p className="results-img-desc">{props.descThree}</p>
        </div>
        <div className="results-img-con">
          <img
            src={props.imgFour}
            alt={props.altFour}
            className="results-img"
          />
          <p className="results-img-desc">{props.descFour}</p>
        </div>
      </div>
    </div>
  );
};

export default Results;
