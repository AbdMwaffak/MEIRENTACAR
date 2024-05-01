import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/////////////
// let token = ''
// if ((JSON.parse(localStorage.getItem('user'))) !== undefined && (JSON.parse(localStorage.getItem('user'))) !== null) {
//   token = (JSON.parse(localStorage.getItem('user')).token)
// } else console.log("you are not logged in")
// //////////////

export const getsuggestedCars = createAsyncThunk(
  'cars/getsuggestedCars',
  async (id) => {
    const response = await axios.get(
      `/cars/suggestedCars/${id}`
      // const response = await axios.get('https://fakestoreapi.com/products'
      // , { headers: { "Authorization": `Bearer ${token}` } }
    );
    console.log(response.data);
    return response.data;
  }
);

const suggestedCarsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getsuggestedCars.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getsuggestedCars.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getsuggestedCars.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    });
  },
});
export default suggestedCarsSlice.reducer;
