import React from 'react'
import "./Contact.css";
const Contact = () => {
  return (
    <>
    <div className="Contact cursor-pointer">
      <h1 className='text-center text-3xl'>Follow Products And Discounts On Instagram</h1>
      <div className="row text-justify m-3">
     <img src="./images/offer-img3.png" alt="" className='offer-img'/>
      <img src="./images/offer-img2.jpg" alt="" className='offer-img' />
      </div>
      <h1 className='text-center text-3xl'>On Subscribe To The NewsLetter</h1>
      <div className="inputbox text-center m-3">
      <input type="email" placeholder='Email Address' name='email' className=' bg-inherit px-5 m-2'/>
      <button className='px-3 py-1.5 bg-slate-500 text-white'>Submit</button>
      </div>
      </div>

    </>
  )
}

export default Contact
