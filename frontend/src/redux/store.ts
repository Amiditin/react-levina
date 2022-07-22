import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/slice';
import overlatReducer from './overlay/slice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    overlay: overlatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
