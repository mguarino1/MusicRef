import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectorState {
    value: string;
}

const initialState: SelectorState = {
    value: 'C',
};

const selectorSlice = createSlice({
    name: 'selector',
    initialState,
    reducers: {
        selected(state, action) {
          state.value = action.payload;
        }
    }
});

export const { selected } = selectorSlice.actions;
export default selectorSlice.reducer;