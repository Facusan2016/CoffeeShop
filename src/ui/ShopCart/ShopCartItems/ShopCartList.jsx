import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocalCoffees } from '../../../store/shopCartSlice'
import { ShopCartItem } from './ShopCartItem'

export const ShopCartList = () => {

    const { coffeeArray } = useSelector((state) => state.shopCart);
    console.log(coffeeArray);

    const dispatch = useDispatch();

    return (
        <section className='cart-shop-container'>
            {
                coffeeArray.length > 0 ? coffeeArray.map(e => (<ShopCartItem key={e.id} img = {`/coffee-shop/${e.id_name}.jpg`} {...e}/> )) : <h2 className='not-found'> Your cart is empty</h2>
            }
        </section>  
    )
}
