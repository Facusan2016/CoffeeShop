import { createSlice } from '@reduxjs/toolkit';

export const shopCartSlice = createSlice({
    
    name: 'shopCart',

    initialState: {
        counterItems : 0,
        coffeeArray : [],
        errors : []
    },

    reducers: {

        addCoffee: (state, action) => {

            
            if(state.coffeeArray.find(x => x.id_name === action.payload.id_name) === undefined){
                
                state.counterItems += 1;
                state.coffeeArray.push(action.payload.data);

            }else{

                state.errors.push({error : `${action.payload.id_name} is already added`, id_name : action.payload.id_name})
            }

        },

        removeCoffee : (state, action /*id_name*/) => {

            state.counterItems -= 1;
            var newArr = state.coffeeArray.filter(function(e) {
                return e.id_name !== action.payload
            })

            state.coffeeArray = newArr;
        },

        updateCoffeQuantity : (state, action /*id_name*/ /*quantity*/) => {
            
            var searchArr = state.coffeeArray.map(e => e.id_name);
            var place = searchArr.indexOf(action.payload.id_name);

            state.coffeeArray[place].quantity = action.payload.quantity; 
        }
    }
});


// Action creators are generated for each case reducer function
export const {

    addCoffee,
    removeCoffee,
    updateCoffeQuantity 

} = shopCartSlice.actions;