import { Link } from 'react-router-dom'

export const HomePresent = () => {
  return (
    <section className='home-present'>
         <link rel='preload' as='image' href='src/assets/coffebackground.png'></link> {/*Cargar imagen del fondo más rápido */}
        <div className='home-text' >
          <h3>We’ve got your morning covered with</h3>
          <h1>Coffee</h1>
          <p>It is best to start your day with a cup of coffee. Discover the
          best flavours coffee you will ever have. We provide the best
          for our customers.
          </p>
            <Link className='yellow-button present-btn' to='/'>Order Now</Link>
        </div>
    </section>
  )
}
