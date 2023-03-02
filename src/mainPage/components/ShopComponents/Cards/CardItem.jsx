import React from 'react'
import { Link } from 'react-router-dom';

export const CardItem = ({

    id_name,
    name,
    ingredients,
    description,
    img

}) => {
    
  return (
    <div className='shop-card-item'>
        <div className='card-item-img' style={{backgroundImage : `url(${img})`}}>

        </div>
        <div className='card-item-main'>
            <div className='card-item-text'>
                <h2>  {name}</h2>
                <h3>{
                    ingredients.map((ing, index) =>{return(
                        index < ingredients.length - 1 
                        ? `${ing} / `
                        : ing
                    );})
                }</h3>
            </div>
            <Link to={`/shop/${id_name}`} className='card-item-btn'>
                Discover more
            </Link>
        </div>

    </div>
  )
}
