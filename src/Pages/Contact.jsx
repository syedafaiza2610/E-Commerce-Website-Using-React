import React from 'react'
import Header from '../Components/Header'
import Newsletter from '../Components/Newsletter'
import NewsletterPic from '../Assets/news3.png'
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
    <Header/>
    
    <section className='newsLetterSection'>
        <div className="container-fluid">
          <div className="box-news d-flex align-align-items-center">
            <div className="infonews">
              <h2>Stay home & get your daily needs from our shop</h2>
              <p>Start Your daily shopping with <Link>Shopsavvy</Link></p>
              <Newsletter/>


            </div>
            <div className="Imgnews">
              <img src={NewsletterPic} alt="" />
            </div>
            
             
          </div>
        </div>

      </section>
      </>
  )
}

export default Contact