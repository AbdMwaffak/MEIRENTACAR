import { IoTimeOutline } from 'react-icons/io5';
import logo from '../imge/logo.png';
import './workTime.css';

const WorkTime = ({ isWorkTimeOpen, handleWorkTimeWindow }) => {
  return (
    <>
      {isWorkTimeOpen && (
        <div className='top-div'>
          <div className='work-time-container'>
            <img className='logo-image' src={logo} alt='logo' />

            <h3 className='phrase1'>
              <IoTimeOutline className='time-icon' />
              ur doors are always open!
            </h3>
            <h4 className='phrase2'>
              Rent a car in Dubai anytime, day or night, on our 24/7 website.
            </h4>

            <button className='close-btn' onClick={handleWorkTimeWindow}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkTime;
