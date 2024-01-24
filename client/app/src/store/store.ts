import { configureStore } from '@reduxjs/toolkit';
import bannersReducer from './bannersSlice';
import { courseSlice } from './teachersSlice';

export const store = configureStore({
  reducer: {
    course: courseSlice,
    // products:productslice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;