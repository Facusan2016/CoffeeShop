import React, { useEffect } from 'react'
import Transitions from '../../transitions/Transitions'
import { Footer } from '../../ui/Footer/Footer'
import { AboutMain } from '../components/AboutComponents/AboutMain'
import { Experiences } from '../components/AboutComponents/Experiences'
import { Meet } from '../components/AboutComponents/Meet'
import '../pageStyles/About.css'

export const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
    <Transitions>
      
      <AboutMain/>
      <Meet/>
      <Experiences/>
      <Footer bgcolor='var(--color-coffee-dark-brown)'/>
    </Transitions>
    </>
    
  )
}
