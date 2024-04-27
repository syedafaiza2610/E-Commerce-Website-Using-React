import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";



function Category(props) {
  const [alldata, setalldata] = useState(props.data)
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    // centerMode: true,
    autoplay: 2000
  };
  const [totalLength, setTotalLength] = useState([]);
  var catLength = 0;
  var lengthArray = [];
  useEffect(() => {
    alldata.length !== 0 &&
      alldata.map((item, index) => {
        item.items.length !== 0 &&
          item.items.map((item_) => {
            catLength += item_.products.length
          })
        lengthArray.push(catLength)
        catLength = 0;
      })

    const list = lengthArray.filter((item, index) => lengthArray.indexOf(item) === index);
    setTotalLength(list)


  }, []);

  return (
    <>
      <div className="CategorySliderSection">
        <div className="container-fluid">
          <h2 className='hd'>Featured Categories</h2>
          <Slider {...settings} className='cat-slider-main'>
            {
              alldata && Array.isArray(alldata) && alldata.length !== 0 &&
              alldata.map((item, index) => {
                // console.log(item.cat_name)
                return (
                  <div className="item" key={index}>
                    <Link to={`/cat/${item.cat_name.toLowerCase()}`}>
                      <div className="info">
                        <img className='cat1' src={item.image} alt="" />
                        <h5>{item.cat_name}</h5>
                        <h6>{totalLength[index]} items</h6>

                      </div>
                    </Link>


                  </div>

                )
              })
            }





          </Slider>

        </div >

      </div >
    </>
  )
}

export default Category