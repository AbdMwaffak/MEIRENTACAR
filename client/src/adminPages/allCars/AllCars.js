import React, { useEffect, useState } from 'react';
import './allCars.css'
import MySercheBar from '../../mySercheBar/MySercheBar';
import { useDispatch, useSelector } from 'react-redux';
import AllCarCard from '../allCarCard/AllCarCard';
import { getUnDeletedCars } from '../../RTKadmin/unDeletedCarsSlice';
import { patchDeleteRecover } from '../../RTKadmin/deleteRecoverSlice';

const AllCars = () => {
    const [toggle, setToggle] = useState(false)
    let allCars = (useSelector(state => state.unDeletedCars)).data


    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(patchDeleteRecover(id))
        setToggle(!toggle)
    }

    useEffect(() => {
        dispatch(getUnDeletedCars())
    }, [dispatch, toggle])
    ////////////////

    // let allCars = (useSelector(state => state?.allCars))?.data
    // console.log(allCars)


    // useEffect(() => {
    //     dispatch(getAllCars())
    // }, [dispatch])
    return (
        <div className='deletedCars'>
            <MySercheBar />
            <div className='titelDeletedCars'>  <div className='deletedCarsNum'>   {allCars.length} results   </div> </div>


            <div className='cars'>
                {allCars?.map((car, index) => (
                    <AllCarCard
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

                        handleUnDelete={handleDelete}

                    />
                ))}



            </div>
        </div>
    );
}

export default AllCars;
