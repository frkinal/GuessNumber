import {createAsyncThunk} from '@reduxjs/toolkit';
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
export const authLogin = createAsyncThunk(
  'auth/authLogin',
  async (data: Login) => {
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
      AsyncStorage.setItem('@LOGIN', JSON.stringify(data));
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
export const getAllUsers = createAsyncThunk('auth/getAllUsers', async () => {
  const res = await api.get('users');
  return res;
});
