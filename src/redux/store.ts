import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';
import columnReducer from './columnSlice';
import diaryReducer from './diarySlice';

export const store = configureStore({
  reducer: {
    foods: foodReducer,
    columns: columnReducer,
    diaries: diaryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
