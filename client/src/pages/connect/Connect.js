import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../footer/CarFooter';
import admin1 from '../../imge/admin1.jpeg';
import admin2 from '../../imge/admin2.jpeg';
import phone from '../../imge/phone.png';
import telegram from '../../imge/telegram.png';
import whatsApp from '../../imge/whatsApp.png';
import MySercheBar from '../../mySercheBar/MySercheBar';
import { getSettings } from '../../RTKadmin/getSettingsSlice';
import './connect.css';
const Connect = () => {
  let settings = useSelector((state) => state.getSettings).data;
  console.log(settings);
  ///////////
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);
  ///////////

  useEffect(() => {
    document.title = 'MEI | contact us';

    return function () {
      document.title = 'MEI | Dubai Rent Cars';
    };
  }, []);
  return (
    <div className='connect'>
      <MySercheBar />
      <div className='titel'>
        {' '}
        <div className='managers'> Managers </div>{' '}
      </div>

      <div className='managersInfo'>
        <div className='managersInfo1'>
          <div className='mang1Imge'>
            <img src={admin2} className='admin1Imm' alt='admin' />
          </div>

          <div className='mang1Info'>
            <h2> {settings?.name1} </h2>
            <a
              href={`https://wa.me/${settings?.phone1}?text=''`}
              target='blank'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <h2> {settings?.phone1} </h2>
            </a>
            <h2> {settings?.email1} </h2>
          </div>
        </div>

        <div className='managersInfo1'>
          <div className='mang1Imge'>
            <img src={admin1} className='admin1Imm' alt='admin' />
          </div>

          <div className='mang1Info'>
            <h2> {settings?.name2} </h2>
            <a
              href={`https://wa.me/${settings?.phone2}?text=''`}
              target='blank'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <h2> {settings?.phone2} </h2>
            </a>
            <h2> {settings?.email2} </h2>
          </div>
        </div>
      </div>

      <div className='aBout'>
        <div className='tite2'>
          {' '}
          <h2> About Us </h2>{' '}
        </div>
        <div className='servicesText'>
          {' '}
          <ul className='con1'>
            <li className='title1'>
              {' '}
              We are a car rental office offering a range of additional services
              to take care of your personal comfort
            </li>
            <li className='title1'> We offer car rental service</li>
            <li className='title1'>
              {' '}
              We provide you with a highly qualified driver for the rented car
            </li>
            <li className='title1'>
              {' '}
              You will be received upon arrival at the airport with the
              requested vehicle
            </li>
            <li className='title1'>
              {' '}
              Or we deliver the requested car to the hotel where you stayed
            </li>
            <li className='title1'>
              {' '}
              We also provide you with a large selection of cars from all brands
            </li>
            <li className='title1'>
              {' '}
              You will not pay any costs until you receive the car you ordered
            </li>
          </ul>
        </div>
      </div>

      <div className='conactUs'>
        <div className='titel3'>
          <h4> Contact us via</h4>
        </div>
        <div className='connectUsIner '>
          <svg
            className='leftArrw2'
            xmlns='http://www.w3.org/2000/svg'
            width='21.001'
            height='12.091'
            viewBox='0 0 21.001 12.091'
          >
            <path
              id='chevron-down-Filled_1_'
              d='M944.707,2705.707l-9,9a1,1,0,0,1-1.414,0l-9-9a1,1,0,0,1,1.414-1.414l8.293,8.293,8.293-8.293a1,1,0,1,1,1.414,1.414Z'
              transform='translate(-924.5 -2703.409)'
              fill='#e8702e'
              stroke='#e8702e'
              stroke-width='1'
            />
          </svg>
          <svg
            className='leftArrw1'
            xmlns='http://www.w3.org/2000/svg'
            width='21.001'
            height='12.091'
            viewBox='0 0 21.001 12.091'
          >
            <path
              id='chevron-down-Filled_1_'
              d='M944.707,2705.707l-9,9a1,1,0,0,1-1.414,0l-9-9a1,1,0,0,1,1.414-1.414l8.293,8.293,8.293-8.293a1,1,0,1,1,1.414,1.414Z'
              transform='translate(-924.5 -2703.409)'
              fill='#e8702e'
              stroke='#e8702e'
              stroke-width='1'
            />
          </svg>

          <div className=''>
            <a
              href={`https://wa.me/${settings?.phone1}?text=''`}
              target='blank'
            >
              <img className='whatsAppLogoUs' src={whatsApp} alt='logo' />
            </a>{' '}
          </div>
          <div className='tl'>
            <a href={`https://t.me/${settings?.phone2}`} target='blank'>
              <img className='telegramLogoUs' src={telegram} alt='logo' />{' '}
            </a>
          </div>
          <div className='ph'>
            <a href={`tel:+${settings.phone1}`} target='blank'>
              <img className='phoneLogoUs' src={phone} alt='logo' />{' '}
            </a>
          </div>

          <svg
            className='rightArrw1'
            xmlns='http://www.w3.org/2000/svg'
            width='21.001'
            height='12.091'
            viewBox='0 0 21.001 12.091'
          >
            <path
              id='chevron-down-Filled_1_'
              d='M944.707,2705.707l-9,9a1,1,0,0,1-1.414,0l-9-9a1,1,0,0,1,1.414-1.414l8.293,8.293,8.293-8.293a1,1,0,1,1,1.414,1.414Z'
              transform='translate(-924.5 -2703.409)'
              fill='#e8702e'
              stroke='#e8702e'
              stroke-width='1'
            />
          </svg>
          <svg
            className='rightArrw2'
            xmlns='http://www.w3.org/2000/svg'
            width='21.001'
            height='12.091'
            viewBox='0 0 21.001 12.091'
          >
            <path
              id='chevron-down-Filled_1_'
              d='M944.707,2705.707l-9,9a1,1,0,0,1-1.414,0l-9-9a1,1,0,0,1,1.414-1.414l8.293,8.293,8.293-8.293a1,1,0,1,1,1.414,1.414Z'
              transform='translate(-924.5 -2703.409)'
              fill='#e8702e'
              stroke='#e8702e'
              stroke-width='1'
            />
          </svg>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Connect;
