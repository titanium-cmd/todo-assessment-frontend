import { createSlice } from '@reduxjs/toolkit';
import { FeedsState } from 'src/models/store';
import { asyncIsPending, asyncIsRejected } from '../asyncConfig';
import { getAllFeeds } from './feedsService';

const initialState: FeedsState = {
  message: '',
  feeds: [],
  status: null,
}

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    clearQuizState: (state) => {
      state.status = null;
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllFeeds.pending, asyncIsPending)
    builder.addCase(getAllFeeds.rejected, asyncIsRejected)
    builder.addCase(getAllFeeds.fulfilled, (state, action) => {
      state.status = null;
      state.feeds = action.payload.data;
    })
  }
});

export const { clearQuizState } = feedsSlice.actions;
export default feedsSlice.reducer;