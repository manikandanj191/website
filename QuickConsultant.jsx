import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Career from './Career'
import { Routes } from 'react-router-dom'
import Content from './Payroll'
import Payroll from './Payroll'
import AbroadJobs from './AbroadJobs'
import ItJobs from './ItJobs'


export default function QuickConsultant() {


   



const register= ()=>{alert("you are succesfully registered")}



  return (
    <div className='total'>
        
        <h1 style={{backgroundColor: 'lightblue', border: "1px solid black"}}> Quick Consultant </h1>
        
        
        <BrowserRouter > 
        <div className='navi'>
        <Link to="/home">Home</Link>  
         <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
           <Link to="/contact">Contact</Link>
            <Link to="/career">Career</Link>
             </div>
        <Routes>
            <Route path="/home" element={<Home/>}></Route>
             <Route path="/about" element={<About/>}></Route>
              <Route path="/services/*" element={<Services/>}></Route>
                      <Route path="/payroll" element={<Payroll/>}></Route>
                     <Route path="/ItJobs" element={<ItJobs/>}></Route>
                    <Route path="/AbroadJobs" element={<AbroadJobs/>}></Route>
               <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/career" element={<Career/>}></Route>
        </Routes>
        </BrowserRouter>
  
  <h2 className='footer'>
    Make a new start. A start that will build beautiful relationships, shape millions of ideas. We're not just connecting people, we're empowering them with the tools and opportunities to thrive in the digital age.
    Start something brilliant with us. Stay in the loop. Join our talent community.
 
  </h2>
<button onClick={register} className='but2'> Register Now</button>

      </div>
   
  )
}
