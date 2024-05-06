import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'universal-cookie';

export const postLogin = createAsyncThunk('login/postLogin', async (reqobj) => {
  const response = await axios.post(`/users/login`, reqobj);
  return response.data;
});

export const postLoginSlice = createSlice({
  name: 'postLogin',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  // reducers: {},

  extraReducers: (builder) => {
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';

      const cookies = new Cookies();
      cookies.set('token', state.data.token);

      window.location.pathname = '/admin';
    });

    builder.addCase(postLogin.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
    });
  },
});

export default postLoginSlice.reducer;
