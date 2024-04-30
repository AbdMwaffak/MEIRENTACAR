import { configureStore } from '@reduxjs/toolkit';

import allCarsSlice from './allCarsSlice';
import carByIdSlice from './carByIdSlice';
import filterCarsSlice from './filterCarsSlice';
import addCarSlice from '../RTKadmin/addCarSlice';
import searchCarsSlice from './searchCarsSlice';
import unDeletedCarsSlice from '../RTKadmin/unDeletedCarsSlice';
import deletedCarsSlice from '../RTKadmin/deletedCarsSlice';
import suggestedCarsSlice from './suggestedCarsSlice';
import deleteRecoverSlice from '../RTKadmin/deleteRecoverSlice';
import editCarSlice from '../RTKadmin/editCarSlice';
import postLoginSlice from './loginSlice';
import adminStateSlice from '../RTKadmin/adminStateSlice';
import getSettingsSlice from '../RTKadmin/getSettingsSlice';
import updateSettingsSlice from '../RTKadmin/updateSettingsSlice';


export const store = configureStore({
    reducer: {

        allCars: allCarsSlice,
        filterCars: filterCarsSlice,
        searchCars: searchCarsSlice,
        carById: carByIdSlice,
        addCar: addCarSlice,
        unDeletedCars: unDeletedCarsSlice,
        deletedCars: deletedCarsSlice,
        suggestedCars: suggestedCarsSlice,
        deleteRecover: deleteRecoverSlice,
        editCar: editCarSlice,
        postLogin: postLoginSlice,
        adminState: adminStateSlice,
        getSettings:getSettingsSlice,
        updateSettings:updateSettingsSlice,
    },


})
