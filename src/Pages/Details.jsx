import React, { useRef, useState } from 'react'
import Header from '../Components/Header'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Seed from '../Assets/seed.jpg'
import Seed1 from '../Assets/seed3.webp'
import Slider from "react-slick";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import Sidebar from '../Components/Sidebar';

function DetailsPage() {
  const [inputValue, setinputValue] =useState(1);
  const plus = () =>{
     setinputValue(inputValue+1)
  }
  const minus = () =>{
    if (inputValue!==0) {
      setinputValue(inputValue-1)
      
    }
 }
  const zoomSlider=useRef();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    arrows: true
  };
  const goto=(url)=>{
    setzoomImage(url)
  }
  const isActive=(index)=>{
    setactiveSize(index)
  }
  const [zoomImage , setzoomImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg');
  const [bigimageSize , setbigimageSize] = useState([1500,1500]);
  const [smallimageSize , setsmalimageSize] = useState([150,150]);
  const [activeSize, setactiveSize] = useState(0);
  return (
    <>
      <Header />
      <div className="detailsPage">
        <div className="breadcrumbWrapper mb-4">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li><Link>Home</Link></li>
              <li><Link>Fruits</Link></li>
              <li><Link>Organic</Link></li>
            </ul>

          </div>
        </div>
        <div className="container-fluid detailsContainer">
          <div className="row">
            <div className="col-md-9 part1">
              <div className="row">
                <div className="col-md-5">
                  <div className="productZoom">
                  
                    <InnerImageZoom 
                    src={`${zoomImage}?im=Resize=(${bigimageSize[0]},${bigimageSize[1]})`} zoomType='hover' zoomScale={1}
                    onClick={() => goto(0)} />
                  </div>
                  <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                    <div className="item">
                      <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`}  className='w-100' 
                        onClick={()=>goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg`)}/>
                    </div>
                    <div className="item">
                      <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                        onClick={()=>goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg`)}/>
                    </div>
                    <div className="item">
                      <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                        onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg`)} />
                    </div>
                    <div className="item">
                      <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`}className='w-100'
                        onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg`)} />
                    </div>
                    <div className="item">
                      <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                        onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg`)} />
                    </div>
                    <div className="item">
                      <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-7-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`}  className='w-100'
                        onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-7-202305292130.jpg`)} />
                    </div>
                    <div className="item">
                      <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg?im=Resize=(150,150)" className='w-100'
                        onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg')} />
                    </div>

                  </Slider>

                </div>
                <div className="col-md-7 productInfo">
                  <h1>Maggi 2-Minute Masala Noodles 70 g, Brown</h1>
                  <div className="d-flex align-items-center mb-4">
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    <span>(32 reviews)</span>

                  </div>
                  <div className="priceSection d-flex align-items-center ">
                    <span className='text priceLarge'>$38</span>
                    <div className="ml-2 d-flex flex-column">
                      <span className='text-org'>26% off</span>
                      <span className='text-b oldPrice'>$52</span>


                    </div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti dolorem nihil illo corporis dolore aliquid consectetur
                    laboriosam excepturi animi iste, dicta mollitia placeat distinctio et
                    numquam provident debitis voluptas quis!</p>

                    <div className="productSize d-flex align-items-center">
                        <span>Size / Weight:</span>
                        <ul className='ul1 list list-inline mb-0 pl-4'>
                                  <li className='list-inline-item'>
                                    <a className={`tag ${activeSize ===0 ? 'active' :'' }`} onClick={() => isActive(0)}>50g</a>

                                  </li>
                                  <li className='list-inline-item'>
                                    <a className={`tag ${activeSize ===1 ? 'active' :'' }`} onClick={() => isActive(1)}>60g</a>

                                  </li>
                                  <li className='list-inline-item'>
                                    <a className={`tag ${activeSize ===2 ? 'active' :'' }`} onClick={() => isActive(2)}>80g</a>

                                  </li>
                                  <li className='list-inline-item'>
                                    <a className={`tag ${activeSize ===3 ? 'active' :'' }`} onClick={() => isActive(3)}>120g</a>

                                  </li>
                                 

                        </ul>
                    </div>
                    <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                      <div className="counterSection mr-3">
                        <input type="number" value={inputValue} />
                        <span className='plus'><KeyboardArrowUpOutlinedIcon onClick={plus}/></span>
                        <span className='minus'><KeyboardArrowDownOutlinedIcon onClick={minus}/></span>
                        
                      </div>
                      <Button className='btnfilter btn-lg btncart'> <ShoppingCartOutlinedIcon/> Add to Cart</Button>
                      <Button className=' btncart ml-3 btn-border'> <FavoriteBorderOutlinedIcon/></Button>
                      <Button className=' btncart ml-3 btn-border'> <CompareArrowsOutlinedIcon/></Button>


                      
                    </div>



                </div>
              </div>

            </div>
            <div className="col-md-3 part2">
              <Sidebar/>

            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default DetailsPage
