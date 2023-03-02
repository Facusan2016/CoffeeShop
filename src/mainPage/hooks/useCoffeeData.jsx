
import { useState, useEffect } from 'react';
import { getCoffeeData } from '../helpers/getCoffeeData';

export const useCoffeeData = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getCoffee = async() =>{
        const coffeeData = await getCoffeeData();
        setData(coffeeData);
        setIsLoading(false);
        
    }

    useEffect(() =>{
        getCoffee();
    },[]);
    
    return {
        data,
        isLoading
    }

}
