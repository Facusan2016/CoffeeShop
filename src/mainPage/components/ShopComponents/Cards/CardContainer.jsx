// I'm calling the next end-point to get the coffee data:  https://api.sampleapis.com/coffee/hot

import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CardItem } from './CardItem';

var newData = [];

export const CardContainer = () => {
    
    const { searched } = useSelector((state) => state.searchBar); //Here I'm selecting what the user is searching
    const { data }     = useSelector((state) => state.coffeeData); //Here I'm bringing all the coffeeData from the redux store to make a request only once

    if(searched == ''){
      newData = data;
    }

    useEffect(() => { //Here i'm filtering the data depending on the SearchBar component
      newData = data.filter(coffee => coffee.name.toUpperCase().includes(searched.toUpperCase()));
    }, [searched])

    return (
    <section className='card-shop-container'>
        {
           newData.length > 0 ? newData.map(e => (<CardItem key={e.id} img = {`/coffee-shop/${e.id_name}.jpg`} {...e}/> )) : <h2 className='not-found'>No Results Found :(</h2>
        }
    </section>
  )
}
