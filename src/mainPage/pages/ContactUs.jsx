import React, { useEffect } from 'react'
import Transitions from '../../transitions/Transitions';
import { Contact } from '../components/ContactComponents/Contact';

export const ContactUs = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <Transitions>
        <Contact/>
      </Transitions>
    </>
  )
}
