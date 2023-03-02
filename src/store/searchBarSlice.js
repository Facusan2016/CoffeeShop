import { createSlice } from '@reduxjs/toolkit';

export const searchBarSlice = createSlice({
   
    name: 'searchBar',

    initialState: {
        searched : ''
    },

    reducers: {
        updateSearched: (state, action) => {
            state.searched = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { updateSearched } = searchBarSlice.actions;