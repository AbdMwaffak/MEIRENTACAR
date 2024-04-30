import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Api from '../extensions/API'



export const getAllCars = createAsyncThunk('cars/getAllCars',
  async (page) => {
    const response = await axios.get(`/cars?page=${page}&limit=${12}&available=true`
    )
    // console.log(response.data)
    return response.data;

  })

const allCarsSlice = createSlice({
  name: 'cars',
  initialState:
  {
    data: [],
    status: null,
    error: null,

  },
  extraReducers: (builder) => {
    builder.addCase(getAllCars.pending, (state, action) => {
      state.status = 'loading';

    })
    builder.addCase(getAllCars.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log(action.payload);
    })
    builder.addCase(getAllCars.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    })

  }



})
export default allCarsSlice.reducer;