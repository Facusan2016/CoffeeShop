//SearchBar slice that updates everytime that the component changes

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

export const { updateSearched } = searchBarSlice.actions;