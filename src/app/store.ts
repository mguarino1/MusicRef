import { configureStore } from '@reduxjs/toolkit';
import selectorReducer from '../features/selector/selector-slice';

export const store = configureStore({
    reducer: {
        selector: selectorReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
