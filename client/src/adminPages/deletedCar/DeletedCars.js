import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MySercheBar from '../../mySercheBar/MySercheBar';
import { getDeletedCars } from '../../RTKadmin/deletedCarsSlice';
import { patchDeleteRecover } from '../../RTKadmin/deleteRecoverSlice';
import DeletedCarCard from '../deletedCarCard/DeletedCarCard';
import './deletedCars.css';

const DeletedCars = () => {
  const [toggle, setToggle] = useState(false);
  let deletedCars = useSelector((state) => state.deletedCars).data;

  const dispatch = useDispatch();
  const handleUnDelete = (id) => {
    dispatch(patchDeleteRecover(id));
    setToggle(!toggle);
  };

  useEffect(() => {
    dispatch(getDeletedCars());
  }, [dispatch, toggle]);
  ////////////////
  return (
    <div className='deletedCars'>
      <MySercheBar />
      <div className='titelDeletedCars'>
        {' '}
        <div className='deletedCarsNum'>
          {' '}
          {deletedCars.length} results{' '}
        </div>{' '}
      </div>

      <div className='cars'>
        {deletedCars?.map((car, index) => (
          <DeletedCarCard
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
            mainImage={car?.mainImage}
            WeeklyPrice={car?.priceWeekly}
            MonthlyPrice={car?.priceMonthly}
            handleUnDelete={handleUnDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default DeletedCars;
