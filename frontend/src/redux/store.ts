import { configureStore } from '@reduxjs/toolkit';

import { authReducer } from './auth/slice';
import { overlayReducer } from './overlay/slice';
import { postsReducer } from './posts/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    overlay: overlayReducer,
    posts: postsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
