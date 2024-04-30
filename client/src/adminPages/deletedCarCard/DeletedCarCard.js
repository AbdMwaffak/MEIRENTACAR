import React from 'react';
import './deletedCarCard.css'
import c1 from '../../imge/c1.jpg'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link , useNavigate} from 'react-router-dom';
import Api from '../../extensions/API';

const DeletedCarCard = (props) => {

    const navigate = useNavigate()
    function handleClick(){
      navigate(`/admin/car/${props.name}`,
      {
        state: {
         id : props.id
        }  } 
    )  }

    function handelEdit(){  
        navigate(`/admin/EditeCar/${props.name}`,
        {
          state: {
           id : props.id
          }  } )
    }


    return (
        <div className='carCard'>
            <div className='carImge' onClick={handleClick}>
                    {/* <Link to={`/CarProfile/${props.id}`} > */}
                    <img className='ccc1' src={`/cars/${props.images}`} />
                {/* </Link> */}
            </div>
            <div className='carInfo'>
                <div className='price'>
                <div className='PartialPrice1'>
                        <div className='textPrice'> Day </div>
                        <div className='textPrice'> {props.price} <span style={{fontSize:"10px"}}>AED</span></div>
                    </div>
                    {/* ///////// */}
                    <div className='PartialPrice2'>
                        <div className='textPrice'> Week </div>
                        <div className='textPrice'> {props.WeeklyPrice}<span style={{fontSize:"10px"}}>AED</span> </div>
                    </div>
                    {/* //////// */}
                    <div className='PartialPrice3'>
                        <div className='textPrice'> Month </div>
                        <div className='textPrice'> {props.MonthlyPrice}<span style={{fontSize:"10px"}}>AED</span> </div>
                    </div>
                    {/* //////// */}
                </div>
                <div className='carName'>
                    {props.name}
                </div>
                <div className='carIcons'>
                    <div className='iconContect' >
                        <div className='icon'>
                            <svg className='site' xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none" class="">
                                <path d="M5.86355 0C5.18864 0 4.6416 0.547041 4.6416 1.22195V4.0391C4.6416 4.71401 5.1886 5.26105 5.86355 5.26105H7.0855C7.76041 5.26105 8.30745 4.71406 8.30745 4.0391V1.22195C8.3074 0.547041 7.76041 0 7.0855 0H5.86355Z" fill="white"></path>
                                <path d="M15.6136 0C14.9386 0 14.3916 0.547041 14.3916 1.22195V4.0391C14.3916 4.71401 14.9386 5.26105 15.6136 5.26105H16.8355C17.5104 5.26105 18.0575 4.71406 18.0575 4.0391V1.22195C18.0574 0.547041 17.5103 0 16.8355 0H15.6136Z" fill="white"></path>
                                <path d="M22.7501 4.32617C22.7501 3.77389 22.3024 3.32617 21.7501 3.32617H18.8721V4.03895C18.8721 5.16191 17.9585 6.07547 16.8355 6.07547H15.6136C14.4906 6.07547 13.5771 5.16186 13.5771 4.03895V3.32617H9.12211V4.03895C9.12211 5.16191 8.20851 6.07547 7.08559 6.07547H5.86364C4.74068 6.07547 3.82711 5.16186 3.82711 4.03895V3.32617H1C0.447716 3.32617 0 3.77389 0 4.32617V21.8417C0 22.3854 0.440712 22.8261 0.984358 22.8261C1.528 22.8261 1.96872 23.2668 1.96872 23.8104V25.076C1.96872 25.6283 2.41643 26.076 2.96872 26.076H24.375H25C25.5523 26.076 26 25.6283 26 25.076V24.4511V7.32289V6.33727C26 5.78498 25.5523 5.33727 25 5.33727H22.7501V4.32617ZM2.76507 21.0187C2.21279 21.0187 1.76507 20.571 1.76507 20.0187V9.3921C1.76507 8.83981 2.21279 8.3921 2.76507 8.3921H19.8832C20.4355 8.3921 20.8832 8.83982 20.8832 9.3921V20.0187C20.8832 20.571 20.4355 21.0187 19.8832 21.0187H2.76507ZM23.1671 7.32289C23.7194 7.32289 24.1671 7.77061 24.1671 8.32289V23.2431C24.1671 23.7954 23.7194 24.2431 23.1671 24.2431H4.95434C4.40206 24.2431 3.95434 23.7954 3.95434 23.2431V22.8261H21.7501C22.3024 22.8261 22.7501 22.3784 22.7501 21.8261V7.32289H23.1671Z" fill="white"></path>
                                <path d="M7.25948 10.0303H5.22722C4.77733 10.0303 4.4126 10.395 4.4126 10.8449V12.8771C4.4126 13.327 4.77733 13.6918 5.22722 13.6918H7.25948C7.70937 13.6918 8.0741 13.327 8.0741 12.8771V10.8449C8.0741 10.395 7.70937 10.0303 7.25948 10.0303Z" fill="white"></path>
                                <path d="M12.5713 10.0303H10.539C10.0891 10.0303 9.72437 10.395 9.72437 10.8449V12.8771C9.72437 13.327 10.0891 13.6918 10.539 13.6918H12.5713C13.0211 13.6918 13.3859 13.327 13.3859 12.8771V10.8449C13.3859 10.395 13.0213 10.0303 12.5713 10.0303Z" fill="white"></path>
                                <path d="M17.8495 10.0303H15.8173C15.3674 10.0303 15.0027 10.395 15.0027 10.8449V12.8771C15.0027 13.327 15.3674 13.6918 15.8173 13.6918H17.8495C18.2994 13.6918 18.6641 13.327 18.6641 12.8771V10.8449C18.6641 10.395 18.2995 10.0303 17.8495 10.0303Z" fill="white"></path>
                                <path d="M17.8495 15.3242H15.8173C15.3674 15.3242 15.0027 15.6889 15.0027 16.1388V18.1711C15.0027 18.621 15.3674 18.9858 15.8173 18.9858H17.8495C18.2994 18.9858 18.6641 18.621 18.6641 18.1711V16.1388C18.6641 15.689 18.2995 15.3242 17.8495 15.3242Z" fill="white"></path>
                                <path d="M12.5713 15.3242H10.539C10.0891 15.3242 9.72437 15.6889 9.72437 16.1388V18.1711C9.72437 18.621 10.0891 18.9858 10.539 18.9858H12.5713C13.0211 18.9858 13.3859 18.621 13.3859 18.1711V16.1388C13.3859 15.689 13.0213 15.3242 12.5713 15.3242Z" fill="white"></path>
                                <path d="M7.25948 15.3242H5.22722C4.77733 15.3242 4.4126 15.6889 4.4126 16.1388V18.1711C4.4126 18.621 4.77733 18.9858 5.22722 18.9858H7.25948C7.70937 18.9858 8.0741 18.621 8.0741 18.1711V16.1388C8.0741 15.689 7.70937 15.3242 7.25948 15.3242Z" fill="white"></path>
                            </svg>
                        </div>
                        <div className='iconText'> {props.model} </div>

                    </div>
                    <div className='iconContect' >
                        <div className='icon'>
                            <svg className='site' xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
                                <path d="M13 0C5.46739 0 0 4.55609 0 10.8333C0 14.0527 1.37519 17.7577 3.67841 20.7441C6.29318 24.1334 9.60227 26 13 26C16.3977 26 19.7076 24.1334 22.3216 20.7441C24.6248 17.7577 26 14.0527 26 10.8333C26 4.55609 20.5326 0 13 0V0ZM21.2727 18.4167H18.9091V14.0833H16.5455V18.4167H14.1818V14.0833H11.8182V18.4167H9.45455V14.0833H5.90909C5.59565 14.0833 5.29505 13.9692 5.07342 13.766C4.85179 13.5629 4.72727 13.2873 4.72727 13V7.58333H7.09091V11.9167H9.45455V7.58333H11.8182V11.9167H14.1818V7.58333H16.5455V11.9167H18.9091V7.58333H21.2727V18.4167Z" fill="white"></path>
                            </svg>
                        </div>
                        <div className='iconText'>  {props.gear}  </div>

                    </div>
                    <div className='iconContect' >
                        <div className='icon'>
                            <svg className='site' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" class="">
                                <path d="M16.4344 11.0087L15.0516 9.875C14.7259 10.8598 13.7974 11.5725 12.7049 11.5725C12.3914 11.5725 12.0917 11.5132 11.8154 11.4063V14.9073C12.6995 14.5676 13.7408 14.753 14.4526 15.4647C14.7334 15.7455 14.9318 16.0779 15.0489 16.4315L16.4286 15.3014C16.2425 15.195 16.0672 15.063 15.9086 14.9043C14.945 13.9407 14.945 12.3727 15.9086 11.4091C16.0688 11.2487 16.2462 11.1157 16.4344 11.0087Z" fill="white"></path>
                                <path d="M12.7048 16.3232C12.477 16.3232 12.2491 16.4099 12.0758 16.5834C11.729 16.9302 11.729 17.4944 12.0758 17.8413C12.4226 18.1881 12.987 18.1881 13.3337 17.8413C13.6805 17.4945 13.6805 16.9302 13.3336 16.5834C13.1603 16.4099 12.9325 16.3232 12.7048 16.3232Z" fill="white"></path>
                                <path d="M12.7047 9.99086C13.1959 9.99086 13.5941 9.59263 13.5941 9.10139C13.5941 8.61014 13.1959 8.21191 12.7047 8.21191C12.2134 8.21191 11.8152 8.61014 11.8152 9.10139C11.8152 9.59263 12.2134 9.99086 12.7047 9.99086Z" fill="white"></path>
                                <path d="M17.6561 12.2676C17.4284 12.2676 17.2006 12.3543 17.0272 12.5277C16.6804 12.8745 16.6804 13.4388 17.0272 13.7856C17.3248 14.0832 17.7823 14.1246 18.1254 13.9114L18.3026 13.7662C18.6309 13.418 18.6256 12.8683 18.285 12.5277C18.1117 12.3542 17.8839 12.2676 17.6561 12.2676Z" fill="white"></path>
                                <path d="M0.618918 19.2663C-0.0373608 19.9225 -0.0373608 20.9866 0.618918 21.6428C1.2752 22.2991 2.33922 22.2991 2.9955 21.6428L4.17517 20.4632C3.52295 21.1198 3.52416 22.1807 4.17907 22.8356C4.69355 23.3501 5.45851 23.4611 6.08125 23.169V18.8484L3.55902 16.3262L0.618918 19.2663Z" fill="white"></path>
                                <path d="M19.3363 1.68049C19.3363 0.752361 18.5839 0 17.6558 0H9.34357C8.41545 0 7.66309 0.752361 7.66309 1.68049V2.56996H19.3363V1.68049Z" fill="white"></path>
                                <path d="M24.3924 8.70675L26.1424 6.9567L25.0238 5.83805L23.2737 7.58809L21.4351 5.7494L19.3893 7.84122H19.3366V4.15234H7.66332V7.84122H7.61058L5.58416 5.7301L3.54745 7.76681L1.79741 6.01682L0.678754 7.13547L2.4288 8.88552L0.39209 10.9222L7.66332 18.1935V22.0813H19.3366V18.1934L26.6079 10.9222L24.3924 8.70675ZM19.4037 14.9047C19.298 15.0104 14.4144 18.9965 14.4144 18.9965C13.9375 19.4537 13.3214 19.6831 12.7049 19.6831C12.072 19.6831 11.439 19.4422 10.9572 18.9604C10.4754 18.4785 10.2345 17.8457 10.2345 17.2127H10.2333V9.10136C10.2333 7.73854 11.342 6.62986 12.7048 6.62986C13.3099 6.62986 13.8645 6.84876 14.2946 7.21099L14.2955 7.20988C14.2955 7.20988 19.3171 11.3228 19.4037 11.4094C20.3673 12.3731 20.3673 13.941 19.4037 14.9047Z" fill="white"></path>
                                <path d="M7.66357 25.3196C7.66357 26.2477 8.41599 27.0001 9.34406 27.0001H17.6563C18.5844 27.0001 19.3368 26.2477 19.3368 25.3196V23.6631H7.66357V25.3196Z" fill="white"></path>
                                <path d="M26.3808 19.2663L23.4407 16.3262L20.9185 18.8484V23.169C21.5412 23.4612 22.3062 23.3501 22.8206 22.8357C23.4756 22.1808 23.4768 21.1198 22.8245 20.4632L24.0042 21.6429C24.6605 22.2992 25.7245 22.2992 26.3808 21.6429C27.0371 20.9866 27.0371 19.9226 26.3808 19.2663Z" fill="white"></path>
                            </svg>
                        </div>
                        <div className='iconText'> {props.category} </div>

                    </div>
                    <div className='iconContect' >
                        <div className='icon'>
                            <svg className='site' xmlns="http://www.w3.org/2000/svg" width="55.27" height="60" viewBox="0 0 55.27 60">
                                <g id="noun-car-seat-5949161" transform="translate(-13 -2)">
                                    <g id="Group_1636" data-name="Group 1636" transform="translate(13 2)">
                                        <path id="Path_2260" data-name="Path 2260" d="M68.27,54v3c0,2.8-3.2,5-7.272,5H20.272C16.2,62,13,59.8,13,57V54c0-1.7,1.891-3,4.363-3h1.309a5.4,5.4,0,0,1,3.636,1.3l1.6,1.7H57.216l1.6-1.7A5.4,5.4,0,0,1,62.452,51h1.454C66.379,51,68.27,52.3,68.27,54ZM25.509,48a18.514,18.514,0,0,1-6.691-1.2l-3.491,2.4a12.137,12.137,0,0,1,1.891-.2h1.309a8.554,8.554,0,0,1,5.091,1.5L26.09,48Zm26.035,0H29.727L25.8,52H55.325Zm10.618-1.4A17.625,17.625,0,0,1,55.18,48h-.145l2.473,2.5A8.554,8.554,0,0,1,62.6,49h1.309a10.494,10.494,0,0,1,1.891.2ZM30.454,46H50.816V28H30.454Zm16-34v2h4.363V26H30.454V14h4.363V12H32.054c-1.6,0-2.909-.9-2.909-2V9.8l1.164-6c.145-1,1.454-1.8,2.909-1.8H48.053c1.454,0,2.764.8,2.909,1.8l1.164,6c.145,1.1-.873,2.1-2.473,2.2h-3.2Zm-2.909,0H37.726v2h5.818Zm-16,2h-.727c-3.636,0-6.691,1.9-7.272,4.4L15.327,38.2C14.6,42,18.527,45.5,24.2,46c.436,0,.873.1,1.309.1h2.036ZM65.216,38.1,61.58,18.4c-.436-2.5-3.491-4.4-7.272-4.4h-.582V46H55.18c5.672,0,10.181-3.1,10.181-7A1.956,1.956,0,0,0,65.216,38.1Z" transform="translate(-13 -2)" fill="#fff" />
                                    </g>
                                </g>
                            </svg>



                        </div>
                        <div className='iconText'> {props.seats} </div>

                    </div>

                </div>
            </div>
            <div className='caedButtens'>
                {/* <div className='dash'> </div> */}
                 {/* <Link to={`EditeCar/${props.id}`} className='editLink'> */}
                 <button className='eButten'
                    onClick={handelEdit}
                    >  Edit </button>
                {/* </Link> */}

               
                {/* <Button className='eButten' onClick={() => window.location.pathname = `/EditeCar/${props.id}`}>  Edit </Button> */}
                <button className='dButten' onClick={() => { props.handleUnDelete(props.id) }}>  Un Delete </button>

            </div>

        </div>
    );
}

export default DeletedCarCard;
