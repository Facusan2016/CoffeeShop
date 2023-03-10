import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addCoffee, updateCoffeQuantity } from '../../../../store/shopCartSlice';
import Transitions from '../../../../transitions/Transitions';
import { getCoffeeDataById } from '../../../helpers/getCoffeeDataById';


export const CardPage = () => {
  
    const { id } = useParams(); //Getting the coffee id from the url (it's passed as a param when i make the request)
    const [amount, setAmount] = useState(1) //This sets the initial state of the counter coffee.
    const dispatch = useDispatch();

    const {filteredData} = getCoffeeDataById(id); //Getting only the filtered coffee using the id
    const [pushData, setPushData] = useState({...filteredData})

    const {name, ingredients, description, price} = filteredData;

    const HandleClickPlus = () =>{
        
        if(amount < 5){
            setAmount(amount + 1);
        }
    }

    const HandleClickMinus = () =>{
        if(amount > 1){
            setAmount(amount - 1)
        }
    }

    const HandleClickAdd = () => {

        const notification = document.querySelectorAll('.notification'); //Handling the visibility of the red notification dot.
        notification.forEach(element => {
            element.style.opacity = '100%';
        });
        

        pushData.quantity = amount
        setPushData(pushData);
        
        updateCoffeQuantity({id_name : pushData.id_name, quantity : amount })
        dispatch(addCoffee({data : pushData, amount : amount, id_name : filteredData.id_name})); //Here I'm using reducers to set the proper quantity of coffees selected
        
    }
  
    return (
        <Transitions>

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
                                    ? ` ${ing}, `
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
                                ${price}
                            </b>
                        </div>
                        <button onClick={HandleClickAdd} className='coffee-page-add card-item-btn'> Add to cart</button>
                    </div>
                </article>

            </section>
        </Transitions>
    )
}
