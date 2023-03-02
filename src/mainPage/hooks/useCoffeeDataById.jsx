
import { useState, useEffect } from 'react';
import { getCoffeeData } from '../helpers/getCoffeeData';

export const useCoffeeDataById = (id = '') => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const getCoffee = async() =>{
        const coffeeData = await getCoffeeData();
        setData(coffeeData.find(coffee => coffee.id_name === id));
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
