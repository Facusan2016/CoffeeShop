import React from 'react'
import { AppRouter } from './router/AppRouter'
import './styles.css'
import { Navbar } from './ui/components/Navbar'

export const ConstructionApp = () => {
  return (
    <>  
        <Navbar/>
        <AppRouter/>
    </>
  )
}
