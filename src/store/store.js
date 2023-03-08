import { configureStore } from "@reduxjs/toolkit";
import { coffeeDataSlice } from "./coffeeData";
import { searchBarSlice } from "./searchBarSlice";
import { shopCartSlice } from "./shopCartSlice";

//Initial configuration of the store

export const store = configureStore({
    reducer : {
        searchBar : searchBarSlice.reducer,
        shopCart : shopCartSlice.reducer,
        coffeeData : coffeeDataSlice.reducer
    },
})