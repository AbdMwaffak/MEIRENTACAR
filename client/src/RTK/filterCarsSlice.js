import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/////////////
// let token = ''
// if ((JSON.parse(localStorage.getItem('user'))) !== undefined && (JSON.parse(localStorage.getItem('user'))) !== null) {
//   token = (JSON.parse(localStorage.getItem('user')).token)
// } else console.log("you are not logged in")
// //////////////

export const getfilterCars = createAsyncThunk(
  'cars/getfilterCars',
  async (reqobj) => {
    // try {
    console.log(reqobj);

    const response = await axios.get(
      `/cars?${reqobj.category}${reqobj.color}${reqobj.brand}${reqobj.seats}${reqobj.sort}available=true`
      // const response = await axios.get(`${Api}/cars/color=${reqobj.color}/brand=${reqobj.brand}/price=${reqobj.price}/seats=${reqobj.seats}/Available=true`
      // const response = await axios.get('https://fakestoreapi.com/products'
      // , { headers: { "Authorization": `Bearer ${token}` } }
    );
    console.log(response.data);
    return response.data;

    // }
    // catch (error) {
    //   console.log("error");

    // }
  }
);

const filterCarsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getfilterCars.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getfilterCars.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getfilterCars.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    });
  },
});
export default filterCarsSlice.reducer;
