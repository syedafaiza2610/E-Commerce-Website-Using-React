import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Products from '../Components/Products'
import { Button } from '@mui/material'
import { useState } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

function Listing() {
    const [isopendropdown, setisopendropdown] = useState(false)
    const [isopendropdown2, setisopendropdown2] = useState(false)
    return (
        <>
            <Header />

            <div className="listingPage">
                <div className="container-fluid">
                    <div className="breadcrum">
                        <h1>Fashion</h1>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'>
                                <Link to={''}>Home</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={''}>Shop</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to={''}>Clothing</Link>
                            </li>

                        </ul>

                    </div>
                    <div className="listingData">
                        <div className="row">
                            <div className="col-md-3 SidebarWrapper">
                                <Sidebar />
                            </div>
                            <div className="col-md-9 right-content homeProducts pt-0">
                                <div className="topStrip d-flex align-items-center">
                                    <p className='mb-0'>We Found <span className='text'> 29 </span> items for you!</p>
                                    <div className="btns d-flex align-items-center">
                                        <div className="tab position-relative">
                                            <Button className='bttn'  onClick={() => setisopendropdown2(!isopendropdown2)}><GridViewIcon/>Show : 50</Button>
                                            {
                                                        isopendropdown2 !== false &&
                                            <ul className='dropdownMenu'>
                                                            <li><Button onClick={() => setisopendropdown2(false)} className='align-items-center'>50</Button></li>
                                                            <li><Button onClick={() => setisopendropdown2(false)}className='align-items-center'>100</Button></li>
                                                            <li><Button onClick={() => setisopendropdown2(false)}className='align-items-center'>150</Button></li>
                                                            <li><Button onClick={() => setisopendropdown2(false)}className='align-items-center'>2000</Button></li>
                                                            <li><Button onClick={() => setisopendropdown2(false)}className='align-items-center'>All</Button></li>
                                                      

                                                        </ul>
                                                   }
                                        </div>
                                        <div className="tab position-relative">
                                            <Button className='bttn'  onClick={() => setisopendropdown(!isopendropdown)}><FilterAltOutlinedIcon/>Features</Button>
                                            {
                                                        isopendropdown !== false &&
                                            <ul className='dropdownMenu'>
                                                            <li><Button onClick={() => setisopendropdown(false)} className='align-items-center'>Featured</Button></li>
                                                            <li><Button onClick={() => setisopendropdown(false)} classNameclassName='align-items-center'>Price:Low to High</Button></li>
                                                            <li><Button onClick={() => setisopendropdown(false)} classNameclassName='align-items-center'>Price:High to Low</Button></li>
                                                            <li><Button onClick={() => setisopendropdown(false)} classNameclassName='align-items-center'>Release Date</Button></li>
                                                            <li><Button onClick={() => setisopendropdown(false)} classNameclassName='align-items-center'>Avg. Rating</Button></li>
                                                      

                                                        </ul>
                                                   }
                                          
                                        </div>

                                    </div>

                                </div>
                                <div className="productRow pl-4">
                                    <div className="item2">
                                        <Products tag="new" />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products tag="sale"/>
                                    </div>
                                    <div className="item2">
                                        <Products tag="best" />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products tag="beauty"/>
                                    </div>
                                    <div className="item2">
                                        <Products tag="new" />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products tag="sale"/>
                                    </div>
                                    <div className="item2">
                                        <Products tag="best" />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products tag="beauty"/>
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>
                                    <div className="item2">
                                        <Products />
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Listing