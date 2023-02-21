import { useEffect } from 'react'
import coffeeblast from '../../../assets/coffee-blast.png'
import useObserver from '../../../hooks/useObserver'
import feedbackPerson from './assets/HomeFeedbackImg/person.png'

export const HomeFeedback = () => {


  const [observer, setElements, entries] = useObserver({
    root : null,
    rootMargin : '0px',
    threshold : 1
  })

  useEffect(() => {
  const items = document.querySelectorAll('.qmark');
  setElements(items);

  }, [setElements])


  useEffect(() => {
  entries.forEach((entry) => {
      if(entry.isIntersecting){
      const item = entry.target;
      item.classList.add('loaded-qmark');
      observer.unobserve(item);
      }
  })
  }, [entries, observer]);

  return (
    <section className='home-feedback'>
        
        <img src={coffeeblast}  loading='lazy'></img>
        <img src={coffeeblast} loading='lazy'></img>

        <h1>Our coffee perfection feedback</h1>
        <h3>Our customers has amazing things to say about us</h3>

        <article>
          
          <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9V16L0 8L8 0V7H16V9H8Z" fill="currentColor"/>
            </svg>
          </button>

          <button>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 9V16L0 8L8 0V7H16V9H8Z" fill="currentColor"/>
            </svg>
          </button>
          
          <h1><p className='qmark'>“</p></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
          <h2>Johnny Thomas</h2>
          <h3>Project Manager</h3>
         
          <img className='fbperson' src={feedbackPerson} loading='lazy'></img>
        </article>

    </section>
    
  )
}
