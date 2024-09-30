import {createSlice} from '@reduxjs/toolkit';
import {authLogin, authRegister, getUser} from '@services';
export const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: '-1',
    user: undefined,
    isLoading: {},
    error: {},
    status: {},
    language: 'tr',
  },
  reducers: {
    resetAuth: state => {
      state.isLoading = {};
      state.isAuthenticated = '0';
      state.user = undefined;
      state.language = 'tr';
      state.error = {};
      state.status = {};
    },
    changeAuhtentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    changeLanguageProcess: (state, action) => {
      state.language = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(authLogin.pending, state => {
      state.isLoading = {...state.isLoading, authLogin: true};
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, authLogin: false};
      state.status = {
        ...state.status,
        authLogin: action.payload?.status,
      };
      if (action.payload?.status === 200) {
        state.isAuthenticated = '1';
      } else {
        state.isAuthenticated = '0';
      }
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, authLogin: false};
      state.error = {
        ...state.error,
        authLogin: action.error || action.payload,
      };
    });

    builder.addCase(authRegister.pending, state => {
      state.isLoading = {...state.isLoading, authRegister: true};
    });
    builder.addCase(authRegister.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, authRegister: false};
      state.status = {...state.status, authRegister: action.payload?.status};
    });
    builder.addCase(authRegister.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, authRegister: false};
      state.error = {
        ...state.error,
        authRegister: action.error || action.payload,
      };
    });

    builder.addCase(getUser.pending, state => {
      state.isLoading = {...state.isLoading, getUser: true};
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getUser: false};
      state.status = {...state.status, getUser: action.payload?.status};
      state.user = action.payload?.data;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getUser: false};
      state.error = {
        ...state.error,
        getUser: action.error || action.payload,
      };
    });
  },
});
export const {resetAuth, changeAuhtentication, changeLanguageProcess} =
  auth.actions;
export default auth.reducer;
