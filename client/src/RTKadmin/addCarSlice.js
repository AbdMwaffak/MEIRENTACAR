import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
/////////////
const cookies = new Cookies();
let token = '';

if (cookies.get('token') !== undefined || null) {
  token = cookies.get('token');
} else console.log('you are not logged in');
//////////////

export const addCar = createAsyncThunk('car/addCar', async (reqobj) => {
  console.log([...reqobj]);
  const response = await axios.post(`/cars`, reqobj, {
    headers: { Authorization: `Bearer ${token}` },
  });
  // console.log(response.data)
  return response.data;
});

const addCarSlice = createSlice({
  name: 'car',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(addCar.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(addCar.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'Successful';
      toast.success('Car Created Successfully!');
      // console.log(action.payload);
    });
    builder.addCase(addCar.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    });
  },
});
export default addCarSlice.reducer;
