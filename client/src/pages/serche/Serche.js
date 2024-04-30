import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MySercheBar from '../../mySercheBar/MySercheBar';
import './serche.css'
import { useLocation, useParams } from 'react-router-dom'
import CarCard from '../../carCard/CarCard';
import CarFooter from '../../footer/CarFooter'
import Brands from '../../extensions/Brands'
import { getfilterCars } from '../../RTK/filterCarsSlice';
import { getAllCars } from '../../RTK/allCarsSlice';
import { getSearchCars } from '../../RTK/searchCarsSlice';
import { getSettings } from '../../RTKadmin/getSettingsSlice';

const Serche = () => {
    let settings = useSelector((state) => state.getSettings).data;
    console.log("settings : ",settings)
    const [filter, setFilter] = useState('')
    const [cars, setCars] = useState([])
    const [carsFilterArrar, setCarsFilterArrar] = useState(false)
    const [carsSearchArrar, setCarsSearchArrar] = useState(false)

    const search = useLocation()
    const dispatch = useDispatch()

    let filterCars = (useSelector(state => state.filterCars)).data
    // console.log(filterCars)
    let searchCars = (useSelector(state => state.searchCars)).data
    // console.log(searchCars && filterCars)
    ////////////////
    useEffect(() => {
        let seCar = searchCars.filter(car => {
            if (filter == "") {
                //if query is empty
                return car;
            } else if (car.name.toLowerCase().includes(filter.toLowerCase())) {
                return car;
            }
        })
        setCars(seCar)
    }, [searchCars])
    ///////////////
    useEffect(() => {
        setCars(filterCars)
    }, [filterCars])
    //////////////////
    useEffect(() => {
        if (search?.state?.searchKey != null || undefined) {
            setFilter(search?.state?.searchKey)
            dispatch(getSearchCars())
        }
        else {
            
            const value2 = {
                color: search?.state?.color == 'all' ? '' : 'color=' + search?.state?.color + '&',
                category: search?.state?.category == 'all' ? '' : "category=" + search?.state?.category + '&',
                brand: search?.state?.brand == 'all' ? '' : 'brand=' + search?.state?.brand + '&',
                sort: search?.state?.sort == 'non sort' ? '' : 'sort=-' + search?.state?.sort + '&',
                seats: search?.state?.seats == "" ? '' : 'seats=' + search?.state?.seats + '&'

            }
            dispatch(getfilterCars(value2))
        }
    }, [dispatch, search])
    ////////////////

    return (
        <div className='serche'>
            <MySercheBar />

            <div className='cars'>

                <div className='emptyMessage'
                    style={{ display: cars.length == 0 ? "flex" : "none" }}
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
        </div >
    );
}

export default Serche;
