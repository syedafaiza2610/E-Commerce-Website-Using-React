
import React from 'react'
import Logo2 from "../Assets/logo2..png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined';
import AppStore from "../Assets/app-store.jpg"
import Google from '../Assets/google.jpg'
import { Link } from 'react-router-dom';
import Payment from '../Assets/payment.png'
import { MdOutlineHeadphones } from "react-icons/md";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Newsletter from '../Components/Newsletter';
import NewsletterPic from '../Assets/news3.png'


const Footer = () => {
  return (
    <>
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
    <div className="footerWrapper">

      <div className="footerBoxes">
        <div className="container-fluid">

          <div className="row">
            <div className="col">
              <div className="box-footer d-flex align-items-center w-100">
                <span><LocalOfferOutlinedIcon /></span>
                <div className="info-footer">
                  <h4>Best offers</h4>
                  <p>Order $50 or more</p>
                </div>

              </div>

            </div>
            <div className="col">
              <div className="box-footer d-flex align-items-center w-100">
                <span><AirportShuttleOutlinedIcon /></span>
                <div className="info-footer">
                  <h4>Free delivery</h4>
                  <p>24/7 services</p>
                </div>

              </div>

            </div>
            <div className="col">
              <div className="box-footer d-flex align-items-center w-100">
                <span><AssignmentOutlinedIcon /></span>
                <div className="info-footer">
                  <h4>Great Daily deal</h4>
                  <p>When you signup</p>
                </div>

              </div>

            </div>
            <div className="col">
              <div className="box-footer d-flex align-items-center w-100">
                <span><DiscountOutlinedIcon /></span>
                <div className="info-footer">
                  <h4>Discount</h4>
                  <p>Mega Discount</p>
                </div>

              </div>

            </div>
            <div className="col">
              <div className="box-footer d-flex align-items-center w-100">
                <span><AssignmentReturnOutlinedIcon /></span>
                <div className="info-footer">
                  <h4>Easy return</h4>
                  <p>Within 30 days</p>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 part1-footer">

              <div className='logo'><img className='logoImg' src={Logo2} alt="" />
                <h5>SHOPSAVVY</h5></div>
              <p>Awesome multipurpose e-commerce store</p>
              <br></br>
              <p><LocationOnOutlinedIcon />Address</p>
              <p><PhoneInTalkOutlinedIcon /><strong>Call us </strong>:(+91)-540-025-123456</p>
              <p><AttachEmailOutlinedIcon /><strong>Email</strong>:shopsavvy@sale.com</p>
              <p><WatchLaterOutlinedIcon /><strong>Hours</strong>:10:00-18:00 Mon-Sat</p>
            </div>
            <div className="col-md-6 part2-footer">
              <div className="row">
                <div className="col">
                  <h3>Company</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>Delivery Information</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                    <li><a href='#'>Terms & Conditions</a></li>
                    <li><a href='#'>Contact us</a></li>
                    <li><a href='#'>Support Center</a></li>

                  </ul>
                </div>
                <div className="col">
                  <h3>Account</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li><a href='#'>Signin</a></li>
                    <li><a href='#'>View Cart</a></li>
                    <li><a href='#'>My Wishlist</a></li>
                    <li><a href='#'>Track My order</a></li>
                    <li><a href='#'>Help Ticket</a></li>
                    <li><a href='#'>Shopping Details</a></li>
                    <li><a href='#'>Compare Products</a></li>

                  </ul>
                </div>
                <div className="col">
                  <h3>Categories</h3>
                  <ul className="footer-list mb-sm-5 mb-md-0">
                    <li><a href='#'>Men</a></li>
                    <li><a href='#'>Women</a></li>
                    <li><a href='#'>Accessories</a></li>
                    <li><a href='#'>Shoes</a></li>
                    <li><a href='#'>Denim</a></li>
                    <li><a href='#'>Dress</a></li>

                  </ul>

                </div>


              </div>
            </div>
            <div className="col-md-3 part3-footer">
              <h3>Install App</h3>
              <br></br>
              <p>From App Store or Google Play</p>
              <div className="d-flex">
                <a>
                  <img src={AppStore} alt="" width={150} />
                  <img src={Google} className='mx-2' width={150} alt="" /></a>
              </div>
              <br>
              </br>
              <p>Secured Payment Gateways</p>
              <img src={Payment} alt="" />


            </div>
          </div>
          <hr></hr>
          <div className="row lastStrip">
            <div className="col-md-3">
              <p>Copyright © 2024 Shopsavvy Multipurpose E-Commerce all rights reserved.</p>

            </div>
            <div className="col-md-6 d-flex">
              <div className="m-auto d-flex align-items-center">
                <div className="phone  d-flex align-items-center">
                  <span><MdOutlineHeadphones size={30} /></span>
                  <div className="info ml-3">
                    <h5 className='mb-0'>021-1234567</h5>
                    <p className='mb-0'>24/7 Support Center</p>

                  </div>

                </div>

              </div>
              <div className="m-auto d-flex align-items-center">
                <div className="phone  d-flex align-items-center">
                  <span><MdOutlineHeadphones size={30} /></span>
                  <div className="info ml-3">
                    <h5 className='mb-0'>021-1234567</h5>
                    <p className='mb-0'>24/7 Support Center</p>

                  </div>

                </div>

              </div>
            </div>


            <div className="col-md-3 part3-footer">
              <div className="d-flex align-items-center">
                <h5>Follow us</h5>
                <ul className='list list-inline '>
                  <li className='list-inline-item'>
                    <a href='#'><FacebookOutlinedIcon/></a>

                  </li>
                  <li className='list-inline-item'>
                  <a href='#'><TwitterIcon/></a>

                  </li>
                  <li className='list-inline-item'>
                  <a href='#'><InstagramIcon/></a>

                  </li>
                  <li className='list-inline-item'>
                  <a href='#'><YouTubeIcon/></a>

                  </li>
                  <li className='list-inline-item'>
                  <a href='#'><PinterestIcon/></a>

                  </li>

                </ul>

              </div>


            </div>



          </div>
        </div>
      </footer >
    </div >
    </>
  )
}

export default Footer
