import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedItem: {},
};

const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        selectItem: (state, action) => {state.selectedItem = action.payload},
    },
});

export const { selectItem } = itemListSlice.actions;

export default itemListSlice.reducer;