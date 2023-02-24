import React, { useEffect } from 'react'
import useObserver from '../../../hooks/useObserver';

export const AboutMain = () => {

    var w = window.innerWidth;
    const threshold = (w <= 1024) ? 0 : 1
    const rootMargin = (w <= 1024) ?'500px 5000px 500px 5000px' : '0px 5000px 0px 5000px'

    const [observer, setElements, entries] = useObserver({
        root : null,
        rootMargin : rootMargin,
        threshold : threshold
    })

    useEffect(() => {
    const items = document.querySelectorAll('.about-main > h1, .about-main-info');
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
    <section className='about-main'>
        <h1>About BeanScene</h1>
        <section className='about-main-sub'>

            <article className='about-main-info'>
                <div className='about-main-info-img'></div>
                <div className='about-main-info-content'>
                    <h2>Our origins</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dolor, dapibus hendrerit felis in, tempus accumsan dolor. Proin vel mauris mauris. Sed ornare elementum nulla, at maximus massa luctus quis. Integer consectetur magna quis dictum commodo. Vestibulum vel imperdiet metus. Vivamus at sem tempus, tempor orci a, porttitor nibh. Fusce nec facilisis purus, quis varius purus. Cras fermentum ultricies lobortis. Aenean nunc massa, pretium sit amet velit quis, mattis tristique metus. Nulla facilisi. Aliquam erat volutpat. Etiam fermentum sed est in varius. Fusce quis purus venenatis, vulputate leo non, sollicitudin justo. Vestibulum vitae auctor nibh. Suspendisse tortor ante, varius vel pulvinar eget, auctor sit amet diam.</p>
                </div>
            </article>
            
            <article className='about-main-info'>
                <div className='about-main-info-img'></div>
                <div className='about-main-info-content'>
                    <h2>Our mission</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis dolor, dapibus hendrerit felis in, tempus accumsan dolor. Proin vel mauris mauris. Sed ornare elementum nulla, at maximus massa luctus quis. Integer consectetur magna quis dictum commodo. Vestibulum vel imperdiet metus. Vivamus at sem tempus, tempor orci a, porttitor nibh. Fusce nec facilisis purus, quis varius purus. Cras fermentum ultricies lobortis. Aenean nunc massa, pretium sit amet velit quis, mattis tristique metus. Nulla facilisi. Aliquam erat volutpat. Etiam fermentum sed est in varius. Fusce quis purus venenatis, vulputate leo non, sollicitudin justo. Vestibulum vitae auctor nibh. Suspendisse tortor ante, varius vel pulvinar eget, auctor sit amet diam.</p>
                </div>
            </article>

        </section>
    </section>
  )
}
