import { getCoffeeData } from "../mainPage/helpers/getCoffeeData";
import { setData } from './coffeeData'

//This thunk loads and set the async CoffeeData and then it sets on the store to make the information accessible from there

export const startLoadingCoffeeData = () => {
    
    return async(dispatch) =>{
        const coffeeData = await getCoffeeData();
        dispatch(setData(coffeeData));
    } 

}