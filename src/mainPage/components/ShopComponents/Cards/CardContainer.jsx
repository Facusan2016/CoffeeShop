// Call end-point https://api.sampleapis.com/coffee/hot

import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCoffeeData } from '../../../hooks/useCoffeeData';
import { CardItem } from './CardItem';


var newData = [];

export const CardContainer = () => {
    
    const {searched} = useSelector((state) => state.searchBar);
    const {data} = useCoffeeData();

    if(searched == ''){
      newData = data;
    }

    useEffect(() => {
      newData = data.filter(coffee => coffee.name.toUpperCase().includes(searched.toUpperCase()));
    }, [searched])

  

    

    return (
    <section className='card-shop-container'>
        {
           newData.length > 0 ? newData.map(e => (<CardItem key={e.id} img = {`../assets/${e.id_name}.jpg`} {...e}/> )) : <h2 className='not-found'>No Results Found :(</h2>
        }
    </section>
  )
}
