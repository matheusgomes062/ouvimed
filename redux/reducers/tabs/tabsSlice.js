import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tabSelected: 0,
};

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setTab: (state, action) => {
            state.tabSelected = action.payload;
        },
    },
});

export const { setTab } = tabsSlice.actions;

export default tabsSlice.reducer;