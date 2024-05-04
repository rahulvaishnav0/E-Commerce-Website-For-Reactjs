import React from 'react'
import "./About.css";
const About = () => {
  return (
    <>
    
    <div className="about">
    <h2 className='text-white bg-red-600 text-center text-3xl m-2'>Look Book</h2>
      <div className="row flex ">
      <div className="col-md-3 col-lg-3 col-sm-12 col-12">
      <img src="./images/about-women-img1.jpg" alt="" className='about-img'/>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-12 col-12">
      <img src="./images/about-man-img1.jpg" alt="" className='about-img'/>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-12 col-12">
      <img src="./images/about-women-img2.jpg" alt="" className='about-img'/>
      </div>
      <div className="col-md-3 col-lg-3 col-sm-12 col-12">
      <img src="./images/about-man-img2.jpg" alt="" className='about-img' />
      </div>
    </div>
    </div>
    </>

  
  )
}

export default About;
