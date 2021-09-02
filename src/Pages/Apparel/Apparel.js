import React, { useContext } from 'react';
import { PadApparel, TightsApparel, WaistApparel } from '../../Components';
import {
  padApparelObj,
  tightsApparelObj,
  waistApparelObj,
} from '../../Components/ApparelData';
import {
  activeTightsTab,
  activeWaistTab,
  activePadTab,
} from '../../Context/action/apparelActions';
import { GlobalContext } from '../../Context/Provider';
import './Apparel.css';

function Apparel() {
  // apparel global state
  const {
    apparelDispatch,
    apparelState: { waistApparelTab, tightsApparelTab, padApparelTab },
  } = useContext(GlobalContext);

  const handleWaistApparel = () => {
    // dispatch the activeWaistTab action
    activeWaistTab()(apparelDispatch);
  };

  const handleTightsApparel = () => {
    // dispatch the activeTightsTab action
    activeTightsTab()(apparelDispatch);
  };

  const handlePadApparel = () => {
    // dispatch the activePadTab action
    activePadTab()(apparelDispatch);
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
                  waistApparelTab
                    ? 'apparel__type active__apparel'
                    : 'apparel__type'
                }
              >
                Waist Trainers
              </h4>
              <h4
                onClick={handleTightsApparel}
                className={
                  tightsApparelTab
                    ? 'apparel__type active__apparel'
                    : 'apparel__type'
                }
              >
                Butt Lifters
              </h4>
              <h4
                onClick={handlePadApparel}
                className={
                  padApparelTab
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
          {waistApparelTab && <WaistApparel {...waistApparelObj} />}
          {tightsApparelTab && <TightsApparel {...tightsApparelObj} />}
          {padApparelTab && <PadApparel {...padApparelObj} />}
        </div>
      </div>
    </div>
  );
}

export default Apparel;
