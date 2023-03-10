import { createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../mainPage/helpers/setLocalStorage';

export const shopCartSlice = createSlice({
    
    name: 'shopCart',

    initialState: {
        counterItems : 0,
        coffeeArray : [],
        errors : []
    },

    reducers: {

        setLocalCoffees: (state) => {

            //This reducer tries to get the ShopCart info from the localStorage, if the localStorage is empty it sets an empty array.
            
            var localArray = JSON.parse(localStorage.getItem('coffeeArray'));

            if(localArray === null){
                setLocalStorage([]);
            }
            
            state.coffeeArray = JSON.parse(localStorage.getItem('coffeeArray'));
            state.counterItems = state.coffeeArray.length;

        },
        
        addCoffee: (state, action) => {

            //Adding coffee to the ShopCartList
            
            if(state.coffeeArray.find(x => x.id_name === action.payload.id_name) === undefined){
                
                state.counterItems += 1;
                state.coffeeArray.push(action.payload.data);
                setLocalStorage(state.coffeeArray);

            }else{

                state.errors.push({error : `${action.payload.id_name} is already added`, id_name : action.payload.id_name})
            }

        },

        removeCoffee : (state, action /*id_name*/) => {

             //Removing coffee of the ShopCartList

            state.counterItems -= 1;
            var newArr = state.coffeeArray.filter(function(e) {
                return e.id_name !== action.payload
            })

            state.coffeeArray = newArr;
            setLocalStorage(state.coffeeArray);
        },

        updateCoffeQuantity : (state, action /*id_name*/ /*quantity*/) => {
            
            var searchArr = state.coffeeArray.map(e => e.id_name);
            var place = searchArr.indexOf(action.payload.id_name);

            state.coffeeArray[place].quantity = action.payload.quantity;
            setLocalStorage(state.coffeeArray);
        }
    }
});

export const {

    setLocalCoffees,
    addCoffee,
    removeCoffee,
    updateCoffeQuantity 

} = shopCartSlice.actions;