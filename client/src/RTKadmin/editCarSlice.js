import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';
import toast from 'react-hot-toast';
/////////////
const cookies = new Cookies();
let token = '';

if (cookies.get('token') !== undefined || null) {
  token = cookies.get('token');
} else console.log('you are not logged in');
//////////////

export const editCar = createAsyncThunk('cars/editCar', async (props) => {
  console.log(props);
  const response = await axios.patch(
    `/cars/${props.value.id}`,
    props.value.reqobj,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  // console.log(response.data)
  return response.data;
});

const editCarSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(editCar.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(editCar.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'Successful';
      toast.success('Car Updated Successfully!');
    });
    builder.addCase(editCar.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    });
  },
});
export default editCarSlice.reducer;
