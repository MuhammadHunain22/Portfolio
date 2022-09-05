import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {RiContactsLine} from 'react-icons/ri'
import { useState} from 'react'

export const Nav = () => {

  const [activeNav,setActivenav]=useState('#');
  const [scrollState,setScrollstate]=useState(0);


const changeBackground = () => {
  console.log(window.scrollY)
        if (window.scrollY <= 800) {
            setScrollstate(0)
            setActivenav('#home')
        }  
        else if (window.scrollY <= 1100) {
            setScrollstate(1)
            setActivenav('#about')
        }
        else if (window.scrollY <= 1800  ) {
          setScrollstate(2)
          setActivenav('#experience')

        }
        else if (window.scrollY <= 2600) {
          setScrollstate(3)
          setActivenav('#portfolio#')
        }
        else if (window.scrollY <= 3700 ) {
          setScrollstate(4)
          setActivenav('#contact')
        }
    else {
      setScrollstate(-1)
    }
};
window.addEventListener('scroll', changeBackground);
  return (
  
   <nav   >
       
       
     <a href='#' onClick={()=> setActivenav('#home')} className={(scrollState === 0 || activeNav === '#home') ? 'active' : ''} ><AiOutlineHome/></a>
     <a href='#about' onClick={()=> setActivenav('#about')} className={(scrollState === 1 ||activeNav === '#about') ? 'active' : ''}><AiOutlineUser/></a>
     <a href='#experience' onClick={()=> setActivenav('#experience')} className={(scrollState === 2 ||activeNav === '#experience') ? 'active' : ''}><BiBookBookmark/></a>
     <a href='#portfolio' onClick={()=> setActivenav('#portfolio')} className={(scrollState === 3 || activeNav === '#portfolio#') ? 'active' : ''}><RiServiceLine/></a>
     <a href='#contact' onClick={()=> setActivenav('#contact')} className={(scrollState === 4 ||activeNav === '#contact') ? 'active' : ''}><RiContactsLine/></a>
   </nav>
  )
}

