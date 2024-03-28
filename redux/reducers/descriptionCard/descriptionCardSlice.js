import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
    description: '',
};

const descriptionCardSlice = createSlice({
    name: 'descriptionCard',
    initialState,
    reducers: {
        openCard: (state) => {
            state.isOpen = true;
        },
        closeCard: (state) => {
            state.isOpen = false;
        },
        setDescriptionText: (state, action) => {
            state.description = action.payload;
        },
    },
});

export const { openCard, closeCard, setDescriptionText } = descriptionCardSlice.actions;

export default descriptionCardSlice.reducer;