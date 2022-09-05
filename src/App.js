import React from 'react'
import {Header} from './Components/header/Header'
import {Nav} from './Components/nav/Nav'
import {About} from './Components/about/About'
import {Experience} from './Components/experience/Experience'
import {Portfolio} from './Components/portfolio/Portfolio'
import {Contact} from './Components/contact/Contact'
import {Footer} from './Components/footer/Footer'
import {CTA} from './Components/header/CTA'
function App() {
  return (
   <>
   <div className='wrapper'>
    <Header/>
    <CTA/>
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
   </>
  );
}

export default App;
