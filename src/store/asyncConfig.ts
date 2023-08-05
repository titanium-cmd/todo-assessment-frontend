import { USER_TOKEN_KEY } from "src/constants";
import { BaseState } from "src/models/store";

// Get the user information from local storage
export const getToken = () => JSON.parse(localStorage.getItem(USER_TOKEN_KEY)!);

// Set the state status to 'pending' for async operations
export const asyncIsPending = (state: BaseState) => {
  state.status = 'pending';
}

// Set the state status to 'rejected' for async operations and update the state message
export const asyncIsRejected = (state: BaseState, action: any) => {
  state.status = 'rejected';
  state.message = action.payload?.message;
}

// Set the state status to 'fulfilled' for async operations and update the state message
export const asyncIsFulfilled = (state: BaseState, action: any) => {
  state.status = 'fulfilled';
  state.message = action.payload?.message;
}
