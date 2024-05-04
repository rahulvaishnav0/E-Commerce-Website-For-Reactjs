import React from 'react'
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="Footer shadow-orange-300 bg-yellow-50 mt-10  m-3 d-flex ">
        <div className="row flex w-100% footer-line p-2 ">
            <div className="col-md-3 col-lg-3 col-sm-12 col-12 m-auto bg-yellow-50 block ">
               <h1 className='uppercase p-2 text-center text-black'>Coral</h1>
                 <p className='text-center w-80 me-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatibus cupiditate impedit sapiente tempore eligendi itaque, error dolores molestiae nam.</p>
                 <div className="icon flex">
                 <i class="fa-brands fa-facebook text-2xl m-2 hover:text-sky-500"></i>
                 <i class="fa-brands fa-twitter text-2xl m-2 hover:text-sky-500"></i>
                 <i class="fa-brands fa-linkedin text-2xl m-2 hover:text-sky-500"></i>
                 <i class="fa-brands fa-instagram text-2xl m-2 hover:text-sky-500"></i>
                 </div>
                 </div>
            
          
            <div className="col-md-3 col-lg-3 col-sm-12 col-12 block text-justify mx-auto my-2 bg-yellow-50">
            <h3 className='uppercase text-center'>Catalog</h3>
            <ul className='list-item'>
                <li>Shirt</li>
                <li>Hoodies</li>
                <li>Jodhpuri Shut</li>
                <li>Jacket</li>
                <li>T-shirt</li>
              </ul>
            </div>

           
            <div className="col-md-3 col-lg-3 col-sm-12 col-12 block text-justify mx-auto my-2 bg-yellow-50">
            <h3 className='uppercase text-center'>customer services</h3>
              <ul className='list-item'>
                <li>Contact us</li>
                <li>Track your Order</li>
                <li>Product Care & Repair</li>
                <li>Book an Appointment</li>
                <li>Shopping & Returns</li>
              </ul>
            </div>
           
         
            <div className="col-md-3 col-lg-3 col-sm-12 col-12 text-justify mx-auto my-2 block bg-yellow-50">
            <h3 className='uppercase text-center'>About us</h3>
              <ul className='list-item'>
                <li>Our Producers</li>
                <li>Sitemap</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>

        </div>
      </div>
      
    </>
  )
}

export default Footer
