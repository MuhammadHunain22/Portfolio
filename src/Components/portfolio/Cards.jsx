import React from "react";
import './Projectsdata.jsx'
import './Cards.css'


const Cards=(props) =>{
    return(
    
   


<div className="cards">
<div className="first hero">
  <img className="hero-profile-img" src={props.imgsrc} alt=""/>
  <div className="hero-description-bk"></div>
  {/* <div class="hero-logo">
    <img src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg" alt=""/>
  </div> */}
  <div className="hero-description">
    <p>{props.sname}</p>
  </div>
  <div className="hero-btn">
    <a href={props.clink}>Learn More</a>
  </div>
</div>



</div>
  



    );


}

export default Cards;