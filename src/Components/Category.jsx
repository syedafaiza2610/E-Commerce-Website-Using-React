import React, { useState } from 'react'
import Slider from "react-slick";
import Cat1 from "../Assets/cloth.webp"
import Cat2 from "../Assets/beauty.jpg"
import Cat3 from "../Assets/foot.jpg"
import Cat4 from "../Assets/pets.jpg"
import Cat5 from "../Assets/baking2.webp"
import Cat6 from "../Assets/bags.webp"
import Cat7 from "../Assets/abayas.jpg"
import Cat8 from "../Assets/jwellery.jpg"
import Cat9 from "../Assets/hijab.jpg"
import Cat10 from "../Assets/food.jpg"


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
  const [itemBg, setItemBg] = useState([
    '#fffceb',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#feefea',
    '#ecffec',
    '#feefea',
    '#fff3eb',
    '#fff3ff',
    '#f2fce4',
    '#feefea',
    '#fffceb',
    '#feefea',
    '#ecffec'
]);
  return (
    <>
      <div className="CategorySliderSection">
        <div className="container-fluid">
          <h2 className='hd'>Featured Categories</h2>
          <Slider {...settings} className='cat-slider-main'>
            {
              alldata && Array.isArray(alldata) && alldata.length !== 0 &&
              alldata.map((item, index) => {
                console.log(item.cat_name)
                return(
                <div className="item" key={index}>
                  <div className="info" style={{ background: itemBg[index] }}>
                    <img className='cat1' src={item.image} alt="" />
                    <h5>{item.cat_name}</h5>
                    <p>{item.items?.products?.length}</p>
                  </div>
                </div>
                )
              
              })
            }

        

          </Slider>

        </div>

      </div>
    </>
  )
}

export default Category