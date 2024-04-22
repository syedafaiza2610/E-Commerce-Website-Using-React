import React, { useEffect, useRef, useState } from 'react'
import Logo2 from "../Assets/logo2..png"
import { FaSearch } from "react-icons/fa";
import Dropdown from './Dropdown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { FaCodeCompare } from "react-icons/fa6";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Navbar from './Navbar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdOutlineLocationOn } from "react-icons/md";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button from '@mui/material/Button';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';



function Header() {
    const [Categories, setCategories] = useState([
        'Milk & Dairy',
        'Drinks',
        'Clothing & Beauty',
        'Fresh Seafood',
        'Pet Food',
        'Fast Food',
        'Baking Material',
        'Vegetables',
        'Fresh Fruits',
        'Bread & juice'
    ])
    const countryList = [];
    useEffect(() => {
        getCountry('https://freetestapi.com/api/v1/countries')

    }, [])
    const getCountry = async (url) => {
        try {
            await axios.get(url).then((res) => {
                if (res !== null) {
                    res.data.map((item, index) => {
                        countryList.push(item.name)
                        console.log(item.name)
                    })

                }
            })
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const [isopendropdown, setisopendropdown] = useState(false)


    return (
        <>
            <div className="headerWrapper">
                <div className="header">
                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-sm-2">
                                <Link><div className='logo'><img className='logoImg' src={Logo2} alt="" />
                                    <h5>SHOPSAVVY</h5></div></Link>
                            </div>
                            <div className="col-sm-5">
                                <div className="headerSearch d-flex align-items-center ">
                                    <Dropdown data={Categories} placeholder={'All Categories'} icon={false} />
                                    <div className="search">
                                        <input type="text" placeholder='Search here' />
                                        <FaSearch className='icon cursor' size={20} />
                                    </div>
    

                                </div>
                                
                            </div>
                            <div className="col-sm-5 d-flex align-items-center country">
                                <div className="d-flex align-items-center country2">
                                    <div className="countrywrapper">
                                        <Dropdown data={countryList} placeholder={'Your Location'} icon={<MdOutlineLocationOn className='locationicn' />} />
                                    </div>
                                    <ClickAwayListener onClickAway={() => setisopendropdown(false)}>
                                        <div className='listing'>
                                            <ul className='list list-inline mb-0 headerTabs'>
                                                <li className='list-inline-item'>
                                                    <span><FaCodeCompare size={20} />
                                                        <span className='badge rounded-circle'>3</span>
                                                        Compare
                                                    </span>

                                                </li>
                                                <li className='list-inline-item'>
                                                    <span><FavoriteBorderOutlinedIcon size={20} />
                                                        <span className='badge rounded-circle'>2</span>
                                                        Wishlist
                                                    </span>

                                                </li>
                                                <li className='list-inline-item'>
                                                    <span><ShoppingCartOutlinedIcon size={20} />
                                                        <span className='badge rounded-circle'>2</span>
                                                        Cart
                                                    </span>

                                                </li>
                                                <li className='list-inline-item' >

                                                    <span onClick={() => setisopendropdown(!isopendropdown)}><PersonOutlineOutlinedIcon size={20} />Account
                                                    </span>
                                                    {
                                                        isopendropdown !== false &&
                                                        <ul className='dropdownMenu'>
                                                            <li><Button> <span><PersonOutlineOutlinedIcon /></span>  My Account</Button></li>
                                                            <li><Button><span><MyLocationOutlinedIcon /> </span> Order Tracking</Button></li>
                                                            <li><Button><span><FavoriteBorderOutlinedIcon /></span> Wishlist</Button></li>
                                                            <li><Button><span><SettingsOutlinedIcon /></span>Setting</Button></li>
                                                            <li><Button><span><ExitToAppOutlinedIcon /></span>SignOut</Button></li>

                                                        </ul>
                                                    }



                                                </li>


                                            </ul>
                                        
                                        </div>
                                        </ClickAwayListener>

                                </div>
                            </div>


                        </div>


                    </div>

                </div >
                <Navbar />
            </div>
        </>
    )
}

export default Header
