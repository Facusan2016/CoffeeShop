import React, { useEffect } from 'react'
import { ShopCartCheckout } from './ShopCartCheckout'
import { ShopCartList } from './ShopCartItems/ShopCartList'
import './ShopCart.css'
import Transitions from '../../transitions/Transitions'
import { setLocalStorage } from '../../mainPage/helpers/setLocalStorage'

export const ShopCart = () => {


  return (
    <Transitions>
      <section className='main-cart-shop'>
        <ShopCartList/>
        <ShopCartCheckout/>
      </section>
    </Transitions>
  )
}
