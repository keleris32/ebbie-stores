import React, { useState } from 'react';
import { PadApparel, TightsApparel, WaistApparel } from '../../Components';
import {
  padApparelObj,
  tightsApparelObj,
  waistApparelObj,
} from '../../Components/ApparelData';
import './Apparel.css';

function Apparel() {
  const [activeTab, setActiveTab] = useState({
    waistApparelTab: true,
    tightsApparelTab: false,
    padApparelTab: false,
  });
  // const [isWaistApparel, setIsWaistApparel] = useState(true);
  // const [isTightsApparel, setIsTightsApparel] = useState(false);
  // const [isPadApparel, setIsPadApparel] = useState(false);

  const handleWaistApparel = () => {
    setActiveTab({
      waistApparelTab: true,
      tightsApparelTab: false,
      padApparelTab: false,
    });
  };

  const handleTightsApparel = () => {
    setActiveTab({
      waistApparelTab: false,
      tightsApparelTab: true,
      padApparelTab: false,
    });
  };

  const handlePadApparel = () => {
    setActiveTab({
      waistApparelTab: false,
      tightsApparelTab: false,
      padApparelTab: true,
    });
  };

  return (
    <div className="apparel">
      <div className="apparel__wrapper">
        <div className="apparel__categories">
          <div className="apparel__categoriesWrap">
            <h2 className="apparel__header">Categories</h2>
            <div className="apparel_typeWrap">
              <h4
                onClick={handleWaistApparel}
                className={
                  activeTab.waistApparelTab === true
                    ? 'apparel__type active__apparel'
                    : 'apparel__type'
                }
              >
                Waist Trainers
              </h4>
              <h4
                onClick={handleTightsApparel}
                className={
                  activeTab.tightsApparelTab === true
                    ? 'apparel__type active__apparel'
                    : 'apparel__type'
                }
              >
                Butt Lifters
              </h4>
              <h4
                onClick={handlePadApparel}
                className={
                  activeTab.padApparelTab === true
                    ? 'apparel__type active__apparel'
                    : 'apparel__type'
                }
              >
                Arm Shapers
              </h4>
            </div>
          </div>
        </div>
        <div className="apparel__displayCon">
          {activeTab.waistApparelTab === true && (
            <WaistApparel {...waistApparelObj} />
          )}
          {activeTab.tightsApparelTab === true && (
            <TightsApparel {...tightsApparelObj} />
          )}
          {activeTab.padApparelTab === true && (
            <PadApparel {...padApparelObj} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Apparel;
