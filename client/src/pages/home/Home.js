import { APIProvider } from '@vis.gl/react-google-maps';
import { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { BiSolidOffer } from 'react-icons/bi';
import { FaCarSide, FaHandHolding } from 'react-icons/fa';
import { FaHotel, FaLocationDot, FaPeopleGroup } from 'react-icons/fa6';
import { IoTimeOutline } from 'react-icons/io5';
import { PiSteeringWheelThin } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from '../../articles/Accordion';
import Article1 from '../../articles/Article1';
import CarCard from '../../carCard/CarCard';
import ContactIcons from '../../contactIcons/ContactIcons';
import FAQs from '../../extensions/FAQs';
import intros from '../../extensions/intros';
import CarFooter from '../../footer/CarFooter';
import logo from '../../imge/logo.png';
import Location from '../../location/Location';
import MySercheBar from '../../mySercheBar/MySercheBar';
import OurServices from '../../our services/OurServices';
import { getAllCars } from '../../RTK/allCarsSlice';
import { getSettings } from '../../RTKadmin/getSettingsSlice';
import Service from '../../service/Service';
import WorkTime from '../../workTime/WorkTime';
import './home.css';

const Home = () => {
  const [page, setPage] = useState(1);
  const [isWorkTimeOpen, setisWorkTimeOpen] = useState(false);
  const locationRef = useRef(null);
  const ourServicesRef = useRef(null);
  let settings = useSelector((state) => state.getSettings).data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  let allCars = useSelector((state) => state?.allCars)?.data;

  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);
  ////////////////

  const scrollToLocation = () => {
    if (locationRef.current) {
      locationRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Component ref is null');
    }
  };

  const scrollToOurServices = () => {
    if (ourServicesRef.current) {
      ourServicesRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Component ref is null');
    }
  };

  const ourOffers = () => {
    toast.custom(
      <div
        style={{
          width: '400px',
          height: '200px',
          backgroundColor: '#151515',
          color: '#d79a3d',
          position: 'relative',
          top: '200px',
          fontWeight: 'bold',
          fontSize: '32px',
          borderRadius: '20px',
          opacity: '0.9',
        }}
      >
        <img
          src={logo}
          style={{ width: '150px', height: '100px' }}
          alt='logo'
        />
        <p
          style={{
            position: 'absolute',
            top: '35%',
          }}
        >
          SOON - stay tuned for irresistible offers 🔥🔥
        </p>
      </div>,
      { duration: 3000 }
    );
  };

  const handleWorkTimeWindow = () => {
    setisWorkTimeOpen((c) => !c);
  };
  return (
    <div className='home'>
      <Helmet>
        <title>MEI | Dubai Rent A Car</title>
        <meta
          name='description'
          content='MEI car rental company is your reliable car rental partner
            if you are looking for car hire in Dubai , you are in the right place
            ,we provide all types of cars , daily-weekly-monthly car rental , affordable cars'
        />
        <meta
          name='keywords'
          content='
            dubai rent a car,
            cheap car rental dubai,
            cheap car hire dubai,
            affordable car rental dubai,
            renty car rental dubai,
            hire car dubai cheap,
            affordable car rental in dubai,
            car rent uae dubai,
            luxury car hire dubai,
            monthly car rental dubai,
            lamborghini rental dubai,
            rent ferrari dubai,
            car rental dubai with driver,
            long term car hire dubai,
            vip car rental dubai,
            range rover rental dubai,
            superior car rental dubai,
            luxury car rental dubai with driver
          '
        />
      </Helmet>
      <MySercheBar />
      <ContactIcons />
      <WorkTime
        isWorkTimeOpen={isWorkTimeOpen}
        handleWorkTimeWindow={handleWorkTimeWindow}
      />
      <div className='poster'>
        <Carousel data-bs-theme='dark'>
          {settings.slider?.map((imageSquer, index) => (
            <Carousel.Item key={index}>
              <img
                // d-block

                className='w-100 homeImg'
                src={imageSquer}
                alt='First slide'
              />
              <Carousel.Caption>
                <h5 className='vv11'>{intros[index].header}</h5>
                <p className='vv22'>{intros[index].paragraph}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className='col-12 text-center'>
        <h1 className='mei'>MEI</h1>
        <h1 className='yellow super-gra pt-3 pt-md-3'>
          <span className='gradiant-color'>Best</span>{' '}
          <span className='white-super text-no-gradiant'> Car Rental </span>
          <span className='gradiant-color'>DUBAI</span>
        </h1>
      </div>

      <div className='services'>
        <div className='serviceContent'>
          <div className='service'>
            <button>
              <FaPeopleGroup className='service-icon' />
            </button>
          </div>
          <div className='serviceTitel'>Customer Reviews</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <button onClick={scrollToLocation}>
              <FaLocationDot className='service-icon' />
            </button>
          </div>
          <div className='serviceTitel'>Our Location</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <a
              href={`https://wa.me/+971568355478?text='Hello MEI I'd like to know more about hotel reservation service'`}
              target='blank'
            >
              <button>
                <FaHotel className='service-icon' />
              </button>
            </a>
          </div>
          <div className='serviceTitel'>Hotel Reservation</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <button onClick={ourOffers}>
              <BiSolidOffer className='service-icon' />
            </button>
          </div>
          <div className='serviceTitel'>Our Offers</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <button
              style={{ position: 'relative' }}
              onClick={handleWorkTimeWindow}
            >
              <PiSteeringWheelThin
                style={{ position: 'absolute', top: 0, left: 0 }}
                className='service-icon'
              />
              <IoTimeOutline style={{}} className='service-icon' />
            </button>
          </div>
          <div className='serviceTitel'>Work Time</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <button
              onClick={scrollToOurServices}
              style={{ position: 'relative' }}
            >
              <FaCarSide
                style={{
                  position: 'absolute',
                  bottom: -20,
                  left: -20,
                  fontSize: '75px',
                }}
                className='service-icon'
              />
              <FaHandHolding
                style={{
                  position: 'absolute',
                  top: -40,
                  left: -40,
                  fontSize: '100px',
                }}
                className='service-icon'
              />
            </button>
          </div>
          <div className='serviceTitel'>Our Services</div>
        </div>
        {/* //////////// */}

        {/* //////////// */}
      </div>

      <div className='titel1'>
        <div className='c1'> </div>
        <div className='c2'> </div>
        <div className='c3'> </div>
        <div className='cc'> All Our Cars </div>
        <div className='c3'> </div>
        <div className='c2'> </div>
        <div className='c1'> </div>
      </div>

      <div className='cars'>
        {allCars?.map((car, index) => (
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
            WeeklyPrice={car?.priceWeekly}
            MonthlyPrice={car?.priceMonthly}
            seats={car?.seats}
            speed={car?.speed}
            mainImage={car?.mainImage}
            phone1={settings?.phone1}
            phone2={settings?.phone2}
          />
        ))}
      </div>

      {/* <CarPagination/> */}
      <div className='carPage'>
        <div
          role='button'
          className='prev'
          style={{ display: page < 2 && 'none' }}
          onClick={() => {
            setPage((cur) => cur - 1);
            window.scroll(0, 750);
          }}
        >
          <span className='arr'>&larr;</span>prev
        </div>
        <div
          role='button'
          className='next'
          style={{ display: settings.carsCount < page * 12 && 'none' }}
          onClick={() => {
            setPage((cur) => cur + 1);
            window.scroll(0, 750);
          }}
        >
          next<span className='arr'>&rarr;</span>
        </div>
      </div>

      <Service />
      <Article1 />
      <div style={{ width: '100%' }} ref={ourServicesRef}>
        <OurServices />
      </div>
      <Accordion items={FAQs} keepOthersOpen={false} />
      <div style={{ width: '100%' }} ref={locationRef}>
        <APIProvider apiKey={`AIzaSyBX7PzdrLfhZnRJGJfntw4WaXx6BOLTNbM`}>
          <Location />
        </APIProvider>
      </div>
      {/* <Reviews /> */}
      <CarFooter />
    </div>
  );
};

export default Home;
