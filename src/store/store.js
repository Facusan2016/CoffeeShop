import { configureStore } from "@reduxjs/toolkit";
import { searchBarSlice } from "./searchBarSlice";

export const store = configureStore({
    reducer : {
        searchBar : searchBarSlice.reducer,
    },
})