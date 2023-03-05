import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { estimatedTotal } from '../helpers/estimatedTotal';


const initial = {
    inputCode : ''
}

export const ShopCartCheckout = () => {
  
 
    const codes = [{code : 'beanscene', discount : .10}, {code : 'coffee', discount : .15}];
    
    const [valid, setValid] = useState({value : false, first : true})
    const [menu, setMenu] = useState(false)

    const {inputCode, onInputChange} = useForm(initial);
    

    const [usedcode, setUsedCode] = useState('')

    var codeValue = codes.find(e => {
        return e.code === usedcode
    })

    const {total, estTot, totShip, totDisc, totTax } = estimatedTotal(.1, codeValue ? codeValue.discount : 0 ,.2);
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        var pass = codes.findIndex(e => e.code === inputCode);
        
        if(pass != -1){
            setValid({value : true, first : false});
            setUsedCode(inputCode);
        }else{
            setValid({value : false, first : false});
        }

    }

    const handleMenuButton = () => {
        setMenu(!menu);
    }

    return (
    <section className='cart-checkout'>


        <div className={menu ? 'cart-checkout-code-info' : 'cart-checkout-code-info nav-transformed'}>
            
            <h2>Enter promo code</h2>

            <form onSubmit={handleSubmit} className='cart-checkout-promo'>
                <input disabled={valid.value} value={inputCode} name='inputCode' onChange={onInputChange} type='text'></input>
                <button>Submit</button>
                <h3 className='code'>{valid.value && !valid.first ? 'Código correcto' : !valid.value && valid.first ? '' : 'Código incorrecto'}</h3>
            </form>

            <div className='cart-checkout-prices'>

                <div className='cart-checkout-prices-sub'>
                    <h3>Sub total</h3>
                    <h3>${total.toFixed(2)}</h3>
                </div>

                <div className='cart-checkout-prices-sub'>
                    <h3>Shipping cost</h3>
                    <h3>${totShip.toFixed(2)}</h3>
                </div>

                <div className='cart-checkout-prices-sub'>
                    <h3>Discount</h3>
                    <h3>- ${codeValue ? totDisc.toFixed(2) : 0}</h3>
                </div>

                <div className='cart-checkout-prices-sub'>
                    <h3>Tax</h3>
                    <h3>${totTax.toFixed(2)}</h3>
                </div>

            </div>
        </div>


        <div className='cart-checkout-bottom'>
            <button onClick={handleMenuButton} className='mobile-btn'>
                <svg className={!menu ? 'btn-transformed' : ' '} width="32" height="18" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 8L8 1L14.5 8" stroke="white" strokeLinecap="square"/>
                </svg>
            </button>
            
            <div className='cart-checkout-total'>
                <h2>Estimated Total</h2>
                <h3>${estTot.toFixed(2)}</h3>
            </div>
            <button className='cart-checkout-button'>
                Checkout
            </button>
        </div>
    </section>
  )
}
