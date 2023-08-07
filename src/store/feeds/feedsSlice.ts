import { createSlice } from '@reduxjs/toolkit';
import { FeedsState } from 'src/models/store';
import { asyncIsFulfilled, asyncIsPending, asyncIsRejected } from '../asyncConfig';
import { getAllFeeds, saveNewFeed } from './feedsService';

const initialState: FeedsState = {
  message: '',
  feeds: [],
  status: null,
}

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {
    clearFeedState: (state) => {
      state.status = null;
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(saveNewFeed.pending, asyncIsPending)
    builder.addCase(saveNewFeed.rejected, asyncIsRejected)
    builder.addCase(saveNewFeed.fulfilled, asyncIsFulfilled)
    builder.addCase(getAllFeeds.pending, asyncIsPending)
    builder.addCase(getAllFeeds.rejected, asyncIsRejected)
    builder.addCase(getAllFeeds.fulfilled, (state, action) => {
      state.status = null;
      state.feeds = action.payload.data;
    })
  }
});

export const { clearFeedState } = feedsSlice.actions;
export default feedsSlice.reducer;