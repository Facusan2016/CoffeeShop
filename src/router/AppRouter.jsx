import { Route, Routes } from 'react-router-dom'
import { ContactUs } from '../mainPage/pages/ContactUs'
import { Home } from '../mainPage/pages/Home'
import { Shop } from '../mainPage/pages/Shop'
import { About } from '../mainPage/pages/About'
import { Navbar } from '../ui/Navbar/Navbar'
import Transitions from '../transitions/Transitions'

export const AppRouter = () => {
  return (
    
    <>
      <Navbar/>
      <Transitions>
        <Routes>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/*' element={<Home/> }/>
        </Routes>
      </Transitions>
    </>
  )
}
