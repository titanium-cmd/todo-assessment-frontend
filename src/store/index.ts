import { configureStore } from '@reduxjs/toolkit'
import { reducer as notificationsReducer } from 'reapop'
import feedsSlice from './feeds/feedsSlice'
import authSlice from './auth/authSlice'

//configuring store to be used throughout the application.
export const store = configureStore({
  reducer: {
    notifications: notificationsReducer(),
    feeds: feedsSlice,
    auth: authSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch