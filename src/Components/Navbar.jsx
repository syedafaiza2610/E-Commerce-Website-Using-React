import React from 'react'
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import { MdOutlineHeadphones } from "react-icons/md";
function Navbar() {
    return (
        <div className='nav d-flex align-items-center'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3 part1 d-flex align-items-center">
                        <Button className='btn' ><FiGrid size={20} /> <span className='head'>Browse All Categories</span> <IoIosArrowDown /></Button>


                    </div>
                    <div className="col-sm-7 part2">
                        <nav>
                            <ul className=' list list-inline mb-0'>
                                <li className='list-inline-item'>
                                    <Button><Link  to="/home">Home</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link  to="/about">About</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link  to="/shop">Shop</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link  to="/listing">Vendors <IoIosArrowDown /></Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link  to="/contact">Mega Menu</Link></Button>
                                </li>
                                <li className='list-inline-item'>
                                    <Button><Link to="/register">Register</Link></Button>
                                    <li className='list-inline-item'>
                                    <Button><Link to="/login">Login</Link></Button>
                                </li>
                                </li>
                            </ul>
                            
                        </nav>



                    </div>
                    <div className="col-sm-2 part3 d-flex align-items-center">
                        <div className="phone  d-flex align-items-center">
                            <span><MdOutlineHeadphones size={30}/></span>
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
