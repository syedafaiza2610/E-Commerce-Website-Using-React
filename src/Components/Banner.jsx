import React from 'react'
import Banner1 from "../Assets/banner1.avif"
import Banner2 from "../Assets/beautyslider.jpg"
import Banner3 from "../Assets/banner 3.avif"


function Banner() {
  return (
    <div className="bannerSection">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="box">
                        <img src={Banner1} alt=""  className='w-100 transition'/>
                    </div>

                </div>
                <div className="col">
                    <div className="box">
                        <img src={Banner2} alt=""  className='w-100 transition imgbanner'/>
                    </div>

                </div>
                <div className="col">
                    <div className="box">
                        <img src={Banner3} alt=""  className='w-100 transition'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Banner