import { configureStore } from '@reduxjs/toolkit';
import selectorReducer from '../features/selector/selector-slice';
import toggleReducer from '../features/selector/toggle-slice';

export const store = configureStore({
    reducer: {
        selector: selectorReducer,
        toggle: toggleReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
