import React, { useState, useEffect } from 'react'
import Lipstick from "../Assets/lipstick.jpg"
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';

function Products(props) {
  // console.log(props.tag)

  const [productData, setproductData] = useState();
  useEffect(() => {
    setproductData(props.item)
  }, [props.item]);
  return (
    <div className='productThumb'>
      {
        props.tag!== null && props.tag!== undefined &&
        <span className={`badge1 ${props.tag}`}>{props.tag}</span>
      }
      {
        productData !== undefined &&
        <>
          <Link>
            <div className="imgWrapper">
              <div className='p-4 wrapper'>
                <img className='w-100' src={productData.catImg + '?im-Resize=(420,420)'} alt="" />
              </div>
              <div className="overlay1 transition">
                <ul className='list list-inline mb-0'>
                  <li className='list-inline-item'>
                    <Tooltip title="Add to Wishlist">
                      <a className='cursor'>
                        <FavoriteBorderIcon />
                      </a>
                    </Tooltip>

                  </li>
                  <li className='list-inline-item'>
                    <Tooltip title="Compare">
                      <a className='cursor'>
                        <CompareArrowsIcon />
                      </a>
                    </Tooltip>

                  </li>
                  <li className='list-inline-item'>
                    <Tooltip title="Quick View">
                      <a className='cursor'>
                        <RemoveRedEyeOutlinedIcon />
                      </a>
                    </Tooltip>
                  </li>
                </ul>
              </div>
            </div>
          </Link>




          <div className="info">
            <span className='d-block catName'>{productData.brand}</span>
            <h4 className='title'><Link>{productData.productName.substr(0,70)+'...'}</Link> </h4>
            <Rating name="half-rating-read" defaultValue={parseFloat(productData.rating)} precision={0.5} readOnly />
            <span className='brand d-block'>By <Link className='clr'>{productData.brand}</Link></span>
            <div className="d-flex align-items-center ">
              <div className="d-flex align-items-center">
                <span className='price'>Rs: {productData.price}</span> <span className='oldprice'>{productData.oldPrice}</span>

              </div>
              <Button className='addbtn transition'><ShoppingCartOutlinedIcon /> Add</Button>

            </div>
          </div>
        </>
      }


    </div>

  )
}

export default Products