import React, { useEffect, useState } from 'react';
import './TightsApparel.css';
import { axiosInstance } from '../../Helpers/axiosInterceptor';
import Skeleton from 'react-loading-skeleton';

import { tightsApparelData } from '../ApparelData';
import TightsApparelCard from './TightsApparelCard';

function TightsApparel(props) {
  const [apparelData, setApparelData] = useState();
  const [imgLoaded, setImgLoaded] = useState(false);

  const fetchTightsApparelData = async () => {
    try {
      const request = await axiosInstance.get(
        `${process.env.REACT_APP_TIGHTS_APPAREL_ROUTE}`
      );

      setApparelData(request.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTightsApparelData();
  }, []);

  return (
    <div className="tightsApparel">
      <div style={{ display: imgLoaded ? 'block' : 'none' }}>
        <h1 className="tightsApparel__title">{props.title}</h1>
        <p className="tightsApparel__desc">{props.description}</p>
      </div>
      <div style={{ display: imgLoaded ? 'none' : 'block' }}>
        <h1 className="tightsApparel__title">
          <Skeleton />
        </h1>
        <p className="tightsApparel__desc">
          <Skeleton />
        </p>
      </div>

      <div className="tightsApparel__wrapper">
        {apparelData?.map((item) => {
          return (
            <TightsApparelCard
              key={item._id}
              imgLoaded={imgLoaded}
              setImgLoaded={setImgLoaded}
              img={item.img}
              alt={item.alt}
              productDescription={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TightsApparel;
