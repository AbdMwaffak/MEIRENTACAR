import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSettings = createAsyncThunk(
  'settings/getSettings',
  async () => {
    const response = await axios.get(`/settings`);
    console.log(response.data);
    return response.data;
  }
);

const getSettingsSlice = createSlice({
  name: 'cars',
  initialState: {
    data: [],
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSettings.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getSettings.fulfilled, (state, action) => {
      state.data = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getSettings.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.payload;
      console.log(state.error);
    });
  },
});
export default getSettingsSlice.reducer;
