import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useDispatch } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { startLoadingCoffeeData } from './store/thunks'
import './styles.css'


export const ConstructionApp = () => {

  const dispatch = useDispatch();
  dispatch(startLoadingCoffeeData());

  return (
    <>   
        <AnimatePresence mode='wait'>
            <AppRouter/>
        </AnimatePresence>
    </>
  )
}
