import { useSelector } from 'react-redux';

//This functions select a specified item based on the id

export const getCoffeeDataById = (id = '') => {

    const {data} = useSelector(state => state.coffeeData);
    var filteredData = data.find(coffee => coffee.id_name === id);


    return {
        filteredData,
    }

}
