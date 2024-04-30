import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Api from '../extensions/API'



export const getCarById = createAsyncThunk('cars/getCarById', async (id) => {
  const response = await axios.get(`/cars/${id}`
  )
  // console.log(response.data)
  return response.data;

})

const carByIdSlice = createSlice({
  name: 'carById',
  initialState:
  {
    data: [],
    status: null,
    error: null,

  },
  extraReducers: (builder) => {
    builder.addCase(getCarById.pending, (state, action) => {
      state.status = 'loading';

    })
    builder.addCase(getCarById.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(getCarById.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    })

  }



})
export default carByIdSlice.reducer;