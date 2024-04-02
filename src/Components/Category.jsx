import React from 'react'
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


function Category() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };
    return (
        <>
            <div className="CategorySliderSection">
                <div className="container-fluid">
                    <h2 className='hd'>Featured Categories</h2>
                    <Slider {...settings} className='cat-slider-main'>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat1} alt="" />
                                <h5>Clothing</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat2} alt="" />
                                <h5>Beauty</h5>
                                <p>90+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat3} alt="" />
                                <h5>Foot Wear</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat4} alt="" />
                                <h5>Pets</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat5} alt="" />
                                <h5>Baking</h5>
                                <p>10+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat6} alt="" />
                                <h5>Bags</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat7} alt="" />
                                <h5>Abayas</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat8} alt="" />
                                <h5>Jwellery</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat9} alt="" />
                                <h5>Hijabs</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                        <div className="item">
                              <div className="info">
                                <img className='cat1' src={Cat10} alt="" />
                                <h5>Food</h5>
                                <p>100+ Items</p>
                              </div>
                        </div>
                      
                    </Slider>

                </div>

            </div>
        </>
    )
}

export default Category