import { getCoffeeData } from "../mainPage/helpers/getCoffeeData";
import { setData } from './coffeeData'


export const startLoadingCoffeeData = () => {
    
    return async(dispatch, getState) =>{
        const coffeeData = await getCoffeeData();
        dispatch(setData(coffeeData));
    } 

}