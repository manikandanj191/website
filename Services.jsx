import React, { useCallback } from 'react'
import QuickConsultant from './QuickConsultant'
import { Link } from 'react-router-dom'


import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Payroll from './Payroll'
import AbroadJobs from './AbroadJobs'
import ItJobs from './ItJobs'


export default function Services() {


    const handleClick = useCallback(()=>{
  console.log("clicked")
    },[])
  return (
    <div> <br />
         <div className='quick'>
      <button className='quick' onClick={handleClick}>How quick Consultant delivers value</button>
    </div>

      <h2>Services we provide</h2>
      <Link to="payroll">Payroll Services</Link> <br /> <br />
      <Link to="abroad">Abroad Jobs Service</Link> <br /> <br />
      <Link to="it">IT & Corporate Jobs</Link> <br /> <br />
 
 
    <Routes>
        <Route path="payroll" element={<Payroll/>} />
        <Route path="abroad" element={<AbroadJobs/>} />
        <Route path="it" element={<ItJobs/>} />
      </Routes>
 <img src="https://thumbs.dreamstime.com/b/conceptual-hand-writing-showing-our-services-concept-meaning-occupation-function-serving-intangible-products-male-wear-160644151.jpg" alt="img" />
 
    </div>
  )
}
