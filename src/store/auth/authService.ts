import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { UserCredentials } from "src/models/user";
import axios from '../axios';
import { setUser } from "./authSlice";

export const userLogin = createAsyncThunk(
  'auth/login',
  async (credentials: UserCredentials, { fulfillWithValue, rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post('/user/login', credentials);
      dispatch(setUser(data));
      return fulfillWithValue(data);
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  }
);
