import React from 'react'
import './portfolio.css'
import Card from './Cards';
import "./Cards.css";
import Sdata from './Projectsdata.jsx';

export const Portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>Projects I've Worked On</h5>
      <h2>My Work</h2>
      <div className="container portfolio_container">
    
  { Sdata.map((val,i)=>{
    return(
      <li key={i}>
      <Card imgsrc={val.imgsrc} ctitle={val.ctitle} sname={val.sname} clink={val.clink}/>
    </li>
     )
  })}
  </div>

    </section>
  )
}
