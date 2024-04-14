import React, { useEffect, useRef, useState } from 'react'
import Logo2 from "../Assets/logo2..png"
import { FaSearch } from "react-icons/fa";
import Dropdown from './Dropdown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import NavbarDarkExample from './location';
import Location from './location';
import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import Navbar from './Navbar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';



function Header() {
  
  
    return (
        <>
        <div className="headerWrapper">
        <div className="header">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-2">
                        <div className='logo'><img className='logoImg' src={Logo2} alt="" />
                            <h5>SHOPSAVVY</h5></div>
                    </div>
                    <div className="col-sm-5">
                        <div className="headerSearch d-flex align-items-center ">
                            <Dropdown />
                            <div className="search">
                                <input type="text" placeholder='Search here' />
                                <FaSearch className='icon cursor' size={20} />
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-5 d-flex align-items-center country">
                        <div className="ml-auto d-flex align-items-center  rightside">
                            <div className="countrywrapper">
                                <Location />
                            </div>
                            <div className='listing'>
                            <ul className='list list-inline mb-0 headerTabs'>
                                <li className='list-inline-item'>
                                    <span className='spn'><FavoriteBorderOutlinedIcon size={20}/> Wishlist
                                    </span>
                                
                                    </li>
                                    <li className='list-inline-item'>
                                    <span className='spn'><BsCart3 size={20}/> Cart
                                    <span className='badge rounded-circle'>6</span>
                                    </span>
                                    </li>
                                    <li className='list-inline-item'>
                                    <span className='spn'><FaRegCircleUser size={20}/> Account
                                    </span>
                                    
                                    </li>
                            </ul>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
           
        </div >
         <Navbar/>
         </div>
         </>
    )
}

export default Header
