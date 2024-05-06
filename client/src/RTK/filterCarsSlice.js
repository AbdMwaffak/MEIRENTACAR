import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
/////////////

export const getfilterCars = createAsyncThunk(
  'cars/getfilterCars',
  async (reqobj) => {
    // try {

    console.log(reqobj);
    const response = await axios.get(`/cars${reqobj}&available=true`);
    return response.data;
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
    });
    builder.addCase(getfilterCars.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
    });
  },
});
export default filterCarsSlice.reducer;
