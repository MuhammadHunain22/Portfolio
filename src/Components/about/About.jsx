import React from 'react'
import './about.css'
import Me from '../../assets/Aboutimg.png'
import { FaAward } from 'react-icons/fa'
import {SiTrustpilot} from 'react-icons/si'
import {FaCertificate} from 'react-icons/fa'

export const About = () => {
  return (
    <section id='about'>
      <h2>Get To Know</h2>
      <h1>About Me</h1>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Me} alt='About Image'/>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>2 Years Working Experience</small>
            </article>

            <article className="about_card">
              <SiTrustpilot className='about_icon' />
              <h5>Satifaction</h5>
              <small>Focus On Client's Satisfaction</small>
            </article>

            <article className="about_card">
              <FaCertificate className='about_icon' />
              <h5>Quality</h5>
              <small>Focus On Delivering Quality</small>
            </article>

           
          </div>
        
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>

<a href='#contact' className='btn btn-primary'>Let's Talk</a>
</div>
      </div>

    </section>
  )
}
