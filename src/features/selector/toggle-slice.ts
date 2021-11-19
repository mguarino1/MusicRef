import { createSlice } from '@reduxjs/toolkit';

interface toggleState {
    value: boolean;
}

const initialState: toggleState = {
    value: false,
};

const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggled(state, action) {
            state.value = !action.payload;
        }
    }
});

export const { toggled } = toggleSlice.actions;
export default toggleSlice.reducer;