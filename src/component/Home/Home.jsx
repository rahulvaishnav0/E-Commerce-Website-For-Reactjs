import React from 'react'
import "./Home.css";

const Home = () => {
  return (
    <>
    <div className="row list bg-red-600">
    <ul className='lists text-white text-wrap'>
      <li className=''>Jewelry & Accessories</li>
      <li>Clothing & Shoes</li>
      <li>Home & Living</li>
      <li>Wedding & Party</li>
      <li>Toys & Entertainment</li>
      <li>Art & Collectibles</li>
      <li>Craft Supplies & Tools</li>
    </ul>   
    

    <div className="row flex text-white home" id="/Home">
      <div className="col-md-6 col-lg-6 col-sm-12 col-12 home-right container">
        <h3 className='text-3xl'>Collections</h3>
        <p className='text-lg mx-3'>You can explore ans shop many differnt collection from various barands here.</p>
        <button className='bg-blue-700 py-2 px-3 m-2 hover:rounded-2xl' > <i class="fa-brands fa-shopify"></i> Shop Now</button>
      </div>
      <div className="col-md-6 col-lg-6 col-sm-12 col-12 home-left container">
         <img src="./images/Home-img.jpg" alt=""  className='img1 rounded-3xl '/>
      </div>
    </div>
    </div>
   
    </>
  
  )
}

export default Home;
