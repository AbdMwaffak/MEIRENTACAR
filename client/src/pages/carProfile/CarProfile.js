import 'car-makes-icons/dist/style.css';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import CarCard from '../../carCard/CarCard';
import phone from '../../imge/phone.png';
import telegram from '../../imge/telegram.png';
import whatsApp from '../../imge/whatsApp.png';
import MySercheBar from '../../mySercheBar/MySercheBar';
import { getCarById } from '../../RTK/carByIdSlice';
import { getsuggestedCars } from '../../RTK/suggestedCarsSlice';
import Footer from '../../footer/CarFooter';
import './carProfile.css';
import { Helmet } from 'react-helmet';

const CarProfile = () => {
  const id = useLocation()?.state?.id;
  const params = useParams();
  const phone1 = useLocation()?.state?.phone1;
  const phone2 = useLocation()?.state?.phone2;
  // const [range1, setRange1] = useState(15);
  // const [showImg, setshowImg] = useState('0');

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
    dispatch(getCarById(id || params.id));
  }, [dispatch, id, params.id]);
  ////////////////
  useEffect(() => {
    dispatch(getsuggestedCars(id || params.id));
  }, [dispatch, id, params.id]);
  ////////////////

  return (
    <div className='CarProfile'>
      <Helmet>
          <title>
            {`Dubai Rent A Car - ${car?.name}`} 
          </title>
          <meta name='description'
            content={`MEI car rental company is your reliable car rental partner
            if you are looking for hiring ${car?.name}`}
          />
          <meta name='keywords' content={`
            dubai rent a car, cheap car rental dubai, cheap car hire dubai, affordable car rental dubai, renty car rental dubai, hire car dubai cheap, affordable car rental in dubai, car rent uae dubai, luxury car hire dubai, monthly car rental dubai, lamborghini rental dubai, rent ferrari dubai, car rental dubai with driver, long term car hire dubai, vip car rental dubai, range rover rental dubai, superior car rental dubai, luxury car rental dubai with driver, rent ${car?.name} in Dubai
          `}/>
        </Helmet>
      <MySercheBar />
      <div className='titel'>
        {' '}
        <div className='managers'> {car?.name} </div>{' '}
      </div>
      <div className='infoCar'>
        <div className='infoCarImge'>
          <Carousel data-bs-theme='dark'>
            {car?.images?.map((imageSquer, index) => (
              <Carousel.Item key={index}>
                <img
                  // d-block

                  className='w-100 profileImg'
                  src={imageSquer}
                  alt='First slide'
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className='infoCar1'>
          <div className='infoCar2'>
            <h1 className='infCarTitle'>Specification</h1>
            <ul className='con1'>
              <li className='title1'> Name : {car?.name} </li>
              <li className='title1'> Brand : {car?.brand}</li>
              <li className='title1'> Color : {car?.color}</li>
              <li className='title1'> Category : {car?.category} </li>
              <li className='title1'> Model : {car?.model} </li>
              <li className='title1'> Cylinders : {car?.powerHorse} </li>
              <li className='title1'> GearBox : {car?.gear} </li>
              {/* <li className='title1'>  Fuel Type : {car?.fuel} </li> */}
              <li className='title1'> Speed : {car?.speed} Km/h</li>
              <li className='title1'> Seats : {car?.seats} </li>
            </ul>
          </div>
          {/* <div className='infoCarPrice'> */}
          <div className='infoPrice'>
            <div className='PartialPrice1'>
              <div className='textPrice' style={{ fontSize: '20px' }}>
                {' '}
                Day{' '}
              </div>
              <div className='textPrice'>
                {' '}
                {car?.price}
                <span style={{ fontSize: '12px' }}> AED</span>{' '}
              </div>
            </div>
            {/* ///////// */}
            <div className='PartialPrice2'>
              <div className='textPrice' style={{ fontSize: '20px' }}>
                {' '}
                Week{' '}
              </div>
              <div className='textPrice'>
                {' '}
                {car?.priceWeekly}
                <span style={{ fontSize: '12px' }}> AED</span>{' '}
              </div>
            </div>
            {/* //////// */}
            <div className='PartialPrice3'>
              <div className='textPrice' style={{ fontSize: '20px' }}>
                {' '}
                Month{' '}
              </div>
              <div className='textPrice'>
                {' '}
                {car?.priceMonthly}
                <span style={{ fontSize: '12px' }}> AED</span>{' '}
              </div>
            </div>
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
                fill='#d79a3d'
                stroke='#d79a3d'
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
                fill='#d79a3d'
                stroke='#d79a3d'
                strokeWidth='1'
              />
            </svg>

            <div className=''>
              <a
                href={`https://wa.me/+971566634661?text=Hello MEI I'd like to book this car [${car?.name}]\n /car/${car?.name}`}
                target='blank'
              >
                <img className='whatsAppLogoUs' src={whatsApp} alt='' />
              </a>
            </div>
            <div className='tl'>
              <a href={`https://t.me/+971506004552`} target='blank'>
                <img className='telegramLogoUs' src={telegram} alt='logo' />
              </a>
            </div>
            <div className='ph'>
              <a href={`tel:+971566634661`} target='blank'>
                <img className='phoneLogoUs' src={phone} alt='logo' />
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
                fill='#d79a3d'
                stroke='#d79a3d'
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
                fill='#d79a3d'
                stroke='#d79a3d'
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
        <div className='cc'> Similar Cars </div>
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
            mainImage={car?.mainImage}
            phone1={phone1}
            phone2={phone2}
          />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default CarProfile;
