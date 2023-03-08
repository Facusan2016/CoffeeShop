import React from 'react'
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useForm } from '../../../../hooks/useForm';
import { updateSearched } from '../../../../store/searchBarSlice';

const initial = {
  searched : ''
}

export const SearchBar = () => {

  const {searched, onInputChange} = useForm(initial); //Using my custom hook to hanlde form data.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateSearched(searched)); //Using redux store reducers to set the actual searched element
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
