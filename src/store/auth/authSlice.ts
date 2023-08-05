import { createSlice } from '@reduxjs/toolkit';
import { USER_TOKEN_KEY } from 'src/constants';
import { AuthState } from 'src/models/store';
import { asyncIsFulfilled, asyncIsPending, asyncIsRejected } from '../asyncConfig';
import { userLogin } from './authService';

const initialState: AuthState = {
  message: '',
  token: null,
  status: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (_, action) => {
      localStorage.setItem(USER_TOKEN_KEY, JSON.stringify(action.payload));
    },
    getToken: (state) => {
      const token = JSON.parse(localStorage.getItem(USER_TOKEN_KEY)!);
      state.token = token;
    },
    clearToken: (state) => {
      localStorage.removeItem(USER_TOKEN_KEY);
      state.token = null;
    },
    clearAuthState: (state) => {
      state.status = null;
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, asyncIsPending)
    builder.addCase(userLogin.fulfilled, asyncIsFulfilled)
    builder.addCase(userLogin.rejected, asyncIsRejected)
  }
});

export const { setToken, getToken, clearToken, clearAuthState } = authSlice.actions;
export default authSlice.reducer;