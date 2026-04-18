import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    useEffect(()=>{
console.log("home page loaded")
    },[])



  return (
    <div>
       


 <h3 style={{backgroundColor:'black', color:'white', height:'60px', }}>Why Choose Quick Consultant for your business services?</h3>
<p>We offer a variety of end to end accountancy services. No matter whether you are a sole- trader, partnership or a limited company we are here on hand. We offer personalised services to help you and your business grow.</p> 
   
   <img className='first' src='https://thumbs.dreamstime.com/b/blue-consultancy-services-button-keyboard-d-concept-modern-enter-background-selected-focus-80530014.jpg' alt='img' img/> </div>
  )
}
