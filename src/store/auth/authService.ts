import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserCredentials } from "src/models/user";
import axios from '../axios';
import { setToken } from "./authSlice";

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials: UserCredentials, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      console.log('credentials', credentials);      
      const { data } = await axios.post('/user/login', credentials);
      console.log('user data', data);
      dispatch(setToken(data));
      return fulfillWithValue({success: true, message: 'Login successful'});
    } catch (err) {
      console.log('err', err);      
      return rejectWithValue({ success: false, message: 'Invalid credentials.' });
    }
  }
);
