import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCoffee, updateCoffeQuantity } from '../../../store/shopCartSlice';

export const ShopCartItem = ({
    id_name,
    name,
    ingredients,
    price,
    quantity
}) => {

    const dispatch = useDispatch();
    const options = [];

    for(let i = 1; i <=5; i++){
        options.push(i);
    }

    const handleCloseItem = () => {
        dispatch(removeCoffee(id_name))
    }

    const handleSelector = (e) => {
        const val = (e.target.value);
        dispatch(updateCoffeQuantity({id_name : id_name, quantity :  Number(val)}))
    }

  return (
    <section className='cart-shop-item'>
        <div className='cart-shop-item-img' style={{backgroundImage : `url(/coffee-shop/${id_name}.jpg)`}}>

        </div>
        <div className='cart-shop-info'>
            <button onClick={handleCloseItem} className='cart-shop-item-btn'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L11.5 11.5M22 22L11.5 11.5M11.5 11.5L1 22M11.5 11.5L22 1" stroke="black"/>
                </svg>
            </button>
            <h1>{name}</h1>
            <h3>
                {
                    ingredients != undefined
                    ? ingredients.map((ing, index) =>{return(
                        index < ingredients.length - 1 
                        ? ` ${ing} / `
                        : ing
                    );})

                    : 'Cargando'
                }
            </h3>
            <div className='cart-shop-info-sub'>
                <div>
                    <h2>Each</h2>
                    <h2>${price}</h2>
                </div>

                <div>
                    <h2>Quantity</h2>
                    <select className='cart-select' onChange={handleSelector}>
                        {options.map((e, indx) => <option className='cart-select' key={indx} selected = {quantity === e ? 'selected' : ''}>{e}</option>)}
                    </select>
                </div>

                <div>
                    <h2>Total</h2>
                    <h2>${quantity * price}</h2>
                </div>

            </div>
        </div>
    </section>
  )
}
