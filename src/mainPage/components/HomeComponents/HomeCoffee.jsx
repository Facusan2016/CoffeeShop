import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useObserver from '../../../hooks/useObserver'
import coffeecup    from './assets/HomeCoffeeImg/coffee-cup.png'

export const HomeCoffee = () => {

    const [observer, setElements, entries] = useObserver({
        root : null,
        rootMargin : '0px',
        threshold : 0
    })

    useEffect(() => {
    const items = document.querySelectorAll('.home-coffee');
    setElements(items);

    }, [setElements])
    
    
    useEffect(() => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
        const item = entry.target;
        item.classList.add('loaded-transform');
        observer.unobserve(item);
        }
    })
    }, [entries, observer]);
      

    return (
    <section className='home-coffee'>

        <article>
        <h2>Discover the best coffee</h2>
        <p>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
        <Link className='yellow-button' to='/'>Learn More</Link>
        </article>

        <img src={coffeecup}/>

    </section>

  )
}
