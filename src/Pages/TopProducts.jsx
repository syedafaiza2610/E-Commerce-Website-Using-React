import React from 'react'
import Coffe from '../Assets/coffe.jpg'
import Food from'../Assets/food.jpg'
import Berry from '../Assets/berry.jpg'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

function TopProducts( props) {
  return (
   <>
   <div className="topSelling_box">
    <h3>{props.title}</h3>
    <div className="items d-flex align-items-center">
        <div className="Img">
            <Link>
            <img src={Berry} className='w-100' alt="" />
            </Link>

        </div>
        <div className="right-info px-3">
            <Link to=""><h5>Nestle Original Coffee-Mate Coffee Creamer</h5></Link>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <div className="d-flex align-items-center">
            <span className='price'>$28.25</span> <span className='oldprice'>$32.8</span>

          </div>

        </div>
    </div>
    <div className="items d-flex align-items-center">
        <div className="Img">
            <Link>
            <img src={Berry} className='w-100' alt="" />
            </Link>

        </div>
        <div className="right-info px-3">
            <Link to=""><h5>Nestle Original Coffee-Mate Coffee Creamer</h5></Link>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <div className="d-flex align-items-center">
            <span className='price'>$28.25</span> <span className='oldprice'>$32.8</span>

          </div>

        </div>
    </div>
    <div className="items d-flex align-items-center">
        <div className="Img">
            <Link>
            <img src={Berry} className='w-100' alt="" />
            </Link>

        </div>
        <div className="right-info px-3">
            <Link to=""><h5>Nestle Original Coffee-Mate Coffee Creamer</h5></Link>
            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
            <div className="d-flex align-items-center">
            <span className='price'>$28.25</span> <span className='oldprice'>$32.8</span>

          </div>

        </div>
    </div>
   </div>
   </>
  )
}

export default TopProducts