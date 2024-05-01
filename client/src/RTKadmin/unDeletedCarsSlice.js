import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';
/////////////
const cookies = new Cookies();
let token = '';

if (cookies.get('token') !== undefined || null) {
  token = cookies.get('token');
} else console.log('you are not logged in');
//////////////

export const getUnDeletedCars = createAsyncThunk(
  'cars/getUnDeletedCars',
  async () => {
    const response = await axios.get(`/cars?available=true`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(response.data)
    return response.data;
  }
);

const unDeletedCarsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getUnDeletedCars.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getUnDeletedCars.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUnDeletedCars.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    });
  },
});
export default unDeletedCarsSlice.reducer;
