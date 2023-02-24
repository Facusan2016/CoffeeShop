import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { AppRouter } from './router/AppRouter'
import './styles.css'
import Transitions from './transitions/Transitions'

export const ConstructionApp = () => {
  return (
    <>   
        <AnimatePresence mode='wait'>
            <AppRouter/>
        </AnimatePresence>
    </>
  )
}
