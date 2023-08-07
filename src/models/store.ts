import { Feed, IncomingFeed } from "./feed";

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
  feeds: IncomingFeed[]
}
