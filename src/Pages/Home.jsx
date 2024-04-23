

import React from 'react'
import Slider from "react-slick";
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import Shampoo from '../Assets/shampo.png'
import SliderHome from '../Components/Slider';
import TopProducts from './TopProducts';
import Newsletter from '../Components/Newsletter';
import NewsletterPic from '../Assets/news3.png'
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';



function HomeSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true
  };
  return (
    <>
      <SliderHome/>

      <Category /> 
      <Banner />

      <section className='homeProducts'>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className='hd mb-0 mt-0'>Popular Products</h2>
            <ul className=' popular list list-inline ml-auto mb-0'> 
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
            <Products tag="beauty"/>
          </div>
          <div className="item">
            <Products tag ="sale"/>
          </div>
          <div className="item">
            <Products tag="new"/>
          </div>
          <div className="item">
            <Products tag="best"/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products  tag="sale"/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products/>
          </div>
          <div className="item">
            <Products  tag="new"/>
          </div>
          <div className="item">
            <Products/>
          </div>
        </div>
        

      </section>
         
         
      <section className='homeProducts pt-0 homeProductsRow2'>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className='hd mb-0 mt-0'>Daily Best Sales</h2>
            <ul className=' popular list list-inline ml-auto mb-0'> 
            <li className='list-inline-item'>
              <a className='cursor'>Featured</a>
            </li>
            <li className='list-inline-item'>
              <a className='cursor'>Popular</a>
            </li>
            <li className='list-inline-item'>
              <a className='cursor'>New Added</a>
            </li>

            </ul>
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-3 shamp">
              <img src={Shampoo} className='w-100' />
            </div>
            <div className="col-md-9">
            <Slider {...settings} className='prodSlider'>
              <div className="item">
              <Products tag="new"/>
              </div>
              <div className="item">
              <Products tag="best"/>
              </div>
              <div className="item">
              <Products tag="new"/>
              </div>
              <div className="item">
              <Products tag="beauty"/>
              </div>
              <div className="item">
              <Products tag="new"/>
              </div>
              <div className="item">
              <Products tag="sale"/>
              </div>
              <div className="item">
              <Products tag="new"/>
              </div>
           
          </Slider>


            </div>
          </div>
        </div>


       

      </section>
      <section className="topProductSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling"/>

            </div>
            <div className="col">
            <TopProducts  title="Trending Products"/>
              
            </div>
            <div className="col">
            <TopProducts  title="Recently Added"/>
              
            </div>
            <div className="col">
            <TopProducts  title="Top Rated"/>
              
            </div>
          </div>
        </div>

      </section>
      <section className='newsLetterSection'>
        <div className="container-fluid">
          <div className="box-news d-flex align-align-items-center">
            <div className="infonews">
              <h2>Stay home & get your daily needs from our shop</h2>
              <p>Start Your daily shopping with <Link>Shopsavvy</Link></p>
              <Newsletter/>


            </div>
            <div className="Imgnews">
              <img src={NewsletterPic} alt="" />
            </div>
            
             
          </div>
        </div>

      </section>
      <br></br>

           

    </>
  )
}

export default HomeSlider

