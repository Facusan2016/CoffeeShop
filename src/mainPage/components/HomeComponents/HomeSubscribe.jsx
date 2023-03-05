
import { useForm } from '../../../hooks/useForm'
import cupexp from './assets/HomeSubscribeImg/cup-explosion.png'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const initial ={
  email : ''
}

export const HomeSubscribe = () => {

  const {email, onInputChange, onResetForm} = useForm(initial);
  const url = 'https://coffeeshopbackend.up.railway.app/send-email';

  const [error, setError] = useState({ok : true})
  
  const onSubmit = async(e)=>{
    
    e.preventDefault();
    console.log(email);

    try {

      await axios.post(url,{email : email});
      setError({ok : true});
      const MySwal = withReactContent(Swal)

      MySwal.fire({
        title: <p>Now you're subscribed to ours Newsletter!</p>,
        icon : 'success',
        confirmButtonColor: 'var(--color-coffee-dark-brown)',   
      })

      onResetForm();

    } catch (err) {

      const {response} = err;
      setError(response.data);

    }

  }


  return (
    <section className='home-subscribe'>
          
        <img src={cupexp} loading='lazy'></img>
        <img src={cupexp} loading='lazy'></img>

        <div>
          <article className='home-subscribe-info'>
              <h1>Subscribe to get the Latest News</h1>
              <h3>Don’t miss out on our latest news, updates, tips and special offers</h3>
              <form className='subscribe-input' onSubmit={onSubmit}>
                <input type='text' name='email' value={email} onChange={onInputChange} placeholder= {error.ok ? 'Enter your mail' : ''}/>
                <button className='yellow-button' type='submit'><b>Subscribe</b></button>
                <span className='error'> {error.ok ? ' ' :`${error.errors.email.msg}`}</span>
              </form>
          </article>
        </div>

  </section>
  )
}
