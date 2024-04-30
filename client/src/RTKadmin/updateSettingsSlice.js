import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'
import Api from '../extensions/API'
import Cookies from 'universal-cookie';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
/////////////
const cookies = new Cookies();
let token = ''

if (cookies.get('token') !== undefined || null) {
  token = cookies.get('token')

} else console.log("you are not logged in")
//////////////


export const updateSettings = createAsyncThunk(
  'settings/updateSettings',
  async (props) => {
console.log(props)
    const response = await axios.patch(`/settings/${props.id}`, props.reqobj
      , { headers: { "Authorization": `Bearer ${token}` } }
    )
    // console.log(response.data)
    return response.data;


  })


const updateSettingsSlice = createSlice({
  name: 'cars',
  initialState:
  {
    data: [],
    status: null,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(updateSettings.pending, (state, action) => {
      state.status = 'loading';
      


    })
    builder.addCase(updateSettings.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'successful'
      toast.success('Settings Updated Successfully!');
    })
    builder.addCase(updateSettings.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    })


  }



})
export default updateSettingsSlice.reducer;