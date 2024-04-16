import React from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Product from './Products'
import Products from '../Components/Products'
import { Button } from '@mui/material'

function Listing() {
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
                                        <div className="tab">
                                            <Button className='bttn'>Show : 50</Button>
                                        </div>
                                        <div className="tab">
                                            <Button className='bttn'>Sort by : Features</Button>
                                            {/* <ul className='dropdownMenu'>
                                                <li><Button className='align-align-items-center'>My Account</Button></li>

                                            </ul> */}
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