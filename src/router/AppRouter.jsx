import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom';
import { CardPage } from '../mainPage/components/ShopComponents/Cards/CardPage';
import { About } from '../mainPage/pages/About';
import { ContactUs } from '../mainPage/pages/ContactUs';
import { Home } from '../mainPage/pages/Home';
import { Shop } from '../mainPage/pages/Shop';
import { Navbar } from '../ui/Navbar/Navbar';
import { ShopCart } from '../ui/ShopCart/ShopCart';


export const AppRouter = () => {
  
  const location = useLocation();

  //Here i'm using Framer motion to make a smooth transition between each component.

  return (
    
    <>
      <Navbar/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path='/*' element={<Home/> }/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path="/shop/:id" element={<CardPage/>}/>
            <Route path="/shop-cart" element={<ShopCart/>}/>
        </Routes>
    </AnimatePresence>
    </>

  )
}
