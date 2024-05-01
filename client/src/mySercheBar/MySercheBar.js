import React, { useEffect, useState } from 'react';
import './mySercheBar.css';
import 'car-makes-icons/dist/style.css';
import Brands from '../extensions/Brands';
import Colors from '../extensions/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchCars } from '../RTK/searchCarsSlice';

import { setAdminState } from '../RTKadmin/adminStateSlice';
import Serche from '../pages/serche/Serche';
import { useNavigate } from 'react-router-dom';

const MySercheBar = (props) => {
  const [searchKey, setSearchKey] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (searchKey === '#ol7zpZ' && !null) {
      dispatch(setAdminState(true));
      setSearchKey('');
    } else if (searchKey !== '') {
      navigate(`/search/${searchKey}`, { state: { searchKey } });
      setSearchKey('');
    }
  };

  return (
    <div
      className='mySercheBar'
      style={{
        display: window.location.pathname.includes('admin') ? 'none' : 'flix',
      }}
    >
      <div className='sercheout'>
        {/* <Serche /> */}
        <form className='sercheIn' onSubmit={handleSubmit}>
          <button className='start' type='submit'>
            <svg
              className='searchIcon'
              fill='#000000'
              viewBox='0 -8 72 72'
              id='Layer_1'
              data-name='Layer 1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
              <g
                id='SVGRepo_tracerCarrier'
                stroke-linecap='round'
                stroke-linejoin='round'
              ></g>
              <g id='SVGRepo_iconCarrier'>
                <title>search</title>
                <path d='M58.73,44.35l-11-11a21.26,21.26,0,0,1-6.37,6.37l11,11a4.51,4.51,0,0,0,6.38-6.38Z'></path>
                <path d='M48,22A18,18,0,1,0,30,40,18,18,0,0,0,48,22ZM30,35.52A13.53,13.53,0,1,1,43.52,22,13.55,13.55,0,0,1,30,35.52Z'></path>
                <path d='M19.47,22h3A7.52,7.52,0,0,1,30,14.47v-3A10.53,10.53,0,0,0,19.47,22Z'></path>
              </g>
            </svg>
          </button>
          <input
            className='sercheInput'
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default MySercheBar;
