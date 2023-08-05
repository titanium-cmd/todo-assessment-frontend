import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import axios from '../axios';
import { Feeds } from "src/models/feeds";

export const saveNewFeed = createAsyncThunk(
  'feeds/saveNewFeed',
  async (feed: Feeds, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.post('/feed', feed);
      return fulfillWithValue(data);
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getAllFeeds = createAsyncThunk(
  'feeds/getAllFeeds',
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await axios.get('/feed');
      return fulfillWithValue(data);
    } catch (err) {
      const error = err as AxiosError;
      return rejectWithValue(error.response?.data);
    }
  }
);