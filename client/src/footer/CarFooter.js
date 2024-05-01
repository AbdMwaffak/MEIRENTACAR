import React from 'react';
import Brands from '../extensions/Brands';
import './carFooter.css';

const CarFooter = () => {
  return (
    <div className='footer'>
      <div className='adminName'>
        {/* <div className='admin1'>
                    <div className='admin1Imge'>

                        <img src={admin1} className="admin1Im" alt="admin" />
                    </div>
                    <a className="link1" href="https://Nabil.52@gmail.com" target="_blank">Nabil.52@gmail.com</a>

                </div> */}
        {/* ......... */}
        {/* <div className='admin2'>
                    <div className='admin2Imge'>
                        <img src={admin2} className="admin2Im" alt="admin" />
                    </div>
                    <a className="link2" href="https://7amoudy.94@gmail.com" target="_blank">7amoudy.94@gmail.com</a>
                </div> */}
      </div>
      <div className='brandslogo'>
        {Brands?.map((brand, index) => (
          //} >

          <i className={`car-default car-${brand} `} key={index}></i>
        ))}
      </div>
    </div>
  );
};

export default CarFooter;
