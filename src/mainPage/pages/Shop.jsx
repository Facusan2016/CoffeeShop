import React, { useEffect } from 'react'
import Transitions from '../../transitions/Transitions';

export const Shop = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Transitions>
      <div>Shop</div>
    </Transitions>
  )
}
