import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'Under construction',
    categories: [],
  },
  reducers: {
    checkStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
