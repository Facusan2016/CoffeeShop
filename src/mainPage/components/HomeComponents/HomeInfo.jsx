
import { useEffect } from 'react'
import useObserver from '../../../hooks/useObserver'
import { Link } from 'react-router-dom'

import beans from './assets/HomeInfoImg/coffee-beans.png'
import badge from './assets/HomeInfoImg/badge.png'
import cup from './assets/HomeInfoImg/coffee-cup.png'
import price from './assets/HomeInfoImg/best-price.png'


export const HomeInfo = () => {

  const [observer, setElements, entries] = useObserver({
    root : null,
    rootMargin : '0px',
    threshold : 0
    })

    useEffect(() => {
    const items = document.querySelectorAll('.home-info-items');
    setElements(items);

    }, [setElements])


    useEffect(() => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
        const item = entry.target;
        const child = document.querySelectorAll('.home-info-items > article');

        let counter = 0;

        const i = setInterval(function(){ //This function makes each item being shown in a 400ms interval.

          child[counter].classList.add('loaded-opacity');
          observer.unobserve(child[counter]);
          counter++;
          if(counter >= child.length){
            clearInterval(i);
          }
        }, 400);

        observer.unobserve(item);
        }
    })
  }, [entries, observer]);

  return (
    <section className='home-info'>

          <h1>Why are we different?</h1>
          <h3>We don’t just make your coffee, we make your day!</h3>

          <div className='home-info-items'>
            <article>
              <img src={beans}  loading='lazy'></img>
              <h2>Supreme Beans</h2>
              <h3>Beans that provides great taste</h3>
            </article>

            <article>
              <img src={badge}  loading='lazy'></img>
              <h2>High Quality</h2>
              <h3>We provide the highest quality</h3>
            </article>

            <article>
              <img src={cup}  loading='lazy'></img>
              <h2>Extraordinary</h2>
              <h3>Coffee like you have never tasted</h3>
            </article>

            <article>
              <img src={price}  loading='lazy'></img>
              <h2>Affordable Price</h2>
              <h3>Our Coffee prices are easy to afford</h3>
            </article>
          </div>

          <h2>Get started today</h2>
          <Link className='yellow-button info-btn' to='/contact-us'><b>Join Us</b></Link>

    </section>
  )
}
