import React from 'react'
import { useSelector } from 'react-redux'
import { ShopCartItem } from './ShopCartItem'

export const ShopCartList = () => {

    const { coffeeArray } = useSelector((state) => state.shopCart);
    console.log(coffeeArray);

    return (
        <section className='cart-shop-container'>
            {
                coffeeArray.length > 0 ? coffeeArray.map(e => (<ShopCartItem key={e.id} img = {`/coffee-shop/${e.id_name}.jpg`} {...e}/> )) : <h2 className='not-found'> Your cart is empty</h2>
            }
        </section>  
    )
}
