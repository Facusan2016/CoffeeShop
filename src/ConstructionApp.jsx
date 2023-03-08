import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppRouter } from './router/AppRouter'
import { setLocalCoffees } from './store/shopCartSlice'
import { startLoadingCoffeeData } from './store/thunks'
import './styles.css'


export const ConstructionApp = () => {

  //Here i'm loading the coffee Data when this page renders

  const dispatch = useDispatch();
  dispatch(startLoadingCoffeeData());
  
  useEffect(() => {
    dispatch(setLocalCoffees());
  }, [])
  

  return (
    <>   
      <AppRouter/>
    </>
  )
}
