import React from 'react'
import './header.css'
import {CTA} from './CTA'
import ME from '../../assets/MyAvatar.png'
import {HeaderSocials} from './HeaderSocials'

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2 className="text-light">Hello I'm </h2>
        <h1 className='textheading'>Rabbia Anwar</h1>
        <h3 className='subheading' >Website Designer & Developer</h3>
        {/* <CTA/> */}

      <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="Avatar" id='ava'/>
        </div>

        <a href="#about" className="scroll__down">Scroll Down</a>

      </div>

    </header>
  )
}
