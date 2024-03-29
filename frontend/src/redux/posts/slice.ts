import { createSlice } from '@reduxjs/toolkit';
import { PostsState, Status } from './types';
import { posts } from './posts';

const initialState: PostsState = {
  items: posts,
  status: Status.SUCCESS,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const postsActions = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
