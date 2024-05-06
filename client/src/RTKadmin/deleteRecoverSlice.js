import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';
import toast from 'react-hot-toast';
/////////////
const cookies = new Cookies();
let token = '';

if (cookies.get('token') !== undefined || null) {
  token = cookies.get('token');
}
//////////////

export const patchDeleteRecover = createAsyncThunk(
  'cars/patchDeleteRecover',
  async (id) => {
    const response = await axios.patch(
      `/cars/changeState/${id}`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  }
);

const deleteRecoverSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(patchDeleteRecover.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(patchDeleteRecover.fulfilled, (state, action) => {
      state.data = action.payload;
      toast.success('Done!');
      // console.log(action.payload);
    });
    builder.addCase(patchDeleteRecover.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
    });
  },
});
export default deleteRecoverSlice.reducer;
