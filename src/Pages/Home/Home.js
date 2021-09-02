import React from 'react';
import { NewHero, Corsets, Pad, Results } from '../../Components';
import { objOne, objTwo, padObj, resultsObj } from '../../Components/Data';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <NewHero />
      <Corsets {...objOne} />
      <Corsets {...objTwo} />
      {/* <Pad {...padObj} /> */}
      <Results {...resultsObj} />
    </div>
  );
}

export default Home;
