

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
import Products from '../Components/Products';


function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true
  };
  return (
    <>
      <Header />
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
              <img src={Slider5} alt="" className='w-100' />
            </div>
            <div className='item'>
              <img src={Slider6} alt="" className='w-100' />
            </div>
            <div className='item'>
              <img src={Slider2} alt="" className='w-100' />
            </div>
          </Slider>

        </div>

      </section>

      <Category /> 
      <Banner />

      <section className='homeProducts'>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className='hd mb-0 mt-0'>Popular Products</h2>
            <ul className=' popular list list-inline ml-auto'> 
            <li className='list-inline-item'>
              <a className='cursor'>All</a>
            </li>
            <li className='list-inline-item'>
              <a className='cursor'>Milk & Dairy</a>
            </li>
            <li className='list-inline-item'>
              <a className='cursor'>Clothes</a>
            </li>
            <li className='list-inline-item'>
              <a className='cursor'>Skin Care</a>
            </li>
            <li className='list-inline-item'>
              <a className='cursor'>Beauty</a>
            </li>

            </ul>
          </div>
        </div>


        <div className="productRow">
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
        </div>
        

      </section>
         



    </>
  )
}

export default HomeSlider

