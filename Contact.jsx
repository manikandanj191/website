import React, { useState } from 'react'


export default function Contact() {

    const [form, setForm]= useState({
        name:"",
        email:""
    })

    const handlechange = ((e)=>
        
        setForm( {...form,[e.target.name]: e.target.value})
        )
    const click= () =>{alert(`name: ${form.name} , email: ${form.email}`)
}

  return (
    <div>

        
<h2>Contact Us</h2>

     <input onChange={handlechange} type="name" name="name" placeholder='enter a name' />
     <input onChange={handlechange} type="email" name="email" placeholder='enter a email' />

<button onClick={click}>Submit</button>
<br /> <br />
        <img src="https://media.istockphoto.com/id/2188211582/photo/contact-us-or-customer-support-hotline-businessman-touching-on-virtual-screen-contact-icons.jpg?s=612x612&w=0&k=20&c=aL_OH2_1_qoxRz1yaC2x1gASFRLFr7IXqO7QmmZ_Y_8=" alt="img" />
      <h2>Contact Details</h2>
      <h3>Our Office Address</h3>
      <p>17, jahindar street, velacherry, chennai - 600049 </p>
      <br />
      <h2>Phone No...</h2>
      <p> Ind (+91) - 9876543210</p>


    </div>
  )
}
