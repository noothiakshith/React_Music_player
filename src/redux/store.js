import { configureStore } from '@reduxjs/toolkit';
import { shazamCoreApi } from './Services/ShazamCore';

import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamcCoreApi.reducerpath]:shazamcCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shazamcCoreApi.middleware),
});
