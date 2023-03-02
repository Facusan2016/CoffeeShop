import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { updateSearched } from '../../../../store/searchBarSlice';
import { useCoffeeData } from '../../../hooks/useCoffeeData';


const initial = {
  searched : ''
}



export const SearchBar = () => {


  const {searched, onInputChange} = useForm(initial);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearched(searched));
  }, [searched])

  
  return (
    <section className='search-bar'>
      
      <input 
        type='text' 
        placeholder='Write to search'
        name='searched'
        value={searched}
        onChange = {onInputChange}
      />

    </section>
  )
}
