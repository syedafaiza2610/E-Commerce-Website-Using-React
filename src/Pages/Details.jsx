import React, { useRef, useState , useEffect } from 'react'
import Header from '../Components/Header'
import Rating from '@mui/material/Rating';
import { Link , useParams} from 'react-router-dom'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import Sidebar from '../Components/Sidebar';
import Products from '../Components/Products'
import Quantitybox from '../Components/Quantitybox';

function DetailsPage( props ) {
  const [currentProduct, setCurrentProduct] = useState({})

  var related = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    arrows: true
  };
  const [inputValue, setinputValue] = useState(1);
  const plus = () => {
    setinputValue(inputValue + 1)
  }
  const minus = () => {
    if (inputValue !== 0) {
      setinputValue(inputValue - 1)

    }
  }
  const zoomSlider = useRef();
  const zoomSliderBig = useRef();
  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
};
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    fade: false,
    arrows: true
  };
 
  const goto = (index) => {

    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
}
  const isActive = (index) => {
    setactiveSize(index)
  }
  const [zoomImage, setzoomImage] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg');
  const [bigImageSize, setBigImageSize] = useState([1500, 1500]);
  const [smallImageSize, setsmallImageSize] = useState([150, 150]);
  const [activeSize, setactiveSize] = useState(0);

  const [activeTabs, setactiveTabs] = useState(0)

  let { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)

    props.data.length !== 0 &&
        props.data.map((item) => {
            item.items.length !== 0 &&
                item.items.map((item_) => {
                    item_.products.length !== 0 &&
                        item_.products.map((product) => {
                            if (parseInt(product.id) === parseInt(id)) {
                                setCurrentProduct(product);
                            }
                        })
                })
        })
 },[id] )

  return (
    <>
      <div className="detailsPage mb-5">
        <div className="breadcrumbWrapper mb-4">
          <div className="container-fluid">
            <ul className="breadcrumb">
              <li><Link>Home</Link></li>
              <li><Link>Fruits</Link></li>
              <li><Link>Organic</Link></li>
            </ul>

          </div>
        </div>
        {/* {
          console.log(currentProduct)
        } */}
        <div className="container-fluid detailsContainer pt-3 pb-3">
          <div className="row">
            <div className="col-md-11 part1">
              <div className="row">
              <div className='col-md-5'>
                            <div className='productZoom'>
                                <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                                    {
                                        currentProduct.productImages !== undefined &&
                                        currentProduct.productImages.map((imgUrl, index) => {
                                            return (
                                              // console.log(imgUrl)
                                                <div className='item'>
                                                    <InnerImageZoom
                                                        zoomType="hover" zoomScale={1}
                                                        key={index}
                                                        src={`${imgUrl}?im=Resize=(${bigImageSize[0]},${bigImageSize[1]})`} />

                                                </div>
                                            )
                                            
                                        })
                                    }

                                </Slider>
                            </div>


                            <Slider {...settings} className='zoomSlider' ref={zoomSlider}>

                            {
                                    currentProduct.productImages !== undefined &&
                                    currentProduct.productImages.map((imgUrl, index) => {
                                        return (
                                            <div className='item'>
                                                <img src={`${imgUrl}?im=Resize=(${smallImageSize[0]},${smallImageSize[1]})`} className='w-100'
                                                    onClick={() => goto(index)} />
                                            </div>
                                        )
                                    })
                                }
                                

                            </Slider>

                        </div>
                {/* <div className="col-md-5">
                  <div className="productZoom">

                    <InnerImageZoom
                      src={`${zoomImage}?im=Resize=(${bigimageSize[0]},${bigimageSize[1]})`} zoomType='hover' zoomScale={1}
                      onClick={() => goto(0)} />
                  </div>
                  // <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                  //   <div className="item">
                  //     <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                  //       onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg`)} />
                  //   </div>
                  //   <div className="item">
                  //     <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                  //       onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg`)} />
                  //   </div>
                  //   <div className="item">
                  //     <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                  //       onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg`)} />
                  //   </div>
                  //   <div className="item">
                  //     <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                  //       onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg`)} />
                  //   </div>
                  //   <div className="item">
                  //     <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                  //       onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg`)} />
                  //   </div>
                  //   <div className="item">
                  //     <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-7-202305292130.jpg?im=Resize=(${smallimageSize[0]},${smallimageSize[1]})`} className='w-100'
                  //       onClick={() => goto(`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-7-202305292130.jpg`)} />
                  //   </div>
                  //   <div className="item">
                  //     <img src="https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg?im=Resize=(150,150)" className='w-100'
                  //       onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-8-202305292130.jpg')} />
                  //   </div>

                  // </Slider>

                </div> */}
                <div className="col-md-7 productInfo">
                  <h1>Maggi 2-Minute Masala Noodles 70 g, Brown</h1>
                  <div className="d-flex align-items-center mb-4">
                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                    <span>(32 reviews)</span>

                  </div>
                  <div className="priceSection d-flex align-items-center ">
                    <span className='text priceLarge'>$20</span>
                    <div className="ml-2 d-flex flex-column">
                      <span className='text-org'>26% off</span>
                      <span className='text-b oldPrice'>$52</span>


                    </div>
                  </div>
                  <p>Maggi 2-Minutes Noodles have been a classic Indian snack for a good few decades now.
                    Nestle brings you another delicious instant food product - Maggi 2-Minute Masala Noodles!
                    These Maggi noodles offer you the delicious masala flavour that will leave you wanting for more.
                    It is not just loved by young ones but adults too. For every busy day or lazy evening,
                    these noodles are easy to make and are perfect for those untimely hunger pangs.
                    They are made with all-natural ingredients and offers you a lip-smacking taste as
                    they are loaded with authentic flavours. So go ahead, buy Maggi 2-Minute Masala Noodle online today!</p>

                  <div className="productSize d-flex align-items-center">
                    <span>Size / Weight:</span>
                    <ul className='ul1 list list-inline mb-0 pl-4'>
                      <li className='list-inline-item'>
                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a>

                      </li>
                      <li className='list-inline-item'>
                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>60g</a>

                      </li>
                      <li className='list-inline-item'>
                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>80g</a>

                      </li>
                      <li className='list-inline-item'>
                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>120g</a>

                      </li>


                    </ul>
                  </div>
                 <div className="d-flex align-items-center ml-3">
                  <div><Quantitybox /></div>
                  
                  <div className="addCartSection pt-4 pb-4 d-flex align-items-center">

                    <Button className='btnfilter btn-lg btncart'> <ShoppingCartOutlinedIcon /> Add to Cart</Button>
                    <Button className=' btncart ml-3 btn-border'> <FavoriteBorderOutlinedIcon /></Button>
                    <Button className=' btncart ml-3 btn-border'> <CompareArrowsOutlinedIcon /></Button>



                  </div>

                 </div>



                </div>
              </div>

            </div>

          </div>
          <div className="card mt-5 detailsPageTabs">
            <div className="customTabs">
              <ul className='list list-inline'>
                <li className='list-inline-item'><Button className={`${activeTabs === 0 && 'active'}`} onClick={() => setactiveTabs(0)}>Description</Button></li>
                <li className='list-inline-item'><Button className={`${activeTabs === 1 && 'active'}`} onClick={() => setactiveTabs(1)}>Additional Info</Button></li>
                <li className='list-inline-item'> <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => setactiveTabs(2)}>Reviews (3)</Button></li>

              </ul>

              <br></br>
              {
                activeTabs === 0 &&
                <div className="tabcontent">
                  <p>Maggi 2-Minutes Noodles have been a classic Indian snack for a good few decades now.
                    Nestle brings you another delicious instant food product - Maggi 2-Minute Masala Noodles!
                    These Maggi noodles offer you the delicious masala flavour that will leave you wanting for more. </p>
                  <p>It is not just loved by young ones but adults too. For every busy day or lazy evening, these noodles are easy to make and are perfect for those untimely hunger pangs. They are made with all-natural ingredients and offers
                    you a lip-smacking taste as they are loaded with authentic flavours.
                    So go ahead, buy Maggi 2-Minute Masala Noodle online today!</p>
                  <br></br>

                  <h3>Packaging & Delivery</h3>
                  <p>Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and colour of the product may sometimes vary. Please read the label, directions and warnings carefully before use.

                  </p>
                  <br></br>

                  <h3>Features & Details
                  </h3>
                  <p>Made from the finest quality ingredients</p>
                  <br></br>

                </div>
              }

              {
                activeTabs === 1 &&
                <div className="tabcontent">
                  <div className="table-responsive">
                    <table className='table table-bordered'>
                      <tbody>
                        <tr>
                          <th>Brand</th>
                          <td>Maggi</td>
                        </tr>
                        <tr>
                          <th>Manufacturer</th>
                          <td>Nestle India Ltd.</td>
                        </tr>
                        <tr>
                          <th>Manufacturer Address</th>
                          <td ><p>Nestle India Ltd.<br />100/101, World Trade Centre, Barakhamba Lane, New Delhi-110001</p></td>
                        </tr>
                        <tr> <th>Manufacturer Email</th>
                          <td >wecare@in.nestle.com</td>
                        </tr>
                        <tr>
                          <th>Manufacturer Website</th>
                          <td>www.nestle.in</td> </tr>
                        <tr>
                          <th >Sold By</th>
                          <td>Reliance Retail</td>
                        </tr>
                        <tr >
                          <th >JioMart Customer Care Email</th>
                          <td ><a href="mailto:cs@shopsavvy.com">cs@shopsvvy.com</a></td>
                        </tr> <tr>
                          <th>Customer Care Phone</th>
                          <td>1800 890 1222</td> </tr>

                      </tbody>

                    </table>
                  </div>
                </div>
              }
              {
                activeTabs === 2 &&

                <div className="tabcontent">
                  <div className="row">
                    <div className="col-md-8">
                      <h3>Customer Question & Answers</h3>
                      <br>
                      </br>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="imagerev">
                          <div className="rounded-circle">
                            <img src="https://nest.botble.com/storage/customers/7-150x150.jpg" alt="" />
                          </div>
                          <span className='text-p d-block text-center font-weight-bold'>Sienna</span>
                        </div>
                        <div className="info-rev pl-5">
                          <div className="d-flex align-items-center">
                            <h5 className='text-b'>January 7 , 2024 at 03:20 pm</h5>
                            <div className="ml-auto rat">
                              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </div>
                          </div>

                          <p>Tasty and easy to make but Product is good but sometimes maggi comes broken so i don't like it but if you like broken maggie then you can buy</p>
                        </div>

                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="imagerev">
                          <div className="rounded-circle">
                            <img src="https://nest.botble.com/storage/customers/5-150x150.jpg" alt="" />
                          </div>
                          <span className='text-p d-block text-center font-weight-bold'>Gaetano</span>
                        </div>
                        <div className="info-rev pl-5">
                          <div className="d-flex align-items-center">
                            <h5 className='text-b'>
                              4 months ago</h5>
                            <div className="ml-auto rat">
                              <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                            </div>
                          </div>

                          <p>Tasty and easy to make but Product is good but sometimes maggi comes broken so i don't like it but if you like broken maggie then you can buy</p>
                        </div>

                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="imagerev">
                          <div className="rounded-circle">
                            <img src="https://nest.botble.com/storage/customers/6-150x150.jpg" alt="" />
                          </div>
                          <span className='text-p d-block text-center font-weight-bold'>Vincent</span>
                        </div>
                        <div className="info-rev pl-5">
                          <div className="d-flex align-items-center">
                            <h5 className='text-b'>January 7 , 2024 at 03:20 pm</h5>
                            <div className="ml-auto rat">
                              <Rating name="half-rating-read" defaultValue={3} precision={0.5} readOnly />
                            </div>
                          </div>

                          <p>Tasty and easy to make but Product is good but sometimes maggi comes broken so i don't like it but if you like broken maggie then you can buy</p>
                        </div>

                      </div>
                      <div className="card p-3 reviewsCard flex-row">
                        <div className="imagerev">
                          <div className="rounded-circle">
                            <img src="https://nest.botble.com/storage/customers/2-150x150.jpg" alt="" />
                          </div>
                          <span className='text-p d-block text-center font-weight-bold'> D'Amore</span>
                        </div>
                        <div className="info-rev pl-5">
                          <div className="d-flex align-items-center">
                            <h5 className='text-b'>
                              4 months ago</h5>
                            <div className="ml-auto rat">
                              <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            </div>
                          </div>

                          <p>Tasty and easy to make but Product is good but sometimes maggi comes broken so i don't like it but if you like broken maggie then you can buy</p>
                        </div>

                      </div>
                      <br>
                      </br>
                      <div className='reviewform'>
                        <h4>Add a review</h4> <br></br>
                        <div className="form-group">
                          <textarea className='form-control' placeholder='Write a review'></textarea>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="text" className='form-control' placeholder='Name' />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input type="email" className='form-control' placeholder='Email' />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="text" className='form-control' placeholder='Website' />
                        </div>

                        <div className="form-group">
                          <Button className='btnfilter btn-lg'>Submit Review</Button>
                        </div>



                      </div>

                    </div>
                    <div className="col-md-4 pl-5">
                      <h4>Customer Reviews</h4>
                      <br />
                      <div className="d-flex align-items-center mt-2">
                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        <strong className='str'>4.8 out of 5</strong>
                      </div>
                      <br />
                      <div className="box-pro d-flex align-items-center ">
                        <span className='mr-3'>5 Star</span>
                        <div class="progress" style={{ width: '85%', height: '20px' }}>

                          <div class="progress-bar bg-success" style={{ width: '85%', height: '20px' }}>85%</div>
                        </div>
                      </div>
                      <div className="box-pro d-flex align-items-center ">
                        <span className='mr-3'>4 Star</span>
                        <div class="progress" style={{ width: '85%', height: '20px' }}>

                          <div class="progress-bar bg-success" style={{ width: '65%', height: '20px' }}>65%</div>
                        </div>
                      </div>
                      <div className="box-pro d-flex align-items-center ">
                        <span className='mr-3'>3 Star</span>
                        <div class="progress" style={{ width: '85%', height: '20px' }}>

                          <div class="progress-bar bg-success" style={{ width: '45%', height: '20px' }}>45%</div>
                        </div>
                      </div>
                      <div className="box-pro d-flex align-items-center ">
                        <span className='mr-3'>2 Star</span>
                        <div class="progress" style={{ width: '85%', height: '20px' }}>

                          <div class="progress-bar bg-success" style={{ width: '40%', height: '20px' }}>40%</div>
                        </div>
                      </div>
                      <div className="box-pro d-flex align-items-center ">
                        <span className='mr-3'>1 Star </span>
                        <div class="progress" style={{ width: '85%', height: '20px' }}>

                          <div class="progress-bar bg-success" style={{ width: '35%', height: '20px' }}>35%</div>
                        </div>
                      </div>

                    </div>




                  </div>


                </div>

              }

            </div>
          </div>
          <br />

          <div className="relatedProducts pt-5 pb-4">
            <h2 className='hd mb-0 mt-0'>Related Products</h2>
            <br />
            <Slider {...related} className='prodSlider'>
              <div className="item">
                <Products tag="new" />
              </div>
              <div className="item">
                <Products tag="best" />
              </div>
              <div className="item">
                <Products tag="new" />
              </div>
              <div className="item">
                <Products tag="beauty" />
              </div>
              <div className="item">
                <Products tag="new" />
              </div>
              <div className="item">
                <Products tag="sale" />
              </div>
              <div className="item">
                <Products tag="new" />
              </div>

            </Slider>

          </div>
        </div>



      </div >


    </>
  )

}

export default DetailsPage
