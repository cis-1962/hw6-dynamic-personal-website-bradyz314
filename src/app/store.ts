import { configureStore } from '@reduxjs/toolkit';
import introductionReducer from '../features/IntroductionSlice';
import postsReducer from '../features/PostsSlice';

export const store = configureStore({
    reducer: {
        introduction: introductionReducer,
        posts: postsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;

