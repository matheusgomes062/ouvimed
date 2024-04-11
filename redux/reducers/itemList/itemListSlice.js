import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedItem: {},
};

const itemListSlice = createSlice({
    name: 'itemList',
    initialState,
    reducers: {
        setSelectItem: (state, action) => {state.selectedItem = action.payload},
    },
});

export const { setSelectItem } = itemListSlice.actions;

export default itemListSlice.reducer;