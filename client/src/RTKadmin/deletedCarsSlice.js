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

export const getDeletedCars = createAsyncThunk(
  'cars/getDeletedCars',
  async () => {
    const response = await axios.get(`/cars?available=false`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log(response.data)
    return response.data;
  }
);

const deletedCarsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getDeletedCars.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getDeletedCars.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getDeletedCars.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    });
  },
});
export default deletedCarsSlice.reducer;
