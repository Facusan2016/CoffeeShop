import '../pageStyles/Home.css'
import { HomeShop, HomeCoffee, HomePresent, HomeInfo, HomeExperience, HomeFeedback, HomeSubscribe, HomeFooter } from '../components/HomeComponents';
import { useEffect } from 'react';



export const Home = () => {

  //TODO: Hacer que los botones al clickearlos se agranden y achiquen


  return (
    <main className='home'>

      <HomePresent/>

      <section className='home-csa'>

        <HomeCoffee/>
        <HomeShop/>
        <HomeInfo/>
        
      </section>

      <HomeExperience/>
      <HomeFeedback/>
      

      <div className='home-sf'>
        
        <HomeSubscribe/>
        <HomeFooter/>

      </div>

    </main>
  )
}