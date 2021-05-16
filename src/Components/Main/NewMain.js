import React from 'react';
import Results from '../Results/Results';
import Pad from '../Pad/Pad';
import Corsets from '../Corsets/Corsets';
import NewHero from '../Hero/NewHero';
import { objOne, objTwo, padObj, resultsObj } from '../Data';
import './NewMain.css';

const NewMain = () => {
  return (
    <div className="new-main">
      <NewHero />
      <Corsets {...objOne} />
      <Corsets {...objTwo} />
      <Pad {...padObj} />
      <Results {...resultsObj} />
    </div>
  );
};

export default NewMain;
