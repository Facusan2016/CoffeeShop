
import { useForm } from '../../../hooks/useForm'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const initial ={
  email : ''
}

export const HomeSubscribe = () => {

  const {email, onInputChange, onResetForm} = useForm(initial);
  const url = 'https://coffeeshopbackend.up.railway.app/send-email'; //This is the route where I make my backend petitions.

  const [error, setError] = useState({ok : true})
  
  const onSubmit = async(e)=>{
    
    e.preventDefault();

    try {

      await axios.post(url,{email : email});
      setError({ok : true});
      const MySwal = withReactContent(Swal) //Here i'm using Swal to alert the user that he was correctly subscribed to the newsletter.

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
