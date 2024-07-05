import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './commentsSlice';
import authorsReducer from './authorsSlice'

const store = configureStore({
  reducer: {
    comments: commentsReducer,
    authors: authorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
