

import React from 'react'
import Slider from "react-slick";
import Header from '../Components/Header';
import Category from '../Components/Category';
import Banner from '../Components/Banner';
import Products from '../Components/Products';
import Shampoo from '../Assets/fashion.jpeg'
import SliderHome from '../Components/Slider';
import TopProducts from './TopProducts';
import Newsletter from '../Components/Newsletter';
import NewsletterPic from '../Assets/news3.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';





function HomeSlider(props) {
  const [productData, setproductData] = useState(props.data)
  const [catArray, setcatArray] = useState([])
  const [activeTab, setactiveTab] = useState();
  const [activeTabIndex, setactiveTabIndex] = useState(0);
  const [activeTabData, setActiveTabData] = useState([]);
  const [bestSells, setBestSells] = useState([]);

  const catArr = [];

  useEffect(() => {
    if (productData && productData.length !== 0) {
      const catArr = [];
      productData.forEach(item => {
        if (item.items && item.items.length !== 0) {
          item.items.forEach(item_ => {
            if (item_.cat_name) {
              catArr.push(item_.cat_name);
            }
          });
        }
      });
      console.log(catArr)
      const list2 = catArr.filter((item, index) => catArr.indexOf(item) === index);
      setcatArray(list2);
      setactiveTab(list2[0]);
    }

  }, []);
  useEffect(() => {

    if (productData && productData.length !== 0) {
      var arr = [];
      setActiveTabData([])
      productData.forEach(item => {
        if (item.items && item.items.length !== 0) {
          item.items.forEach(item_ => {
            if (item_.cat_name === activeTab) {
              arr.push(...item_.products);
            }
          });
        }
      });
      setActiveTabData(arr);
    }
  }, [activeTab, productData]);
  const bestSellsArr = [];

  useEffect(() => {
      productData.length !== 0 &&
          productData.map((item) => {
              if (item.cat_name === "Fashion") {
                  item.items.length !== 0 &&
                      item.items.map((item_) => {
                          item_.products.length !== 0 &&
                              item_.products.map((product, index) => {
                                  bestSellsArr.push(product);
                              })
                      })
              }

          });


      setBestSells(bestSellsArr);

  }, [])



  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true
  };
  return (
    <>
      <SliderHome />

      <Category data={productData} />
      <Banner />

      <section className='homeProducts productwrapper'>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className='hd mb-0 mt-0'>Popular Products</h2>
            <ul className=' popular list list-inline ml-auto mb-0'>
              {

                catArray.length !== 0 &&
                catArray.map((item, index) => {
                  return (
                    <li className="list list-inline-item">
                      <a className={`cursor text-capitalize ${activeTabIndex === index ? 'act' : ''}`}
                        onClick={() => {
                          // setActiveTabData([])
                          setactiveTab(item)
                          setactiveTabIndex(index);
                         
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                })
              }


            </ul>
          </div>
        </div>


        <div className="productRow">
          {
            activeTabData.length !== 0 && 
            activeTabData.map((item, index) => { 
              return (
                <div className='item' key={index}> 
                  <Products tag="sale" item={item} /> 
                </div>
              );
            })
          }


      

        </div>


      </section>


      <section className='homeProducts pt-0 homeProductsRow2'>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <h2 className='hd mb-0 mt-0'>Daily Best Sales</h2>
          
          </div>
          <br></br>
          <div className="row">
            <div className="col-md-3 shamp">
              <img src={Shampoo} className='w-100' />
            </div>
            <div className="col-md-9">
              <Slider {...settings} className='prodSlider'>
                {
                  
                    bestSells.length !== 0 &&
                    bestSells.map((item, index) => {
                        return (
                            <div className='item' key={index} style={{minHeight:"600px"}}>
                                <Products tag="beauty" item={item} />
                            </div>
                        )
                    })
                
                }
          
              </Slider>


            </div>
          </div>
        </div>




      </section>
      <section className="topProductSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <TopProducts title="Top Selling" />

            </div>
            <div className="col">
              <TopProducts title="Trending Products" />

            </div>
            <div className="col">
              <TopProducts title="Recently Added" />

            </div>
            <div className="col">
              <TopProducts title="Top Rated" />

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
              <Newsletter />


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

