import {createSlice} from '@reduxjs/toolkit';
export const user = createSlice({
  name: 'user',
  initialState: {
    isLoading: {},
    error: {},
    status: {},
  },
  reducers: {
    resetUser: state => {
      state.isLoading = {};
      state.error = {};
      state.status = {};
    },
  },
});
export const {resetUser} = user.actions;
export default user.reducer;
