import { createSlice } from '@reduxjs/toolkit';

interface invertedState {
    value: number;
}

const initialState: invertedState = {
    value: 1,
};

const invertSlice = createSlice({
    name: 'invert',
    initialState,
    reducers: {
        invert(state) {
            if(state.value < 3) {
                state.value++
            } else {
                state.value = 1
            }
        },
        reset(state) {
            state.value = 1
        }
    }
});

export const { invert, reset } = invertSlice.actions;
export default invertSlice.reducer;


