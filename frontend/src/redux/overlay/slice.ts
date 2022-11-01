import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OverlayState } from './types';

const initialState: OverlayState = {
  opened: false,
};

const overlaySlice = createSlice({
  name: 'overlay',
  initialState,
  reducers: {
    setOverlayOpened(state, action: PayloadAction<boolean>) {
      state.opened = action.payload;
    },
  },
});

export const { setOverlayOpened } = overlaySlice.actions;

export const overlayReducer = overlaySlice.reducer;
