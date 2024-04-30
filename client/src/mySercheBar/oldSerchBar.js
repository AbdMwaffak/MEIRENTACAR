import React, { useEffect, useState } from 'react';
import './mySercheBar.css'
import 'car-makes-icons/dist/style.css';
import Brands from '../extensions/Brands';
import Colors from '../extensions/Colors';
import { useDispatch } from 'react-redux';
import { getSearchCars } from '../RTK/searchCarsSlice';



const MySercheBar = () => {
    const [arrw, setArrw] = useState(false)
    const [s1, setS1] = useState(false)
    const [s2, setS2] = useState(false)
    const [s3, setS3] = useState(false)
    const [brand, setBrand] = useState("all")
    const [color, setColor] = useState("all")
    const [price, setPrice] = useState("all")
    const [seats, setSeats] = useState("4")
    const [serchekey, setSrcheKey] = useState("noResults")




    const closeSelecter1 = () => {
        setS1(!s1)
        setS2(false)
        setS3(false)
    }
    const closeSelecter2 = () => {
        setS1(false)
        setS2(!s2)
        setS3(false)
    }
    const closeSelecter3 = () => {
        setS1(false)
        setS2(false)
        setS3(!s3)
    }
    const closeSelecter4 = () => {
        setS1(false)
        setS2(false)
        setS3(false)
    }
    const option = {
        brand: brand,
        color: color,
        price: price,
        seats: seats,
        serchekey: serchekey

    }




    return (

        <div className='mySercheBar'
        // onClick={() => window.scrollTo(0, 200)}
        >


            <div className='sercheout'>

                {/* <Serche /> */}
                <div className='sercheIn'>
                    <button className='start'
                        onClick={() => window.location.pathname = `/serche/${serchekey}  `}>
                        {/* onClick={() => window.location.pathname = `/serche/${serchekey}/${color}/${brand}/${price}/${seats}   `}> */}

                        <svg className='searchIcon' fill="#000000" viewBox="0 -8 72 72" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"><title>search</title>
                                <path d="M58.73,44.35l-11-11a21.26,21.26,0,0,1-6.37,6.37l11,11a4.51,4.51,0,0,0,6.38-6.38Z"></path>
                                <path d="M48,22A18,18,0,1,0,30,40,18,18,0,0,0,48,22ZM30,35.52A13.53,13.53,0,1,1,43.52,22,13.55,13.55,0,0,1,30,35.52Z">
                                </path><path d="M19.47,22h3A7.52,7.52,0,0,1,30,14.47v-3A10.53,10.53,0,0,0,19.47,22Z"></path>
                            </g></svg>
                    </button>
                    <input className='sercheInput' onChange={(e) => setSrcheKey(e.target.value)}></input>
                    {/* ///// */}
                    <button className='filter' onClick={() => setArrw(!arrw)} >    filter
                        <svg className={arrw ? "arrwUp" : "arrwDown"} id="chevron-down-Filled" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <rect id="Path" width="24" height="24" fill="rgba(255,255,255,0)" />
                            <path id="chevron-down-Filled_1_" d="M944.707,2705.707l-9,9a1,1,0,0,1-1.414,0l-9-9a1,1,0,0,1,1.414-1.414l8.293,8.293,8.293-8.293a1,1,0,1,1,1.414,1.414Z" transform="translate(-923 -2697)" fill="#fff" stroke="#fff" strokeWidth="3" />
                        </svg>
                    </button>
                </div>
                {/* /////////////// */}
                <div className={arrw ? "filterBackgeDown" : "filterBackgeUp"} >

                    <div className='colors' style={{ display: arrw ? "flex" : "none" }}>
                        <div className='filterName'> color </div>
                        <button className='selcter' onClick={() => closeSelecter1()} >
                            <div className='selectColor'
                                style={{ backgroundColor: color == "all" ? "white" : color, color: color == "Black" ? "white" : "black" }}
                            // style={{ color: color == "black" ? "white" : "black" }}
                            >  {color}   </div>
                            <div className='colorsCategory' style={{ display: s1 ? "flex" : "none" }}>
                                <div className='colll ' onClick={() => setColor("all")}> All </div>

                                {Colors?.map((color, index) => (
                                    <div className='colll'
                                        key={index}
                                        onClick={() => setColor(color)}
                                        style={{ backgroundColor: color }}
                                    >
                                        {/* {color}  */}
                                    </div>
                                ))}


                            </div>
                        </button>
                    </div>
                    {/* /////////// */}
                    <div className='brands' style={{ display: arrw ? "flex" : "none" }}>
                        <div className='filterName'> brand </div>
                        <button className='selcter' onClick={() => closeSelecter2()}>
                            <div className='selectBrand'  > {brand} </div>
                            <div className='brandCategory' style={{ display: s2 ? "flex" : "none" }}>

                                <div className='brandCategoryIner'>
                                    {Brands?.map((brand, index) => (
                                        // key = { index } >
                                        <div className='bs'
                                            key={index} onClick={() => setBrand(brand)}>
                                            <h5> {brand}  </h5>
                                            < i className={`car-default car-${brand} `}></i>
                                        </div>
                                    ))}</div>

                            </div>
                        </button>
                    </div>
                    {/* ////////// */}


                    <div className='prices' style={{ display: arrw ? "flex" : "none" }}>
                        <div className='filterName'> price </div>
                        <button className='selcter' onClick={() => closeSelecter3()}>
                            <div className='selectPrice' > {price} </div>
                            <div className='priceCategory' style={{ display: s3 ? "flex" : "none" }}>

                                <div className='pp' onClick={() => setPrice("All")}> All </div>
                                <div className='pp' onClick={() => setPrice("Expensive")}> Expensive </div>
                                <div className='pp' onClick={() => setPrice("Average")}> Average </div>
                                <div className='pp' onClick={() => setPrice("Cheap")}> Cheap </div>

                            </div>
                        </button>
                    </div>

                    <div className='seats' style={{ display: arrw ? "flex" : "none" }}>
                        <div className='filterName'> seats </div> <div className='selcter' >
                            <div className='selectSeats' >
                                <form> <label>
                                    <input className='numSeats' type="number" name="name"
                                        onClick={() => closeSelecter4()}
                                        max={9}
                                        min={2}
                                        value={seats}
                                        onChange={(e) => setSeats(e.target.value)} />
                                </label>  </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >

    );
}

export default MySercheBar;
