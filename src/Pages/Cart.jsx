import React from 'react';
import { Link } from 'react-router-dom';
import Berry from '../Assets/berry.jpg'
import Rating from '@mui/material/Rating';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useState } from 'react';
import { Button } from '@mui/material';
import Quantitybox from '../Components/Quantitybox';
import Header from '../Components/Header';
const Cart = () => {
   
    return (
        <>
            <div className="breadcrumbWrapper mb-4">
                <div className="container-fluid">
                    <ul className="breadcrumb">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link>Shop</Link></li>
                        <li><Link>Cart</Link></li>
                    </ul>

                </div>
            </div>
            <section className='cartSection mb-5'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="d-flex align-items-center w-100">
                                <div className="left">
                                    <h1 className='hd mb-0'>Your Cart</h1>
                                    <p>There are <span className='text-p'> 3 </span> products in your cart</p>
                                </div>
                                <span className="spancart d-flex align-items-center cursor"><DeleteOutlineOutlinedIcon />Clear Cart</span>


                            </div>
                            <div className="cartWrapper mt-4">
                                <div className="table-responsive">
                                    <table className='table'>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>UnitPrice</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="imgcart align-items-center">
                                                            <img src={Berry} className='w-100' alt="" />
                                                        </div>
                                                        <div className="info-cart">
                                                            <Link><h4> Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                            <span className='text-right'>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span>$2.51</span></td>
                                                <td>
                                                <Quantitybox/>
                                                </td>
                                                <td><span className='text-p'>$2.51</span></td>
                                                <td><span className='cursor'><DeleteOutlineOutlinedIcon/></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="imgcart align-items-center">
                                                            <img src={Berry} className='w-100' alt="" />
                                                        </div>
                                                        <div className="info-cart">
                                                            <Link><h4> Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                            <span className='text-right'>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span>$2.51</span></td>
                                                <td>
                                                   <Quantitybox/>
                                                </td>
                                                <td><span className='text-p'>$2.51</span></td>
                                                <td><span className='cursor'><DeleteOutlineOutlinedIcon/></span></td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="d-flex">
                                                        <div className="imgcart align-items-center">
                                                            <img src={Berry} className='w-100' alt="" />
                                                        </div>
                                                        <div className="info-cart">
                                                            <Link><h4> Nestle Original Coffee-Mate Coffee Creamer</h4></Link>
                                                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                                                            <span className='text-right'>(4.5)</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span>$2.51</span></td>
                                                <td>
                                                <Quantitybox/>
                                                </td>
                                                <td><span className='text-p'>$2.51</span></td>
                                                <td><span className='cursor'><DeleteOutlineOutlinedIcon/></span></td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-md-5 pl-5 checkout">
                                <div className="card p-4">
                                    <div className="d-flex align-items-center mb-4">
                                        <h5 className='mb-0 text-b'>Subtotal</h5>
                                        <h3 className='ml-auto mb-0'><span className='text-p'>$12.31</span></h3>

                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <h5 className='mb-0 text-b'>Shipping</h5>
                                        <h3 className='ml-auto mb-0'>Free</h3>

                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <h5 className='mb-0 text-b'>Estimate for</h5>
                                        <h3 className='ml-auto mb-0'>United Kingdom</h3>

                                    </div>
                                    <div className="d-flex align-items-center mb-4">
                                        <h5 className='mb-0 text-b'>Total</h5>
                                        <h3 className='ml-auto mb-0'><span className='text-p'>$12.31</span></h3>

                                    </div>
                                    <br></br>
                                    <Button className="btnfilter"r>Checkout</Button>
                                </div>
                                


                            </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Cart;
