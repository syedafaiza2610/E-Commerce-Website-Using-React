import React from 'react'
import Lipstick from "../Assets/lipstick.jpg"
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Products() {
  return (
    <div className='productThumb'>
      <Link>
        <div className="imgWrapper">
          <img className='w-100' src={Lipstick} alt="" />
          <div className="overlay">
            <ul className='list list-inline mb-0'>
                hgjhuj
            </ul>
          </div>

        </div>
      </Link>

      <div className="info">
        <span className='d-block catName'>Beauty</span>
        <h4 className='title'><Link>Longstay Liquid Matte Lipstick</Link> </h4>
        {/* <Rating name="read-only" value={4} readOnly /> */}
        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
        <span className='brand d-block'>By <Link className='clr'>GoldenRose</Link></span>
        <div className="d-flex align-items-center ">
          <div className="d-flex align-items-center">
            <span className='price'>$28.25</span> <span className='oldprice'>$32.8</span>

          </div>
          <Button className='addbtn transition'><ShoppingCartOutlinedIcon /> Add</Button>

        </div>
      </div>


    </div>
  )
}

export default Products