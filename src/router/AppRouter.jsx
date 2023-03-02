import { Route, Routes } from 'react-router-dom'
import { ContactUs } from '../mainPage/pages/ContactUs'
import { Home } from '../mainPage/pages/Home'
import { Shop } from '../mainPage/pages/Shop'
import { About } from '../mainPage/pages/About'
import { Navbar } from '../ui/Navbar/Navbar'
import Transitions from '../transitions/Transitions'
import { CardPage } from '../mainPage/components/ShopComponents/Cards/CardPage'

export const AppRouter = () => {
  return (
    
    <>
      <Navbar/>
      <Transitions>
        <Routes>
            <Route path='/*' element={<Home/> }/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path="/shop/:id" element={<CardPage/>}/>
        </Routes>
      </Transitions>
    </>
  )
}
