import { createSlice } from '@reduxjs/toolkit';
import { getUser, loginUser, registerUser } from './thunk';
import { AuthState, Status } from './types';

const initialState: AuthState = {
  status: Status.NOT_LOGGED,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser(state) {
      state.status = Status.NOT_LOGGED;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.status = Status.LOADING;
      state.user = null;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.status = Status.LOGGED;
      state.user = action.payload;
    });

    builder.addCase(getUser.rejected, (state) => {
      state.status = Status.NOT_LOGGED;
      state.user = null;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.status = Status.LOADING;
      state.user = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = Status.LOGGED;
      state.user = action.payload;
    });

    builder.addCase(loginUser.rejected, (state) => {
      state.status = Status.NOT_LOGGED;
      state.user = null;
    });

    builder.addCase(registerUser.pending, (state) => {
      state.status = Status.LOADING;
      state.user = null;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.status = Status.LOGGED;
      state.user = action.payload;
    });

    builder.addCase(registerUser.rejected, (state) => {
      state.status = Status.NOT_LOGGED;
      state.user = null;
    });
  },
});

export const { logoutUser } = authSlice.actions;

export const authReducer = authSlice.reducer;
