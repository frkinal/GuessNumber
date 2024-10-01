import {createAsyncThunk, Dispatch, GetThunkAPI} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Login, Register} from '@services/types';
const api = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
type AsyncThunkConfig = {
  /** return type for `thunkApi.getState` */
  state?: unknown;
  /** type for `thunkApi.dispatch` */
  dispatch?: Dispatch;
  /** type of the `extra` argument for the thunk middleware, which will be passed in as `thunkApi.extra` */
  extra?: unknown;
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  rejectValue?: unknown;
  /** return type of the `serializeError` option callback */
  serializedErrorType?: unknown;
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  pendingMeta?: unknown;
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  fulfilledMeta?: unknown;
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  rejectedMeta?: unknown;
};
export const authLogin = createAsyncThunk(
  'auth/authLogin',
  async (data: Login, thunkApi: GetThunkAPI<AsyncThunkConfig>) => {
    const {nickname, password} = data;
    const res = await api.post(
      'auth/login',
      JSON.stringify({
        username: nickname,
        password,
      }),
    );
    if (res?.status === 200) {
      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      AsyncStorage.setItem('@USER', JSON.stringify(data));
      thunkApi.dispatch(getUser());
    }
    return res;
  },
);
export const authRegister = createAsyncThunk(
  'auth/authRegister',
  async (data: Register) => {
    const {email, password, nickname, birthday, gender} = data;
    const res = await api.post(
      'users',
      JSON.stringify({
        email: 'Johdsdddadadn@gmail.com',
        username: 'johasdasdadadnd',
        password: 'm38rmF$',
        name: {
          firstname: 'Joadasdhn',
          lastname: 'Dasdadaoe',
        },
        address: {
          city: 'kilcoaadsasdole',
          street: '7835adasd new road',
          number: 3,
          zipcode: '129asdads26-3874',
          geolocation: {
            lat: '-37.3159',
            long: '81.1496',
          },
        },
        phone: '1-570-236-7033',
      }),
    );
    return res;
  },
);
export const getUser = createAsyncThunk('auth/getUser', async () => {
  const res = await api.get(`users/1`);
  return res;
});
export const getAllUsers = createAsyncThunk('auth/getAllUsers', async () => {
  const res = await api.get('users');
  return res;
});
