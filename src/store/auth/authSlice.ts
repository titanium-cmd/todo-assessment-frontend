import { createSlice } from '@reduxjs/toolkit';
import { USER_INFO_KEY, USER_TOKEN_KEY } from 'src/constants';
import { AuthState } from 'src/models/store';
import { asyncIsFulfilled, asyncIsPending, asyncIsRejected } from '../asyncConfig';
import { userLogin } from './authService';

const initialState: AuthState = {
  message: '',
  user: null,
  status: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      localStorage.setItem(USER_INFO_KEY, JSON.stringify(action.payload?.user));
      localStorage.setItem(USER_TOKEN_KEY, action.payload?.token);
    },
    getUser: (state) => {
      const user = JSON.parse(localStorage.getItem(USER_INFO_KEY)!);
      state.user = user;
    },
    clearUser: (state) => {
      localStorage.removeItem(USER_INFO_KEY);
      localStorage.removeItem(USER_TOKEN_KEY);
      state.user = null;
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

export const { setUser, getUser, clearUser, clearAuthState } = authSlice.actions;
export default authSlice.reducer;