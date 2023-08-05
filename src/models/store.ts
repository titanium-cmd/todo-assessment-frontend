import { Feeds } from "./feeds";

export type AsyncState = 'fulfilled' | 'rejected' | 'pending' | null;

export interface BaseState {
  status: AsyncState,
  message: string,
  stage?: any;
}

export interface AuthState extends BaseState {
  token: string | null
}

export interface FeedsState extends BaseState {
  feeds: Feeds[],
}
