import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useObserver from '../../../hooks/useObserver'

import  cappuccino  from './assets/HomeShopImg/Cappuccino.png'
import  chailatte   from './assets/HomeShopImg/ChaiLatte.png'
import  expresso    from './assets/HomeShopImg/Expresso.png'
import  macchiato   from './assets/HomeShopImg/Macchiato.png'

export const HomeShop = () => {

    const [observer, setElements, entries] = useObserver({
        root : null,
        rootMargin : '0px',
        threshold : 1
        })

        useEffect(() => {
        const items = document.querySelectorAll('.home-shop > ul > li');
        setElements(items);

        }, [setElements])


        useEffect(() => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
            const item = entry.target;
            item.classList.add('loaded-opacity');
            observer.unobserve(item);
            }
        })
        }, [entries, observer]);

  return (
    <section className='home-shop'>
        <h1>Enjoy a new blend of coffee style</h1>
        <h3>Explore all flavours of coffee with us. There is always a new cup worth experiencing </h3>

        <ul>
            <li>
                <img src={cappuccino}  loading='lazy'></img>
                <h2>Cappuccino</h2>
                <h3>Coffee 50% | Milk 50%</h3>
                <h2>$8.50</h2>
                <Link className='yellow-button shop-btn' to='/shop'>Order Now</Link>
                </li>
            <li>
                <img src={chailatte}  loading='lazy'></img>
                <h2>Chai Latte</h2>
                <h3>Coffee 50% | Milk 50%</h3>
                <h2>$8.50</h2>
                <Link className='yellow-button shop-btn' to='/shop'>Order Now</Link>
            </li>
            <li>
                <img src={expresso}  loading='lazy'></img>
                <h2>Macchiato</h2>
                <h3>Coffee 50% | Milk 50%</h3>
                <h2>$8.50</h2>
                <Link className='yellow-button shop-btn' to='/shop'>Order Now</Link>
            </li>
            <li>
                <img src={macchiato}  loading='lazy'></img>
                <h2>Expresso</h2>
                <h3>Coffee 50% | Milk 50%</h3>
                <h2>$8.50</h2>
                <Link className='yellow-button shop-btn' to='/shop'>Order Now</Link>
            </li>
        </ul>
    </section>
  )
}
