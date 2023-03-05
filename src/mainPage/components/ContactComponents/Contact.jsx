import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import '../../../mainPage/pageStyles/ContactUs.css'
import img from './assets/greenleaves.jpg'

const initial = {
    name : '',
    email : '',
    msg : '',
}

export const Contact = () => {

    useEffect(() => {
      document.querySelectorAll('.slide').forEach(e => e.classList.add('slided'))
    }, [])
    
    const [error, setError] = useState({ok : true});
    const [send, setSend] = useState({state: false})

    const {name, email, msg, onInputChange, onResetForm} = useForm(initial);
    const url = 'https://coffeeshopbackend.up.railway.app/recieve-email';
    
    const {errors} = error;

    const onSubmit = async(e)=>{

        e.preventDefault();
        console.log(email);
        

        try {

            await axios.post(url, {name : name, email : email, msg : msg});
            setError({ok : true});
            setSend({state : true})
            onResetForm();

        } catch (err) {

            const {response} = err;
            setError(response.data);
            

        }

    }

    
  return (
    <section className='contact'>
         <div className='contact-text'>
            <h1 className='slide'>Let's Start a Conversation</h1>
            <form className='contact-form slide' onSubmit={onSubmit}>
                <div className='contact-form-text'>

                    <h3>Full name <span className='contact-error'>{!error.ok && !!errors.name ? errors.name.msg : ''}</span></h3>
                    <input
                        name='name'
                        value={name}
                        onChange={onInputChange}
                    />

                </div>
                <div className='contact-form-text'>

                    <h3>E-mail <span className='contact-error'>{!error.ok && !!errors.email ? errors.email.msg : ''}</span></h3>
                    <input
                        name='email'
                        value={email}
                        onChange={onInputChange}
                    />

                </div>
                <div className='contact-form-text'>

                    <h3>Message<span className='contact-error'>{!error.ok && !!errors.msg ? errors.msg.msg : ''}</span></h3>
                    <input
                        name='msg'
                        value={msg}
                        onChange={onInputChange}
                    />

                </div>

                <div className='contact-submit'>
                    <button type='submit'>
                        Send
                    </button>
                    <div className='contact-send-state'>
                        {send.state ? 'Email sent succesfully.' : ''}
                    </div>
                </div>


            </form>
         </div>
         <div className='contact-img'>
             <img src={img}/>
         </div>
    </section>
  )
}
