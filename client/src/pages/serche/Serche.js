import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CarCard from '../../carCard/CarCard';
import MySercheBar from '../../mySercheBar/MySercheBar';
import { getfilterCars } from '../../RTK/filterCarsSlice';
import { getSearchCars } from '../../RTK/searchCarsSlice';
import './serche.css';

const Serche = () => {
  let settings = useSelector((state) => state.getSettings).data;
  const [filter, setFilter] = useState('');
  const [cars, setCars] = useState([]);

  const search = useLocation();
  const dispatch = useDispatch();

  let filterCars = useSelector((state) => state.filterCars).data;
  let searchCars = useSelector((state) => state.searchCars).data;

  useEffect(() => {
    let seCar =
      filter === ''
        ? [...searchCars]
        : searchCars.filter((car) =>
            car?.name?.toLowerCase().includes(filter.toLowerCase())
          );
    setCars(seCar);
  }, [searchCars, filter]);
  ///////////////
  useEffect(() => {
    setCars(filterCars);
  }, [filterCars]);
  //////////////////
  useEffect(() => {
    if (search?.state?.searchKey != null || undefined) {
      setFilter(search?.state?.searchKey);
      dispatch(getSearchCars());
    } else {
      dispatch(getfilterCars(search.search));
    }
  }, [dispatch, search]);
  ////////////////

  return (
    <div className='serche'>
      <MySercheBar />

      <div className='cars'>
        <div
          className='emptyMessage'
          style={{ display: cars.length === 0 ? 'flex' : 'none' }}
        >
          No car matches this filter!
        </div>

        {cars?.map((car, index) => (
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
            phone1={settings?.phone1}
            phone2={settings?.phone2}
          />
        ))}
      </div>
    </div>
  );
};

export default Serche;
