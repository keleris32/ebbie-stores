import React from 'react';
import WaistApparel from '../../Components/WaistApparel/WaistApparel';
import { waistApparel } from '../../Components/ApparelData';
import './Apparel.css';

function Apparel() {
  return (
    <div className="apparel">
      <div className="apparel__wrapper">
        <div className="apparel__categories">
          <div className="apparel__categoriesWrap">
            <h2 className="apparel__header">Categories</h2>
            <div className="apparel_typeWrap">
              <h4 className="apparel__type active__apparel">Waist Trainers</h4>
              <h4 className="apparel__type">Gym Tights</h4>
              <h4 className="apparel__type">Arm Pads</h4>
            </div>
          </div>
        </div>
        <div className="apparel__displayCon">
          <WaistApparel {...waistApparel} />
        </div>
      </div>
    </div>
  );
}

export default Apparel;
