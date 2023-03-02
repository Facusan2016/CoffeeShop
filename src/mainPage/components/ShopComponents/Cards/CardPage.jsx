import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCoffeeDataById } from '../../../hooks/useCoffeeDataById';

export const CardPage = () => {
  
    const { id } = useParams();
    const [amount, setAmount] = useState(0)
    const {data} = useCoffeeDataById(id);
    const {name, ingredients, description} = data;

    const HandleClickPlus = () =>{
        
        setAmount(amount + 1);
    }

    const HandleClickMinus = () =>{
        if(amount > 0){
            setAmount(amount - 1)
        }
    }
  
    return (
        <section className='coffee-page'>

            <div className='coffee-page-img' style={{backgroundImage : `url(/coffee-shop/${id}.jpg)`}}></div>

            <article className='coffee-page-container'>
                <div className='coffee-page-info'>
                    <h2>{name}</h2>
                    <h3>Ingredients:  
                        {
                            ingredients != undefined
                            ? ingredients.map((ing, index) =>{return(
                                index < ingredients.length - 1 
                                ? ` ${ing}  `
                                : ing
                            );})

                            : 'Cargando'
                        }
                    </h3>
                    <h4>{description}</h4>
                </div>
                <div className='coffee-page-buy'>
                    <div className='coffee-page-price-add'>
                        <div className='coffee-page-counter'>
                            <button className='counter-btn btn-1' onClick={HandleClickMinus}>-</button>
                            <h2>{amount}</h2>
                            <button className='counter-btn btn-2' onClick={HandleClickPlus}>+</button>
                        </div>
                        <b>
                            $5.00
                        </b>
                    </div>
                    <button className='coffee-page-add card-item-btn'> Add to cart</button>
                </div>
            </article>

        </section>
    )
}
