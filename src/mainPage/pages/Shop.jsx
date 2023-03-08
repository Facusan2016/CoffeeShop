import Transitions from '../../transitions/Transitions';
import { Footer } from '../../ui/Footer/Footer';
import { CardContainer } from '../components/ShopComponents/Cards/CardContainer';
import { SearchBar } from '../components/ShopComponents/Search/SearchBar';
import '../pageStyles/Shop.css'

export const Shop = () => {
  
  return (
    <Transitions>
    <section className='shop-main'>
      
      <div className='title-shop'>
          <h1>Enjoy a new blend of Coffee.</h1>
      </div>
      <SearchBar/>
      <CardContainer/>

    </section>
     
     <Footer bgcolor={'var(--color-shop-background)'}/>

    </Transitions>
  )
}
