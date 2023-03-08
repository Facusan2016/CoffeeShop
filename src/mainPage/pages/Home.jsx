import '../pageStyles/Home.css'
import {HomeCoffee, HomePresent, HomeInfo, HomeExperience, HomeFeedback, HomeSubscribe} from '../components/HomeComponents';
import { Footer} from '../../ui/Footer/Footer'
import '../../ui/Footer/Footer.css'


import { useEffect } from 'react';
import Transitions from '../../transitions/Transitions';


export const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>

      <Transitions>

        <main className='home'>

          <HomePresent/>

          <section className='home-csa'>

            <HomeCoffee/>
            <HomeInfo/>
            
          </section>

          <HomeFeedback/>
          <HomeExperience/>
          

          <div className='home-sf'>
            
            <HomeSubscribe/>
            <Footer bgcolor="var(--color-coffee-dark-brown)" />

          </div>

        </main>
      </Transitions>
    </>
  )
}