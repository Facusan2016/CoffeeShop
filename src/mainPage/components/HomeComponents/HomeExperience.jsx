import { useEffect } from 'react'
import useObserver from '../../../hooks/useObserver'
import { Link } from 'react-router-dom'

import coffeeexp from './assets/HomeExperienceImg/cup-coffee.png'
import coffeefloor from './assets/HomeExperienceImg/coffee-beans-overlay.png'


export const HomeExperience = () => {

  const [observer, setElements, entries] = useObserver({
    root : null,
    rootMargin : '0px',
    threshold : 1
    })

    useEffect(() => {
      const items = document.querySelectorAll('.home-experience > article > h1, .coffee-cup');
      setElements(items);

    }, [setElements]);

    useEffect(() => {

      entries.forEach((entry) => {
        if(entry.isIntersecting){
          const item = entry.target;
          if(item.classList.contains('coffee-cup')){
            item.classList.add('loaded-size');
            setTimeout(function(){
              item.classList.remove('loaded-size');
            }, 1000)
          }else{
            item.classList.add('loaded-text-bright');
          }
          
          observer.unobserve(item);
        }
      })

    }, [entries, observer])
    
  return (
    <section className='home-experience'>
    
        <article >
          <h1>Get a chance to have an Amazing morning</h1>
          <h2>We are giving you a one time opportunity to experience a better life with coffee.</h2>
          <Link className='yellow-button info-btn' to='/shop'><b>Order now</b></Link>
        </article>

        <img className='coffee-cup' src={coffeeexp}  loading='lazy'></img>
        <img className='coffee-blast' src={coffeefloor}  loading='lazy'></img>

    </section>
  )
}
