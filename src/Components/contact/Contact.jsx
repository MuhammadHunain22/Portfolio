import React from 'react'
import './contact.css'
import {RiSendPlaneFill} from 'react-icons/ri'

export const Contact = () => {
  return (
   <section id='contact'>
   <h1>
      Get In Touch
    </h1>
   <div className="container contact_container">
    
    <div className="contact_content">
      <h1>Contact</h1>
     
    </div>
    <div className="contact_content content_form">
    
      <form action=''>
      <h2>Let's Talk</h2>
        <label>Name:</label>
        <input type='text' name='name' placeholder='Your Full Name...'  required/>
        <label>Email:</label>
        <input type='email' name='mail' placeholder='Your Email...'  required/>
        <label>Message:</label>
        <textarea name='message' rows='5' placeholder='Your Message...' required></textarea>
        <button type='submit' className='btn_send'><RiSendPlaneFill className='content_form_icon'/></button>
      
      </form>
      </div>
   </div>
   </section>
  )
}

