import React, { useRef } from 'react'

import emailjs from '@emailjs/browser';
import './join.css'

export default function Join() {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j3w33z8', 'template_kor9ym4', form.current, 'ionEavaVa6zRyjZpJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join' id='join-us'>
       <div className='left-j'>
          <hr></hr>
          <div>
            <span className='stroke-text'>Ready to </span>
            <span>Level Up </span>
          </div>
          <div>
            <span>your body </span>
            <span className='stroke-text'>with us? </span>
          </div>
       </div>
       <div className='right-j'>
         <form ref={form} className='email-container'>
            <input type='email' name='user_email' placeholder='Enter your email address'></input>
            <button className='btn btn-join' onClick={sendEmail}>Join Now</button>
         </form>
       </div>
    </div>
  )
}
