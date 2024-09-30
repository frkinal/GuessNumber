import {createSlice} from '@reduxjs/toolkit';
export const user = createSlice({
  name: 'user',
  initialState: {
    isLoading: {},
    error: {},
    status: {},
    savedSurveys: [],
  },
  reducers: {
    resetUser: state => {
      state.isLoading = {};
      state.error = {};
      state.status = {};
      state.savedSurveys = [];
    },
    saveSurvey: (state, action) => {
      state.savedSurveys.push(action.payload);
    },
  },
});
export const {resetUser, saveSurvey} = user.actions;
export default user.reducer;
