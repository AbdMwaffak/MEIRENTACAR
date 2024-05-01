import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import CarCard from '../../carCard/CarCard';
import intros from '../../extensions/intros';
import CarFooter from '../../footer/CarFooter';
import MySercheBar from '../../mySercheBar/MySercheBar';
import { getAllCars } from '../../RTK/allCarsSlice';
import { getSettings } from '../../RTKadmin/getSettingsSlice';
import './home.css';

// style={{ display: active ? "none" : "flex" }}>
const Home = () => {
  // const [arrw, setArrw] = useState(false);
  // const [s1, setS1] = useState(false);
  // const [s2, setS2] = useState(false);
  // const [s3, setS3] = useState(false);
  const [page, setPage] = useState(1);

  const [seatsNum, setSeatsNum] = useState(0);

  let settings = useSelector((state) => state.getSettings).data;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
  }, [dispatch]);

  // const closeSelecter1 = () => {
  //   setS1(!s1);
  //   setS2(false);
  //   setS3(false);
  // };
  // const closeSelecter2 = () => {
  //   setS1(false);
  //   setS2(!s2);
  //   setS3(false);
  // };
  // const closeSelecter3 = () => {
  //   setS1(false);
  //   setS2(false);
  //   setS3(!s3);
  // };
  // const closeSelecter4 = () => {
  //   setS1(false);
  //   setS2(false);
  //   setS3(false);
  // };

  let allCars = useSelector((state) => state?.allCars)?.data;

  // const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars(page));
  }, [dispatch, page]);
  ////////////////

  return (
    <div className='home'>
      <MySercheBar />
      <div className='poster'>
        <Carousel data-bs-theme='dark'>
          {settings.slider?.map((imageSquer, index) => (
            <Carousel.Item key={index}>
              <img
                // d-block

                className='w-100 homeImg'
                src={`/slider/${imageSquer}`}
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

      <div className='titel1'>
        <div className='c1'> </div>
        <div className='c2'> </div>
        <div className='c3'> </div>
        <div className='cc'> Our Services </div>
        <div className='c3'> </div>
        <div className='c2'> </div>
        <div className='c1'> </div>
      </div>

      <div className='services'>
        <div className='serviceContent'>
          <div className='service'>
            <svg
              className='servIcon'
              xmlns='http://www.w3.org/2000/svg'
              width='147.239'
              height='144.863'
              viewBox='0 0 147.239 144.863'
            >
              <g id='SVGRepo_iconCarrier' transform='translate(0 -2.382)'>
                <g
                  id='Group_1537'
                  data-name='Group 1537'
                  transform='translate(0 2.382)'
                >
                  <g id='Group_1536' data-name='Group 1536'>
                    <path
                      id='Path_1710'
                      data-name='Path 1710'
                      d='M204.615,49.878H164.244a16.624,16.624,0,1,1,2.707-33.026,22.541,22.541,0,0,1,42.25.425,16.623,16.623,0,0,1-4.586,32.6Z'
                      transform='translate(-74 -2.382)'
                      fill='#f9ba48'
                    />
                    <path
                      id='Path_1711'
                      data-name='Path 1711'
                      d='M144.972,132.49a60.42,60.42,0,0,0-26.89-6.348H88.137l-26.914-19H38.114l19,19H37.625l-21.373-19H2.195L11.6,128.317l-3.379.563v7.982l1.518,1.085A63.762,63.762,0,0,0,47.011,149.89h5.353L34.987,167.266l2.427,1.6a14.448,14.448,0,0,1,2.123,1.715l.693.679H54.1L84.38,149.89h33.1a59.8,59.8,0,0,0,23.686-4.861l3.477-1.489a6.094,6.094,0,0,0,.324-11.049Zm-95.392-20.6H59.718L79.9,126.141H63.829Zm-40.075,0h4.942l16.03,14.249h-3.27a31.055,31.055,0,0,0-5.075.42l-5.688.948Zm133.273,27.28-3.477,1.489a55.035,55.035,0,0,1-21.815,4.479H91.109l3.98-2.809-2.74-3.88L52.594,166.514H42.455L66.9,142.07l-3.358-3.358-6.428,6.428H47.01a59.044,59.044,0,0,1-34.036-10.725V132.9l9.939-1.658a26.32,26.32,0,0,1,4.294-.354h90.875a55.655,55.655,0,0,1,24.765,5.844,1.344,1.344,0,0,1-.069,2.437Z'
                      transform='translate(-1.1 -54.897)'
                      fill='#fff'
                    />
                    <path
                      id='Path_1712'
                      data-name='Path 1712'
                      d='M42.747,254.664h-28.5a14.22,14.22,0,0,1-2.324-28.253,18.977,18.977,0,0,1,35.154,5.346,11.861,11.861,0,0,1-4.332,22.907Z'
                      transform='translate(0 -109.801)'
                      fill='#f9ba48'
                    />
                    <rect
                      id='Rectangle_1167'
                      data-name='Rectangle 1167'
                      width='47.496'
                      height='4.75'
                      transform='translate(80.744 121.115)'
                      fill='#fff'
                    />
                    <rect
                      id='Rectangle_1168'
                      data-name='Rectangle 1168'
                      width='4.75'
                      height='4.75'
                      transform='translate(71.244 121.115)'
                      fill='#fff'
                    />
                    <rect
                      id='Rectangle_1169'
                      data-name='Rectangle 1169'
                      width='37.997'
                      height='4.75'
                      transform='translate(21.373 16.623)'
                      fill='#fff'
                    />
                    <rect
                      id='Rectangle_1170'
                      data-name='Rectangle 1170'
                      width='4.75'
                      height='4.75'
                      transform='translate(11.874 16.623)'
                      fill='#fff'
                    />
                    <rect
                      id='Rectangle_1171'
                      data-name='Rectangle 1171'
                      width='35.622'
                      height='4.75'
                      transform='translate(11.874 28.497)'
                      fill='#fff'
                    />
                    <rect
                      id='Rectangle_1172'
                      data-name='Rectangle 1172'
                      width='4.75'
                      height='4.75'
                      transform='translate(2.375 28.497)'
                      fill='#fff'
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className='serviceTitel'>Delivery To The Airport</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <svg
              className='servIcon'
              xmlns='http://www.w3.org/2000/svg'
              width='149.586'
              height='149.587'
              viewBox='0 0 149.586 149.587'
            >
              <g id='SVGRepo_iconCarrier' transform='translate(-0.001)'>
                <g
                  id='Group_1548'
                  data-name='Group 1548'
                  transform='translate(0.001)'
                >
                  <g id='Group_1547' data-name='Group 1547'>
                    <g
                      id='Group_1539'
                      data-name='Group 1539'
                      transform='translate(16.889 72.38)'
                    >
                      <g id='Group_1538' data-name='Group 1538'>
                        <path
                          id='Path_1713'
                          data-name='Path 1713'
                          d='M41.779,159.745a8.445,8.445,0,1,1,8.445-8.445A8.454,8.454,0,0,1,41.779,159.745Zm0-12.063A3.619,3.619,0,1,0,45.4,151.3,3.624,3.624,0,0,0,41.779,147.682Z'
                          transform='translate(-33.334 -142.856)'
                          fill='#f9ba48'
                        />
                      </g>
                    </g>
                    <g
                      id='Group_1541'
                      data-name='Group 1541'
                      transform='translate(33.777 72.38)'
                    >
                      <g id='Group_1540' data-name='Group 1540'>
                        <path
                          id='Path_1714'
                          data-name='Path 1714'
                          d='M75.112,159.745a8.445,8.445,0,1,1,8.445-8.444A8.454,8.454,0,0,1,75.112,159.745Zm0-12.063a3.619,3.619,0,1,0,3.619,3.619A3.624,3.624,0,0,0,75.112,147.682Z'
                          transform='translate(-66.667 -142.856)'
                          fill='#f9ba48'
                        />
                      </g>
                    </g>
                    <g
                      id='Group_1543'
                      data-name='Group 1543'
                      transform='translate(98.92 72.38)'
                    >
                      <g id='Group_1542' data-name='Group 1542'>
                        <path
                          id='Path_1715'
                          data-name='Path 1715'
                          d='M203.684,159.745a8.445,8.445,0,1,1,8.445-8.445A8.454,8.454,0,0,1,203.684,159.745Zm0-12.063A3.619,3.619,0,1,0,207.3,151.3,3.624,3.624,0,0,0,203.684,147.682Z'
                          transform='translate(-195.239 -142.856)'
                          fill='#f9ba48'
                        />
                      </g>
                    </g>
                    <g
                      id='Group_1545'
                      data-name='Group 1545'
                      transform='translate(115.808 72.38)'
                    >
                      <g id='Group_1544' data-name='Group 1544'>
                        <path
                          id='Path_1716'
                          data-name='Path 1716'
                          d='M237.017,159.745a8.445,8.445,0,1,1,8.445-8.445A8.454,8.454,0,0,1,237.017,159.745Zm0-12.063a3.619,3.619,0,1,0,3.619,3.619A3.624,3.624,0,0,0,237.017,147.682Z'
                          transform='translate(-228.572 -142.856)'
                          fill='#f9ba48'
                        />
                      </g>
                    </g>
                    <g id='Group_1546' data-name='Group 1546'>
                      <path
                        id='Path_1717'
                        data-name='Path 1717'
                        d='M139.936,103.745V79.618A14.49,14.49,0,0,0,125.46,65.143h-.135l4.96-2.977v.564h9.651a9.651,9.651,0,1,0,0-19.3h-9.651v4.825h-9.064l-2.594-27.227a7.212,7.212,0,0,0-7.2-6.551H94.1V7.238A7.247,7.247,0,0,0,86.858,0H62.731a7.247,7.247,0,0,0-7.238,7.238v7.238H38.165a7.21,7.21,0,0,0-7.2,6.553L28.367,48.254H19.3V43.428H9.652a9.651,9.651,0,0,0,0,19.3H19.3v-.564l4.96,2.977h-.135A14.49,14.49,0,0,0,9.652,79.618v24.127a7.247,7.247,0,0,0-7.238,7.238v9.651a7.247,7.247,0,0,0,7.238,7.238h2.413V138.73a10.857,10.857,0,1,0,21.715,0V127.872H115.81V138.73a10.857,10.857,0,1,0,21.715,0V127.872h2.413a7.247,7.247,0,0,0,7.238-7.238v-9.651A7.249,7.249,0,0,0,139.936,103.745Zm-4.825-55.492h4.825a4.825,4.825,0,1,1,0,9.651h-4.825Zm-4.825,4.825v3.46l-7.829,4.7-.777-8.157ZM60.318,7.238a2.415,2.415,0,0,1,2.413-2.413H86.858A2.415,2.415,0,0,1,89.27,7.238v7.238H60.318S60.318,7.238,60.318,7.238ZM35.762,21.488a2.408,2.408,0,0,1,2.4-2.186h73.258a2.406,2.406,0,0,1,2.4,2.184l4.155,43.658H31.607ZM90.269,84.444H59.319l-.4-4.825H90.667Zm-.4,4.825-.4,4.825H60.125l-.4-4.825Zm1.206-14.476H58.515l-.4-4.825h33.36ZM14.477,57.9H9.651a4.825,4.825,0,1,1,0-9.651h4.825ZM19.3,53.079h8.606l-.777,8.157-7.829-4.7v-3.46ZM14.477,79.618a9.661,9.661,0,0,1,9.651-9.651H53.273L55.314,94.5a4.859,4.859,0,0,0,4.811,4.425H89.463A4.851,4.851,0,0,0,94.27,94.5l2.046-24.528h29.145a9.661,9.661,0,0,1,9.651,9.651v24.127H14.477Zm14.476,59.111a6.032,6.032,0,1,1-12.064,0V127.872H28.953S28.953,138.729,28.953,138.729Zm103.745,0a6.032,6.032,0,1,1-12.064,0V127.872H132.7v10.857Zm9.65-18.1a2.413,2.413,0,0,1-2.413,2.413H9.652a2.413,2.413,0,0,1-2.413-2.413v-9.651a2.413,2.413,0,0,1,2.413-2.413H139.936a2.413,2.413,0,0,1,2.413,2.413Z'
                        transform='translate(-0.001)'
                        fill='#fff'
                      />
                      <rect
                        id='Rectangle_1173'
                        data-name='Rectangle 1173'
                        width='36.19'
                        height='4.825'
                        transform='matrix(0.6, -0.8, 0.8, 0.6, 51.149, 56.457)'
                        fill='#fff'
                      />
                      <rect
                        id='Rectangle_1174'
                        data-name='Rectangle 1174'
                        width='36.193'
                        height='4.825'
                        transform='translate(70.451 56.456) rotate(-53.117)'
                        fill='#fff'
                      />
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className='serviceTitel'>Car Rental Service</div>
        </div>
        {/* //////////// */}
        <a
          href={`https://wa.me/+971568355478?text=Hello MEI I'd like to know more about the service of hotel rentals`}
          target='blank'
        >
          <div className='serviceContent'>
            <div className='service'>
              <svg
                className='servIcon'
                xmlns='http://www.w3.org/2000/svg'
                width='148.003'
                height='148.003'
                viewBox='0 0 148.003 148.003'
              >
                <g id='SVGRepo_iconCarrier' transform='translate(0.001 0.001)'>
                  <g id='Group_1535' data-name='Group 1535'>
                    <g id='Group_1534' data-name='Group 1534'>
                      <path
                        id='Path_1690'
                        data-name='Path 1690'
                        d='M0,207.37H35.807V202.6H4.774V123.822H35.807v-4.774H0Z'
                        transform='translate(0 -59.37)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1691'
                        data-name='Path 1691'
                        d='M223.809,119.048v4.774h31.032V202.6H223.809v4.774h35.807V119.048Z'
                        transform='translate(-111.616 -59.37)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1692'
                        data-name='Path 1692'
                        d='M38.132,142.857H23.81v14.322H38.132Zm-4.774,9.549H28.584v-4.774h4.774S33.358,152.406,33.358,152.406Z'
                        transform='translate(-11.874 -71.244)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1693'
                        data-name='Path 1693'
                        d='M38.132,185.714H23.81v14.322H38.132Zm-4.774,9.549H28.584v-4.774h4.774S33.358,195.263,33.358,195.263Z'
                        transform='translate(-11.874 -92.617)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1694'
                        data-name='Path 1694'
                        d='M23.81,242.894H38.132V228.572H23.81Zm4.774-9.549h4.774v4.774H28.584Z'
                        transform='translate(-11.874 -113.991)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1695'
                        data-name='Path 1695'
                        d='M257.179,142.857H242.857v14.322h14.322Zm-4.774,9.549h-4.774v-4.774h4.774Z'
                        transform='translate(-121.115 -71.244)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1696'
                        data-name='Path 1696'
                        d='M242.857,200.037h14.322V185.715H242.857v14.322Zm4.774-9.549h4.774v4.774h-4.774Z'
                        transform='translate(-121.115 -92.618)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1697'
                        data-name='Path 1697'
                        d='M242.857,242.894h14.322V228.572H242.857v14.322Zm4.774-9.549h4.774v4.774h-4.774Z'
                        transform='translate(-121.115 -113.991)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1698'
                        data-name='Path 1698'
                        d='M147.828,167H66.667V38.1h81.161V167Z'
                        transform='translate(-33.247 -18.998)'
                        fill='#f9ba48'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1699'
                        data-name='Path 1699'
                        d='M147.816,4.774V0H71.429V4.774H76.2v16.71h4.774V4.774h57.29v16.71h4.774V4.774Z'
                        transform='translate(-35.622)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1700'
                        data-name='Path 1700'
                        d='M104.8,61.9H90.476V76.227H104.8V61.9Zm-4.774,9.548H95.25V66.679h4.774Z'
                        transform='translate(-45.121 -30.873)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1701'
                        data-name='Path 1701'
                        d='M147.656,61.9H133.334V76.227h14.322Zm-4.774,9.548h-4.774V66.679h4.774Z'
                        transform='translate(-66.495 -30.873)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1702'
                        data-name='Path 1702'
                        d='M190.513,61.9H176.19V76.227h14.322V61.9Zm-4.774,9.548h-4.774V66.679h4.774Z'
                        transform='translate(-87.868 -30.873)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1703'
                        data-name='Path 1703'
                        d='M140.617,209.524h-54.9V214.3h4.774v38.193H143V214.3h4.774v-4.774h-7.161ZM95.263,214.3h19.1v9.549h-2.387a7.161,7.161,0,1,0,0,14.323h2.387v9.549h-19.1S95.263,214.3,95.263,214.3Zm19.1,19.1h-2.387a2.387,2.387,0,0,1,0-4.774h2.387Zm4.774-4.774h2.387a2.387,2.387,0,0,1,0,4.774h-2.387Zm19.1,19.1h-19.1v-9.549h2.387a7.161,7.161,0,1,0,0-14.323h-2.387V214.3h19.1Z'
                        transform='translate(-42.746 -104.492)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1704'
                        data-name='Path 1704'
                        d='M90.476,119.084H104.8V104.762H90.476Zm4.774-9.548h4.774v4.774H95.25Z'
                        transform='translate(-45.121 -52.246)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1705'
                        data-name='Path 1705'
                        d='M133.333,119.084h14.322V104.762H133.333Zm4.774-9.548h4.774v4.774h-4.774Z'
                        transform='translate(-66.494 -52.246)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1706'
                        data-name='Path 1706'
                        d='M176.19,119.084h14.322V104.762H176.19Zm4.774-9.548h4.774v4.774h-4.774Z'
                        transform='translate(-87.868 -52.246)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1707'
                        data-name='Path 1707'
                        d='M90.476,161.941H104.8V147.619H90.476Zm4.774-9.548h4.774v4.774H95.25Z'
                        transform='translate(-45.121 -73.619)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1708'
                        data-name='Path 1708'
                        d='M133.333,161.941h14.322V147.619H133.333Zm4.774-9.548h4.774v4.774h-4.774Z'
                        transform='translate(-66.494 -73.619)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <path
                        id='Path_1709'
                        data-name='Path 1709'
                        d='M176.19,161.941h14.322V147.619H176.19Zm4.774-9.548h4.774v4.774h-4.774Z'
                        transform='translate(-87.868 -73.619)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <rect
                        id='Rectangle_1165'
                        data-name='Rectangle 1165'
                        width='52.516'
                        height='4.774'
                        transform='translate(42.968 95.484)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                      <rect
                        id='Rectangle_1166'
                        data-name='Rectangle 1166'
                        width='4.774'
                        height='4.774'
                        transform='translate(100.258 95.484)'
                        fill='#fff'
                        stroke='#f2e6e6'
                        strokewidt='0.003'
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className='serviceTitel'>Hotel Rentals</div>
          </div>
        </a>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <svg
              className='servIcon'
              xmlns='http://www.w3.org/2000/svg'
              width='167.934'
              height='110.544'
              viewBox='0 0 167.934 110.544'
            >
              <g id='SVGRepo_iconCarrier' transform='translate(0 -87.486)'>
                <g
                  id='Group_1550'
                  data-name='Group 1550'
                  transform='translate(0 87.486)'
                >
                  <g id='Group_1549' data-name='Group 1549'>
                    <path
                      id='Path_1718'
                      data-name='Path 1718'
                      d='M165.154,87.486H131.9v5.56h16.448a17.071,17.071,0,0,0,14.021,14.021v32.459a17.07,17.07,0,0,0-14.021,14.021H46.813a17.07,17.07,0,0,0-14.021-14.021V107.068A17.071,17.071,0,0,0,46.813,93.046h78.314v-5.56H30.011a2.78,2.78,0,0,0-2.78,2.78v66.062a2.78,2.78,0,0,0,2.78,2.78h76.744v8.155H5.56V136.752a5.429,5.429,0,0,1,5.423-5.423h9.76v-5.56H10.983A11,11,0,0,0,0,136.753v50.295A11,11,0,0,0,10.983,198.03h90.35a11,11,0,0,0,10.983-10.983V159.109h52.839a2.78,2.78,0,0,0,2.78-2.78V90.266A2.78,2.78,0,0,0,165.154,87.486ZM32.791,93.046h8.349a11.51,11.51,0,0,1-8.349,8.349Zm0,60.5V145.2a11.51,11.51,0,0,1,8.349,8.349Zm73.964,24.465H27.471v5.56h79.284v3.473a5.428,5.428,0,0,1-5.422,5.423H10.983a5.429,5.429,0,0,1-5.423-5.423v-3.473H17.092v-5.56H5.56v-5.19H106.755Zm55.619-24.465h-8.349a11.51,11.51,0,0,1,8.349-8.349Zm0-52.153a11.51,11.51,0,0,1-8.349-8.349h8.349Z'
                      transform='translate(0 -87.486)'
                      fill='#fff'
                    />
                  </g>
                </g>
                <g
                  id='Group_1552'
                  data-name='Group 1552'
                  transform='translate(76.862 97.882)'
                >
                  <g id='Group_1551' data-name='Group 1551'>
                    <path
                      id='Path_1719'
                      data-name='Path 1719'
                      d='M255.058,119.181c-11.425,0-20.721,11.4-20.721,25.416s9.3,25.416,20.721,25.416,20.721-11.4,20.721-25.416S266.483,119.181,255.058,119.181Zm0,45.271c-8.36,0-15.161-8.907-15.161-19.856s6.8-19.856,15.161-19.856,15.161,8.907,15.161,19.856S263.418,164.452,255.058,164.452Z'
                      transform='translate(-234.337 -119.181)'
                      fill='#fff'
                    />
                  </g>
                </g>
                <g
                  id='Group_1554'
                  data-name='Group 1554'
                  transform='translate(124.145 116.996)'
                >
                  <g id='Group_1553' data-name='Group 1553'>
                    <path
                      id='Path_1720'
                      data-name='Path 1720'
                      d='M408.773,177.458h-27.5a2.78,2.78,0,0,0,0,5.56h27.5a2.78,2.78,0,0,0,0-5.56Z'
                      transform='translate(-378.495 -177.458)'
                      fill='#ffad1d'
                    />
                  </g>
                </g>
                <g
                  id='Group_1556'
                  data-name='Group 1556'
                  transform='translate(36.621 116.996)'
                >
                  <g id='Group_1555' data-name='Group 1555'>
                    <path
                      id='Path_1721'
                      data-name='Path 1721'
                      d='M141.928,177.458h-27.5a2.78,2.78,0,1,0,0,5.56h27.5a2.78,2.78,0,1,0,0-5.56Z'
                      transform='translate(-111.65 -177.458)'
                      fill='#ffad1d'
                    />
                  </g>
                </g>
                <g
                  id='Group_1558'
                  data-name='Group 1558'
                  transform='translate(136.553 126.47)'
                >
                  <g id='Group_1557' data-name='Group 1557'>
                    <path
                      id='Path_1722'
                      data-name='Path 1722'
                      d='M434.194,206.341H419.1a2.78,2.78,0,1,0,0,5.56h15.09a2.78,2.78,0,1,0,0-5.56Z'
                      transform='translate(-416.324 -206.341)'
                      fill='#ffad1d'
                    />
                  </g>
                </g>
                <g
                  id='Group_1560'
                  data-name='Group 1560'
                  transform='translate(36.621 126.47)'
                >
                  <g id='Group_1559' data-name='Group 1559'>
                    <path
                      id='Path_1723'
                      data-name='Path 1723'
                      d='M129.52,206.341H114.43a2.78,2.78,0,1,0,0,5.56h15.09a2.78,2.78,0,1,0,0-5.56Z'
                      transform='translate(-111.65 -206.341)'
                      fill='#ffad1d'
                    />
                  </g>
                </g>
                <g
                  id='Group_1562'
                  data-name='Group 1562'
                  transform='translate(86.752 105.176)'
                >
                  <g id='Group_1561' data-name='Group 1561'>
                    <path
                      id='Path_1724'
                      data-name='Path 1724'
                      d='M283.372,156.762h-13.32v-4.2h13.32a2.78,2.78,0,0,0,0-5.56H278.1v-2.8a2.78,2.78,0,1,0-5.56,0V147h-5.27a2.78,2.78,0,0,0-2.78,2.78v9.762a2.78,2.78,0,0,0,2.78,2.78h13.32v4.2h-13.32a2.78,2.78,0,1,0,0,5.56h5.27v2.8a2.78,2.78,0,0,0,5.56,0v-2.8h5.27a2.78,2.78,0,0,0,2.78-2.78v-9.762A2.78,2.78,0,0,0,283.372,156.762Z'
                      transform='translate(-264.492 -141.421)'
                      fill='#f9ba48'
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className='serviceTitel'>Payment After Receipt</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <svg
              className='servIcon'
              xmlns='http://www.w3.org/2000/svg'
              width='147.609'
              height='137.06'
              viewBox='0 0 147.609 137.06'
            >
              <g id='Driving-Licence' transform='translate(-0.03 -0.002)'>
                <path
                  id='Path_1725'
                  data-name='Path 1725'
                  d='M82.35,92.91a51.98,51.98,0,0,1,10.4,7.294,6.6,6.6,0,0,1,1.966-1.776A14.43,14.43,0,0,1,101.061,97a16.462,16.462,0,0,1,6.028,1.143c-1.207-12.686-6.028-21.376-14.559-26.514A98.977,98.977,0,0,1,82.35,92.91Z'
                  transform='translate(27.854 -0.691)'
                  fill='#fff'
                />
                <path
                  id='Path_1726'
                  data-name='Path 1726'
                  d='M136,73.085A85.787,85.787,0,0,1,125.466,94.27a51.311,51.311,0,0,0-9.514-.951,50.742,50.742,0,0,0-32.919,12.146V95.443s-13.415-2.505-26.893-4.25a16.3,16.3,0,0,0,2.854-4.662H87.41a5.9,5.9,0,0,0,5.9-5.9V68.74C102.6,69.343,128.638,71.753,136,73.085Z'
                  transform='translate(-29.058 -6.966)'
                  fill='#fff'
                />
                <path
                  id='Path_1727'
                  data-name='Path 1727'
                  d='M97.114,106.974A29.145,29.145,0,1,0,76.38,98.663a28.86,28.86,0,0,0,20.734,8.311Z'
                  transform='translate(-4.131 -49.26)'
                  fill='#fff'
                />
                <path
                  id='Path_1728'
                  data-name='Path 1728'
                  d='M105.3,78.38a45,45,0,0,0-44.4,38.342l9.514,1.459A35.3,35.3,0,0,1,132,100.072a17.443,17.443,0,0,1,6.089-7.484A44.812,44.812,0,0,0,105.3,78.38Z'
                  transform='translate(-18.722 13.966)'
                  fill='#ffad1d'
                />
                <path
                  id='Path_1729'
                  data-name='Path 1729'
                  d='M107.7,89.725c-4.408-6.787-8.943-8.214-11.988-8.214a8.087,8.087,0,0,0-3.584.761c3.171,1.744.825,5.962-2.188,8.055-3.869,2.632-8.309,7.453-1.744,18.045,3.552,5.8,7.548,7.928,11.544,7.928a19.758,19.758,0,0,0,11.163-4.694C114.867,108.817,117.246,104.377,107.7,89.725Z'
                  transform='translate(33.266 20.761)'
                  fill='#fff'
                />
                <path
                  id='Path_1730'
                  data-name='Path 1730'
                  d='M69.316,94.879H96.654a2.823,2.823,0,0,0,2.823-2.823V66.083a2.823,2.823,0,0,0-2.823-2.823H54.411a2.823,2.823,0,0,0-2.791,2.823V69.6a14.716,14.716,0,0,1,3.171.444l.729.222V67.1H95.544V90.978H69.665a25.717,25.717,0,0,1-.349,3.9Z'
                  transform='translate(-38.873 -18.865)'
                  fill='#ffad1d'
                />
                <path
                  id='Path_1731'
                  data-name='Path 1731'
                  d='M69.677,70.484a4.694,4.694,0,1,0-4.694,4.694,4.694,4.694,0,0,0,4.694-4.694Z'
                  transform='translate(-20.047 -13.372)'
                  fill='#fff'
                />
                <path
                  id='Path_1732'
                  data-name='Path 1732'
                  d='M66.851,69.1c-4.091,0-7.421,2-7.421,5.455H74.272C74.272,71.1,70.942,69.1,66.851,69.1Z'
                  transform='translate(-21.914 -6.185)'
                  fill='#fff'
                />
                <path
                  id='Path_1733'
                  data-name='Path 1733'
                  d='M54.46,66.691a21.281,21.281,0,0,1,3.171,2.791H68.256V66.12H54.46Z'
                  transform='translate(-32.706 -12.655)'
                  fill='#fff'
                />
                <path
                  id='Path_1734'
                  data-name='Path 1734'
                  d='M64.339,68.25H56.22a24.039,24.039,0,0,1,1.744,3.362h6.343Z'
                  transform='translate(-28.884 -8.03)'
                  fill='#fff'
                />
                <path
                  id='Path_1735'
                  data-name='Path 1735'
                  d='M59.6,98.663A14.906,14.906,0,0,0,73.9,83.821,17.6,17.6,0,0,0,62.389,66.95a19.314,19.314,0,0,0-6.343,0c-8.246,1.713-8.277,7.262-8.436,15.857,0,5.645,0,10.529,2.41,13.447S54.333,99.076,59.6,98.663Z'
                  transform='translate(-47.58 -11.423)'
                  fill='#fff'
                />
              </g>
            </svg>
          </div>
          <div className='serviceTitel'>Car With Driver</div>
        </div>
        {/* //////////// */}
        <div className='serviceContent'>
          <div className='service'>
            <svg
              className='servIcon'
              id='Component_4_1'
              data-name='Component 4 – 1'
              xmlns='http://www.w3.org/2000/svg'
              width='172'
              height='172.2'
              viewBox='0 0 172 172.2'
            >
              <g id='SVGRepo_iconCarrier' transform='translate(100)'>
                <path
                  id='Path_1737'
                  data-name='Path 1737'
                  d='M52.74,4.05a36.621,36.621,0,0,0-33.48,0h0a36.091,36.091,0,0,0,.09,63.9A36.691,36.691,0,0,0,36,72,36.049,36.049,0,0,0,52.74,4.05ZM3.6,36A32.51,32.51,0,0,1,19.35,8.19h0A31.907,31.907,0,0,1,35.1,3.6L31.05,33.03l-11.7,9.09h0L7.47,51.39A32.787,32.787,0,0,1,3.6,36ZM52.74,63.72a32.279,32.279,0,0,1-33.48,0A31.549,31.549,0,0,1,8.55,53.19l10.71-4.41h0L36,41.94l16.74,6.75h0l10.8,4.41A32.063,32.063,0,0,1,52.74,63.72Zm0-21.6h0l-11.61-9L36.99,3.6A32.129,32.129,0,0,1,52.65,8.19h0A32.4,32.4,0,0,1,68.4,36a31.755,31.755,0,0,1-3.87,15.39Z'
                  transform='translate(0 0)'
                  fill='#fff'
                />
              </g>
              <g
                id='SVGRepo_iconCarrier-2'
                data-name='SVGRepo_iconCarrier'
                transform='translate(37.873 15.8)'
              >
                <g
                  id='Group_1572'
                  data-name='Group 1572'
                  transform='translate(3 94.2)'
                >
                  <path
                    id='Path_1738'
                    data-name='Path 1738'
                    d='M173.058,110.921a31.1,31.1,0,0,0-55.158,0Z'
                    transform='translate(-100.972 -94.2)'
                    fill='#ffad1d'
                  />
                  <path
                    id='Path_1739'
                    data-name='Path 1739'
                    d='M117.7,402.6a31.115,31.115,0,0,0,55.217,0Z'
                    transform='translate(-100.802 -357.165)'
                    fill='#ffad1d'
                  />
                  <g
                    id='Group_1571'
                    data-name='Group 1571'
                    transform='translate(0 19.403)'
                  >
                    <path
                      id='Path_1740'
                      data-name='Path 1740'
                      d='M418.739,279.813a2.225,2.225,0,0,0-.177-.412,2.957,2.957,0,0,0-.177.412l-1.444,3.86a.285.285,0,0,0,.295.413h2.652a.288.288,0,0,0,.295-.413Z'
                      transform='translate(-355.935 -271.518)'
                      fill='#fff'
                    />
                    <path
                      id='Path_1741'
                      data-name='Path 1741'
                      d='M89.774,225.9H5.681A2.691,2.691,0,0,0,3,228.581v18.327a2.691,2.691,0,0,0,2.681,2.681H89.774a2.691,2.691,0,0,0,2.681-2.681V228.581A2.691,2.691,0,0,0,89.774,225.9Zm-67.312,18a.443.443,0,0,1-.442.442h-4.95a.738.738,0,0,1-.633-.413l-4.317-9.3a3.7,3.7,0,0,0-.192-.383c0,.015-.015.221-.015.471l-.059,9.178a.447.447,0,0,1-.457.442H9.026a.443.443,0,0,1-.442-.442V231.336a.443.443,0,0,1,.442-.442h5.3a.725.725,0,0,1,.619.412l3.875,9.267c.088.221.177.206.177-.029v-9.193a.443.443,0,0,1,.442-.442H22a.443.443,0,0,1,.442.442V243.9Zm6.468,0a.443.443,0,0,1-.442.442H25.924a.443.443,0,0,1-.442-.442V231.336a.443.443,0,0,1,.442-.442h2.563a.443.443,0,0,1,.442.442Zm15.1-3.9c0,1.8-1.326,3.83-3.035,4.169h-9.06v-2.961l7.322-.1c.913-.015.972-.545.958-.913a.988.988,0,0,0-1.075-1.164H35.072c-2.446,0-3.757-1.532-3.757-4.155,0-3.683,2.107-4.11,5.5-4.11s5.967-.044,5.967-.044l-.044,3.05c-2.446,0-4.567.015-5.922.015-1.871,0-1.856.059-1.856,1.164,0,.987.147.987,1.679.987l4.376.044C44.133,235.992,44.03,240,44.03,240Zm13.922,0c0,1.8-1.326,3.83-3.035,4.169H45.871v-2.961l7.322-.1c.913-.015.972-.545.958-.913a.988.988,0,0,0-1.075-1.164H49.009c-2.446,0-3.757-1.532-3.757-4.155,0-3.683,2.107-4.11,5.5-4.11s5.967-.044,5.967-.044l-.044,3.05c-2.446,0-4.567.015-5.922.015-1.871,0-1.856.059-1.856,1.164,0,.987.147.987,1.679.987l4.376.044C58.055,235.992,57.952,240,57.952,240Zm14.777,4.037H70.106a.8.8,0,0,1-.648-.4l-.737-1.517a.776.776,0,0,0-.648-.4H63.211a.776.776,0,0,0-.648.4l-.781,1.517a.8.8,0,0,1-.648.4h-2.7a.288.288,0,0,1-.295-.413L62.8,231a.677.677,0,0,1,.6-.413h4.361a.7.7,0,0,1,.6.413l4.67,12.626A.3.3,0,0,1,72.728,244.036ZM88.4,243.9a.443.443,0,0,1-.442.442h-4.95a.738.738,0,0,1-.633-.413l-4.317-9.3a3.7,3.7,0,0,0-.192-.383c0,.015-.015.221-.015.471L77.8,243.9a.447.447,0,0,1-.457.442H74.953a.443.443,0,0,1-.442-.442V231.336a.443.443,0,0,1,.442-.442h5.3a.725.725,0,0,1,.619.412l3.875,9.267c.088.221.177.206.177-.029v-9.193a.443.443,0,0,1,.442-.442h2.578a.443.443,0,0,1,.442.442V243.9Z'
                      transform='translate(-3 -225.9)'
                      fill='#fff'
                    />
                  </g>
                </g>
              </g>
              <g
                id='SVGRepo_iconCarrier-3'
                data-name='SVGRepo_iconCarrier'
                transform='translate(-0.2 23.7)'
              >
                <path
                  id='Path_1742'
                  data-name='Path 1742'
                  d='M50,23.3C22.5,23.3.2,34.4.2,48.1S22.5,72.9,50,72.9,99.8,61.8,99.8,48.1,77.5,23.3,50,23.3Zm0,47.5C23.7,70.8,2.5,60.7,2.5,48.1S23.7,25.4,50,25.4,97.5,35.6,97.5,48.1,76.3,70.8,50,70.8Z'
                  fill='#ffad1d'
                />
                <path
                  id='Path_1743'
                  data-name='Path 1743'
                  d='M50,26.3c-25.8,0-46.7,9.8-46.7,21.8S24.2,69.9,50,69.9s46.7-9.8,46.7-21.8S75.8,26.3,50,26.3ZM69.8,43.1,74.6,41H70.4l1.1-3.1h8.1l-1,3.1-9.1,3.1Zm-6.6-10a7.639,7.639,0,0,1,3.3.8,3.774,3.774,0,0,1,1.7,2.7,9.491,9.491,0,0,1-.7,4.4,8.722,8.722,0,0,1-2.8,3.5,6.364,6.364,0,0,1-3.8,1.2H55.1L59,34.3A2.845,2.845,0,0,0,59,33l4.2.1ZM46.6,34.4a1.483,1.483,0,0,0,0-1.3h3.8l1.1,5.7,2-5.7h3.6L52.5,45.7H49l-1-5.5-2.2,5.5H42.6Zm-9.3-1.3h3.9l.7,12.6H38.3l-.2-1.6H34.5l-1.2,1.6H29.7l7.4-11.4A1.637,1.637,0,0,0,37.3,33.1ZM25.1,34.4a2.854,2.854,0,0,0,0-1.3h4.3l-3.3,9.8h3.7l-1.2,2.9H21.1Zm-.5,18.3-1.2,3.1H15.2l1.2-3.1,9.1-3.1-.4,1-4.8,2,4.3.1Zm13.4.6a4,4,0,0,1-1.5,1.9,4.306,4.306,0,0,1-2.2.9l2.5,4.7H33.1l-2.4-4.5-1.6,4.5H25.4l4.1-11.4a1.483,1.483,0,0,0,0-1.3h5.1a5.325,5.325,0,0,1,2.4.6,2.545,2.545,0,0,1,1.2,1.1A4.243,4.243,0,0,1,38,53.3Zm11.1,4.8a8.855,8.855,0,0,1-3,2.4,6.966,6.966,0,0,1-3.5.5A4.735,4.735,0,0,1,39,57.4a6.988,6.988,0,0,1,.1-3.8,8.554,8.554,0,0,1,5.1-5.4,5.245,5.245,0,0,1,4.4.6,4.425,4.425,0,0,1,1.9,2.9,7.1,7.1,0,0,1-1.4,6.4Zm3,2.8-.2-11.4a3.079,3.079,0,0,0-.3-1.3h3.9V55l4.6-6.8h4.2L54.9,61l-2.8-.1Zm16.6,0h-8l3.9-11.1a2.208,2.208,0,0,0,0-1.6h8.5L72.2,51H68l-.7,2.2h3.2l-1,2.8H66.4a14.161,14.161,0,0,0-.7,2.2h4.2ZM83,53.3a3.581,3.581,0,0,1-1.5,1.9,4.306,4.306,0,0,1-2.2.9l2.5,4.7H78.1l-2.4-4.5-1.6,4.5H70.4l4.1-11.4a1.483,1.483,0,0,0,0-1.3h5.1a4.645,4.645,0,0,1,2.3.6,2.544,2.544,0,0,1,1.2,1.1,4.7,4.7,0,0,1-.1,3.5Z'
                  fill='#fff'
                />
                <path
                  id='Path_1744'
                  data-name='Path 1744'
                  d='M61.5,42.6a3.592,3.592,0,0,0,1-.7,4.185,4.185,0,0,0,1.1-1.8c.5-1.3,1.2-3.8-.4-3.8h-.9L60,42.8h.9A1.421,1.421,0,0,0,61.5,42.6Z'
                  fill='#fff'
                />
                <path
                  id='Path_1745'
                  data-name='Path 1745'
                  d='M78.4,51.3h-.8l-.7,2.1h1C79.2,53.4,80.5,51.3,78.4,51.3Z'
                  fill='#fff'
                />
                <path
                  id='Path_1746'
                  data-name='Path 1746'
                  d='M33.4,51.3h-.8l-.7,2.1h1C34.4,53.4,35.5,51.3,33.4,51.3Z'
                  fill='#fff'
                />
                <path
                  id='Path_1747'
                  data-name='Path 1747'
                  d='M38.1,41.3l-.2-2.7-1.6,2.7Z'
                  fill='#fff'
                />
                <path
                  id='Path_1748'
                  data-name='Path 1748'
                  d='M44.1,51.9a5.767,5.767,0,0,0-1.4,3.3,4.421,4.421,0,0,0,.2,2,1.351,1.351,0,0,0,1.9.6,1,1,0,0,0,.5-.4,5.834,5.834,0,0,0,1.5-4.9,1.411,1.411,0,0,0-1.7-1.2A1.44,1.44,0,0,0,44.1,51.9Z'
                  fill='#fff'
                />
              </g>
            </svg>
          </div>
          <div className='serviceTitel'>All Brands Of Cars</div>
        </div>
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
          onClick={() => setPage((cur) => cur - 1)}
        >
          <span className='arr'>&larr;</span>prev
        </div>
        <div
          role='button'
          className='next'
          style={{ display: settings.carsCount < page * 12 && 'none' }}
          onClick={() => setPage((cur) => cur + 1)}
        >
          next<span className='arr'>&rarr;</span>
        </div>
      </div>

      <CarFooter />
    </div>
  );
};

export default Home;
