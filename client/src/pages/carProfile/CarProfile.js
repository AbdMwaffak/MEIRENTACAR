import 'car-makes-icons/dist/style.css';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CarCard from '../../carCard/CarCard';
import Api from '../../extensions/API';
import phone from '../../imge/phone.png';
import telegram from '../../imge/telegram.png';
import whatsApp from '../../imge/whatsApp.png';
import MySercheBar from '../../mySercheBar/MySercheBar';
import { getCarById } from '../../RTK/carByIdSlice';
import { getsuggestedCars } from '../../RTK/suggestedCarsSlice';
import './carProfile.css';

const CarProfile = () => {
  // const id = useParams()
  const id = useLocation()?.state?.id;
  const phone1 = useLocation()?.state?.phone1;
  const phone2 = useLocation()?.state?.phone2;
  console.log(id);
  const [range1, setRange1] = useState(15);
  const [showImg, setshowImg] = useState('0');

  let suggestedCars = useSelector((state) => state.suggestedCars).data;
  // //////////////////////////////////
  let car = useSelector((state) => state.carById).data.car;

  useEffect(
    function () {
      document.title = `MEI | ${car?.name} | Dubai Rent A Car`;

      return function () {
        document.title = 'MEI | Dubai Rent Cars';
      };
    },
    [car?.name]
  );
  // //////////////////////////////////////
  // console.log(suggestedCars)
  ///////////
  // console.log(car)
  ///////////
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarById(id));
  }, [dispatch, id]);
  ////////////////
  useEffect(() => {
    dispatch(getsuggestedCars(id));
  }, [dispatch, id]);
  ////////////////

  return (
    <div className='CarProfile'>
      <MySercheBar />
      <div className='titel'>
        {' '}
        <div className='managers'> {car?.name} </div>{' '}
      </div>
      <div className='infoCar'>
        {/* <div className='infoCarImge'>
          <div className='carImg'>
            <img className='ccc1' src={`${Api}/cars/${car?.images[showImg]}`} />
          </div>
          <div className='carImgExtra'>
            <div className='extra1' onClick={() => setshowImg('0')}>
              {' '}
              <img
                className='ccc1'
                src={`${Api}/cars/${car?.images[0]}`}
              />{' '}
            </div>
            <div className='extra1' onClick={() => setshowImg('1')}>
              {' '}
              <img
                className='ccc1'
                src={`${Api}/cars/${car?.images[1]}`}
              />{' '}
            </div>
            <div className='extra1' onClick={() => setshowImg('2')}>
              {' '}
              <img
                className='ccc1'
                src={`${Api}/cars/${car?.images[2]}`}
              />{' '}
            </div>
            <div className='extra1' onClick={() => setshowImg('3')}>
              {' '}
              <img
                className='ccc1'
                src={`${Api}/cars/${car?.images[3]}`}
              />{' '}
            </div>
          </div>
        </div> */}
        <div className='infoCarImge'>
          <Carousel data-bs-theme='dark'>
            {car?.images?.map((imageSquer, index) => (
              <Carousel.Item key={index}>
                <img
                  // d-block

                  className='w-100 profileImg'
                  src={`/cars/${imageSquer}`}
                  alt='First slide'
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className='infoCar1'>
          <div className='infoCar2'>
            <h1 className='infCarTitle'> Car Information</h1>
            <ul className='con1'>
              <li className='title1'> Name : {car?.name} </li>
              <li className='title1'> Brand : {car?.brand}</li>
              <li className='title1'> Color : {car?.color}</li>
              <li className='title1'> Category : {car?.category} </li>
              <li className='title1'> Model : {car?.model} </li>
              <li className='title1'> PowerHorse : {car?.powerHorse} </li>
              <li className='title1'> GearBox : {car?.gear} </li>
              {/* <li className='title1'>  Fuel Type : {car?.fuel} </li> */}
              <li className='title1'> Speed : {car?.speed} Km/h</li>
              <li className='title1'> Seats : {car?.seats} </li>
            </ul>
          </div>
          {/* <div className='infoCarPrice'> */}
          <div className='infoPrice'>
            <div className='PartialPrice1'>
              <div className='textPrice'> Day </div>
              <div className='textPrice'> {car?.price} </div>
            </div>
            {/* ///////// */}
            <div className='PartialPrice2'>
              <div className='textPrice'> week </div>
              <div className='textPrice'> {car?.price * 7} </div>
            </div>
            {/* //////// */}
            <div className='PartialPrice3'>
              <div className='textPrice'> month </div>
              <div className='textPrice'> {car?.price * 30} </div>
            </div>
            {/* //////// */}
            {/* </div> */}
            {/* <h1 className='DurationOfRent'> Duration of rent  </h1>
                        <div className='prslist'>



                            <div className='tt1'>
                                <div className='tt2'>
                                    <p>1</p>
                                    <div className='Range'>
                                        <Form.Range min="1" max="30"
                                            onChange={(e) => setRange1(e.target.value)} />
                                    </div>
                                    <p> 30+ </p>
                                </div>
                                <p className='rengeDay'> {range1 * car?.price} AED</p>

                            </div>
 
                            <div className='numMonth'>
                                {range1}
                                <h1 className='price-title'> day </h1>
                            </div>
                        </div> */}
          </div>
          {/* <div className='infoCar3'> */}
          <div className='conactUsIner2 '>
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
                strokeWidth='1'
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
                strokeWidth='1'
              />
            </svg>

            <div className=''>
              <a
                href={`https://wa.me/${phone1}?text=Hello MEI I'd like to book this car [${car?.name}]\n ${Api}/car/${car?.name}`}
                target='blank'
              >
                <img className='whatsAppLogoUs' src={whatsApp} />
              </a>
            </div>
            <div className='tl'>
              <a href={`https://t.me/${phone2}`} target='blank'>
                <img
                  className='telegramLogoUs'
                  src={telegram}
                  //   alt="logo"
                />
              </a>
            </div>
            <div className='ph'>
              <a href={`tel:+${phone1}`} target='blank'>
                <img
                  className='phoneLogoUs'
                  src={phone}
                  //   alt="logo"
                />
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
                strokeWidth='1'
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
                strokeWidth='1'
              />
            </svg>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className='titel1'>
        <div className='c1'> </div>
        <div className='c2'> </div>
        <div className='c3'> </div>
        <div className='cc'> Suggested Cars </div>
        <div className='c3'> </div>
        <div className='c2'> </div>
        <div className='c1'> </div>
      </div>

      <div className='suggested'>
        {suggestedCars?.map((car, index) => (
          <CarCard
            key={index}
            brand={car?.brand}
            category={car?.category}
            color={car?.color}
            gear={car?.gear}
            images={car?.images[0]}
            model={car?.model}
            id={car?.id}
            name={car?.name}
            price={car?.price}
            seats={car?.seats}
            speed={car?.speed}
            WeeklyPrice={car?.priceWeekly}
            MonthlyPrice={car?.priceMonthly}
            phone1={phone1}
            phone2={phone2}
          />
        ))}
      </div>
    </div>
  );
};

export default CarProfile;
