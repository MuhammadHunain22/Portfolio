import React from 'react'
import './experience.css'
import Cdata from './cardsdata'
import { ImgCard } from './ImgCard'


export const Experience = () => {
  return (
   <>
  <section id='experience'>

   <h1>
   Expertise
  </h1>
  
  
   
  <div className="cards-list">
    
    { Cdata.map((val,i)=>{
      return(
      
        <li key={i}>
        <ImgCard imgsrc={val.imgsrc}/>
        </li>
       )
    })}
    </div>


</section>

   </>
  )
}

