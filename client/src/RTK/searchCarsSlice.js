import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Api from '../extensions/API'
/////////////
// let token = ''
// if ((JSON.parse(localStorage.getItem('user'))) !== undefined && (JSON.parse(localStorage.getItem('user'))) !== null) {
//   token = (JSON.parse(localStorage.getItem('user')).token)
// } else console.log("you are not logged in")
// //////////////


export const getSearchCars = createAsyncThunk('cars/getSearchCars', async (reqobj) => {
  // try {
  console.log(reqobj)

  const response = await axios.get(`/cars/?available=true`
    // const response = await axios.get('https://fakestoreapi.com/products'
    // , { headers: { "Authorization": `Bearer ${token}` } }
  )
  console.log(response.data)
  return response.data;
})

const searchCarsSlice = createSlice({
  name: 'cars',
  initialState:
  {
    data: [],
    status: null,
    error: null,

  },
  extraReducers: (builder) => {
    builder.addCase(getSearchCars.pending, (state, action) => {
      state.status = 'loading';

    })
    builder.addCase(getSearchCars.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log(action.payload);
    })
    builder.addCase(getSearchCars.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log('failed');
    })

  }



})
export default searchCarsSlice.reducer;