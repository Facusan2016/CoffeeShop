
import { useForm } from '../../../hooks/useForm'
import cupexp from './assets/HomeSubscribeImg/cup-explosion.png'
import axios from 'axios'

const initial ={
  email : ''
}

export const HomeSubscribe = () => {

  const {email, onInputChange, onResetForm} = useForm(initial);
  const url = 'http://localhost:4000/send-email';
  
  const onSubmit = async(e)=>{
    e.preventDefault();
    console.log(email);
    try {
      const data = await axios.post(url,{email : email});   
      console.log(data);
    } catch (error) {
      console.log(error);
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
                <input type='text' name='email' value={email} onChange={onInputChange} placeholder='Enter your mail'/> 
                <button className='yellow-button' type='submit'><b>Subscribe</b></button>
              </form>
          </article>
        </div>

  </section>
  )
}
