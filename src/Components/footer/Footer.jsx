import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'


export const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>RA</a>
 
      <div className="footer_copyright">
      <small>&copy; Rabbia Anwar.All rights reserved.</small>
    </div>

    <div className="footer_socials">
        <a href='https://linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com' target='_blank'><FaGithub/></a>
        <a href='https://dribbble.com' target='_blank'><FiDribbble/></a> 
    </div>

   

 
   </footer>
  )
}
