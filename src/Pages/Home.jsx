

import React from 'react'
import Slider from "react-slick";
import Slider2 from "../Assets/slider2.png"
import Slider3 from "../Assets/slider3.jpg"
import Slider4 from "../Assets/slider4.jpeg"
import Slider5 from "../Assets/slider5.jpg"
import Slider6 from "../Assets/slider6.jpeg"
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banner from '../Components/Banner';


function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade:true,
    arrows:true
  };
  return (
    <>
   <Header/>
    <section className='home-slider'>
      <div className="container-fluid">
      <Slider {...settings} className='home-slider-main'>
      <div className='item'>
        <img src={Slider4} alt="" className='w-100' />
      </div>
      <div className='item'>
      <img src={Slider3} alt="" className='w-100' />
      </div>
      <div className='item'>
      <img src={Slider6} alt="" className='w-100' />
      </div>
      <div className='item'>
      <img src={Slider5} alt="" className='w-100'/>
      </div>
      <div className='item'>
      <img src={Slider6} alt="" className='w-100'/>
      </div>
      <div className='item'>
      <img src={Slider2} alt=""className='w-100' />
      </div>
    </Slider>

      </div>
      
    </section>

    <Category/>
     <Banner/>

     

    </>
  )
}

export default HomeSlider

