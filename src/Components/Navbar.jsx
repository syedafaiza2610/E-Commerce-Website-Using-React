import React from 'react'
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import { MdOutlineHeadphones } from "react-icons/md";
import Mega from'../Assets/mega.png'
function Navbar() {
    return (
        <div className='nav d-flex align-items-center'>
            <div className="container-fluid">
                <div className="row position-relative">
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button className='btn' ><FiGrid size={20} /> <span className='head'>Browse All Categories</span> <IoIosArrowDown /></Button>


                    </div>
                    <div className="col-sm-7 part2 position-static">
                        <nav>
                            <ul className=' list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Button><Link to="/home">Home</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/about">About</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/shop">Shop</Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="/about">About us</Link></Button></li>
                                            <li><Button><Link to="/contact">Contact</Link></Button></li>
                                            <li><Button><Link to="/about">My Account</Link></Button></li>
                                            <li><Button><Link to="/login">Login</Link></Button></li>
                                            <li><Button><Link to="/register">Register</Link></Button></li>
                                            <li><Button><Link to="">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="">Reset Password</Link></Button></li>
                                            <li><Button><Link to="">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="">Term & Services</Link></Button></li>
                                            <li><Button><Link to="*">404 Page</Link></Button></li>
                                        
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/listing">Vendors</Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="/about">About us</Link></Button></li>
                                            <li><Button><Link to="/contact">Contact</Link></Button></li>
                                            <li><Button><Link to="/about">My Account</Link></Button></li>
                                            <li><Button><Link to="/login">Login</Link></Button></li>
                                            <li><Button><Link to="/register">Register</Link></Button></li>
                                            <li><Button><Link to="">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="">Reset Password</Link></Button></li>
                                            <li><Button><Link to="">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="">Term & Services</Link></Button></li>
                                            <li><Button><Link to="*">404 Page</Link></Button></li>
                                        
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item position-static'>
                                    <Button><Link to="">Mega Menu <IoIosArrowDown /></Link></Button>
                                    <div className="dropdown_menu mega_Menu w-100">
                                        <div className="row">
                                            <div className="col">
                                                <h4>Fruits & Vegetables</h4>
                                            </div>
                                            <div className="col">
                                                <h4>Fruits & Vegetables</h4>
                                            </div>
                                            <div className="col">
                                                <h4>Fruits & Vegetables</h4>
                                            </div>
                                            <div className="col">
                                                <img src={Mega} alt="" />
                                            </div>
                                        </div>
                                    
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="">Pages <IoIosArrowDown /></Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="/about">About us</Link></Button></li>
                                            <li><Button><Link to="/contact">Contact</Link></Button></li>
                                            <li><Button><Link to="/about">My Account</Link></Button></li>
                                            <li><Button><Link to="/login">Login</Link></Button></li>
                                            <li><Button><Link to="/register">Register</Link></Button></li>
                                            <li><Button><Link to="">Forgot Password</Link></Button></li>
                                            <li><Button><Link to="">Reset Password</Link></Button></li>
                                            <li><Button><Link to="">Purchase Guide</Link></Button></li>
                                            <li><Button><Link to="">Privacy Policy</Link></Button></li>
                                            <li><Button><Link to="">Term & Services</Link></Button></li>
                                            <li><Button><Link to="*">404 Page</Link></Button></li>
                                        
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/contact">Contact</Link></Button>
                                </li>

                            </ul>

                        </nav>



                    </div>
                    <div className="col-sm-2 part3 d-flex align-items-center">
                        <div className="phone  d-flex align-items-center ml-auto">
                            <span><MdOutlineHeadphones size={30} /></span>
                            <div className="info ml-3">
                                <h5 className='mb-0'>021-1234567</h5>
                                <p className='mb-0'>24/7 Support Center</p>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar
