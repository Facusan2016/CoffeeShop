import { createSlice } from '@reduxjs/toolkit';

export const coffeeDataSlice = createSlice({
   name: 'coffeeData',
   initialState: {
      data : []
   },

    reducers: {
      setData: (state, action) => {
         state.data = action.payload;
      },
    }
});


// Action creators are generated for each case reducer function
export const { setData } = coffeeDataSlice.actions;