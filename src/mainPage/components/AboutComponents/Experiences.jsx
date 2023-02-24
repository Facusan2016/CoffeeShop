import React, { useEffect } from 'react'
import useObserver from '../../../hooks/useObserver';

export const Experiences = () => {

    const [observer, setElements, entries] = useObserver({
        root : null,
        rootMargin : '0px 5000px 0px 5000px',
        threshold : 0
    })

    useEffect(() => {
    const items = document.querySelectorAll('.coffee-experience > h1');
    setElements(items);

    }, [setElements])
    
    
    useEffect(() => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
        const item = entry.target;
        item.classList.add('loaded-h1-info');
        observer.unobserve(item);
        }
    })
    }, [entries, observer]);
    
  return (
    <section className='coffee-experience'>
        <h1>
            We don't just serve coffee<br/>
            we offer experiences.
        </h1>
    </section>
  )
}
