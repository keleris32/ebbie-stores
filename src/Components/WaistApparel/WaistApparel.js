import React, { useEffect, useState } from 'react';
import './WaistApparel.css';
import { axiosInstance } from '../../Helpers/axiosInterceptor';
import Skeleton from 'react-loading-skeleton';

import { waistApparelData } from '../ApparelData';
import WaistApparelCard from './WaistApparelCard';

const WaistApparel = (props) => {
  const [apparelData, setApparelData] = useState();
  const [imgLoaded, setImgLoaded] = useState(false);

  const fetchWaistApparelData = async () => {
    try {
      const request = await axiosInstance.get(
        `${process.env.REACT_APP_WAIST_APPAREL_ROUTE}`
      );

      setApparelData(request.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWaistApparelData();
  }, []);

  return (
    // <>
    //   {loading ? (
    //     <div className="waistApparel">
    //       <h1 className="waistApparel__title">
    //         <Skeleton />
    //       </h1>
    //       <p className="waistApparel__desc">
    //         <Skeleton />
    //       </p>
    //       <div className="waistApparel__wrapper">
    //         {console.log(apparelData)}
    //         <Skeleton count={3} />
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="waistApparel">
    //       <h1 className="waistApparel__title">{props.title}</h1>
    //       <p className="waistApparel__desc">{props.description}</p>
    //       <div className="waistApparel__wrapper">
    //         {apparelData?.map((item) => {
    //           console.log('mapped', item);
    //           return (
    //             <WaistApparelCard
    //               key={item._id}
    //               setImgLoaded={setImgLoaded}
    //               img={item.img}
    //               alt={item.alt}
    //               productDescription={item.description}
    //               price={item.price}
    //             />
    //           );
    //         })}
    //       </div>
    //     </div>
    //   )}
    // </>
    <div className="waistApparel">
      <div style={{ display: imgLoaded ? 'block' : 'none' }}>
        <h1 className="waistApparel__title">{props.title}</h1>
        <p className="waistApparel__desc">{props.description}</p>
      </div>
      <div style={{ display: imgLoaded ? 'none' : 'block' }}>
        <h1 className="waistApparel__title">
          <Skeleton />
        </h1>
        <p className="waistApparel__desc">
          <Skeleton />
        </p>
      </div>

      <div className="waistApparel__wrapper">
        {apparelData?.map((item) => {
          return (
            <WaistApparelCard
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
};

export default WaistApparel;
