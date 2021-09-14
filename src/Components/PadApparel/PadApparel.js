import React, { useEffect, useState } from 'react';
import './PadApparel.css';
import { axiosInstance } from '../../Helpers/axiosInterceptor';
import Skeleton from 'react-loading-skeleton';

import { padsApparelData } from '../ApparelData';
import PadApparelCard from './PadApparelCard';

function PadApparel(props) {
  const [apparelData, setApparelData] = useState();
  const [imgLoaded, setImgLoaded] = useState(false);

  console.log('imgLoaded >>>', imgLoaded);

  const fetchPadApparelData = async () => {
    try {
      const request = await axiosInstance.get(
        `${process.env.REACT_APP_PAD_APPAREL_ROUTE}`
      );

      setApparelData(request.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPadApparelData();
  }, []);

  return (
    <div className="padApparel">
      <div style={{ display: imgLoaded ? 'block' : 'none' }}>
        <h1 className="padApparel__title">{props.title}</h1>
        <p className="padApparel__desc">{props.description}</p>
      </div>
      <div style={{ display: imgLoaded ? 'none' : 'block' }}>
        <h1 className="padApparel__title">
          <Skeleton />
        </h1>
        <p className="padApparel__desc">
          <Skeleton />
        </p>
      </div>

      <div className="padApparel__wrapper">
        {apparelData?.map((item) => {
          return (
            <PadApparelCard
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

export default PadApparel;
