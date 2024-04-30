import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

///////////


const adminStateSlice = createSlice({
  name: 'admin',
  initialState: { adminState: false },
  reducers: {
    setAdminState: (state, action) => {
      state.adminState = action.payload;
    }

  }



})
export const { setAdminState } = adminStateSlice.actions;
export default adminStateSlice.reducer;