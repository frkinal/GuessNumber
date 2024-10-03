import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {authLogin, authRegister, getAllUsers} from '@services';
export const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: '-1',
    user: undefined,
    users: undefined,
    userType: 'admin',
    isLoading: {},
    error: {},
    status: {},
  },
  reducers: {
    resetAuth: state => {
      state.isLoading = {};
      state.isAuthenticated = '0';
      state.userType = '';
      state.user = undefined;
      state.users = undefined;
      state.error = {};
      state.status = {};
    },
    changeAuhtentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    changeUserType: (state, action) => {
      state.userType = action.payload;
      AsyncStorage.setItem('@USERTYPE', JSON.stringify({type: action.payload}));
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
    builder.addCase(getAllUsers.pending, state => {
      state.isLoading = {...state.isLoading, getAllUsers: true};
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoading = {...state.isLoading, getAllUsers: false};
      state.status = {...state.status, getAllUsers: action.payload?.status};
      if (action.payload?.status === 200) {
        state.users = action.payload?.data;
        const newUsers = JSON.stringify(
          action.payload?.data.map((item: any) => {
            return {
              id: item.id,
              email: item.email,
              password: item.password,
              username: item.username,
              name: item.name,
              phone: item.phone,
              game: [
                {
                  game: 0,
                  score: 10,
                  time: 123,
                  guesses: 15,
                },
              ],
            };
          }),
        );
        AsyncStorage.setItem('@USERS', newUsers);
      }
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isLoading = {...state.isLoading, getAllUsers: false};
      state.error = {
        ...state.error,
        getAllUsers: action.error || action.payload,
      };
    });
  },
});
export const {resetAuth, changeAuhtentication, changeUserType} = auth.actions;
export default auth.reducer;
