import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { FiGrid } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Home from '../Pages/Home';
import { MdOutlineHeadphones } from "react-icons/md";
import Mega from '../Assets/basket.jpg'
import { useState } from 'react';

function Navbar(props) {

    const [navData, setnavData] = useState([]);
    useEffect(() => {
        setnavData(props.data)
    }, []);


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
                                    <Button><Link to={"/"}>Home</Link></Button></li>
                                {
                                    navData && navData.length !== 0 && navData.map((item, index) => {
                                        if (!item || !item.cat_name || !Array.isArray(item.items)) {
                                            return null;
                                        }
                                        return (
                                            <li className='list-inline-item' key={index}>
                                                <Button onClick={() => sessionStorage.setItem('cat', item.cat_name.toLowerCase())}>
                                                    <a href={`/cat/${item.cat_name.toLowerCase()}`}>{item.cat_name}</a>
                                                </Button>
                                                {
                                                    item.items.length !== 0 &&
                                                    <div className="dropdown_menu">
                                                        <ul>
                                                            {item.items.map((item_, index_) => {
                                                                if (!item_ || !item_.cat_name) {
                                                                    return null;
                                                                }
                                                                return (
                                                                    <li key={index_}>
                                                                        <Button>
                                                                            <a href={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}>{item_.cat_name}</a>
                                                                        </Button>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                }
                                            </li>
                                        )
                                    })
                                }







                                <li className='list-inline-item'>
                                    <Button><Link to="/product/details">About</Link></Button>
                                </li>
                                {/* <li className='list-inline-item'>
                                    <Button><Link to="/shop">Shop</Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="">Shop Grid-Right Sidebar</Link></Button></li>
                                            <li><Button><Link to="">Shop - Wide</Link></Button></li>
                                            <li><Button><Link to="">Wishlist</Link></Button></li>
                                            <li><Button><Link to="/cart">Cart</Link></Button></li>
                                            <li><Button><Link to="">Checkout</Link></Button></li>
                                            <li><Button><Link to="">Compare</Link></Button></li>

                                        </ul>
                                    </div>
                                </li> */}
                                <li className='list-inline-item'>
                                    <Button><Link to="">Vendors</Link></Button>
                                    <div className="dropdown_menu">
                                        <ul>
                                            <li><Button><Link to="">Vendor 1</Link></Button></li>
                                            <li><Button><Link to="">Vendor 2</Link></Button></li>
                                            <li><Button><Link to="">Vendor 3</Link></Button></li>
                                            <li><Button><Link to="">Vendor 4</Link></Button></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='list-inline-item position-static'>
                                    <Button><Link to="">Mega Menu <IoIosArrowDown /></Link></Button>
                                    <div className="dropdown_menu mega_Menu w-100">
                                        <div className="row">
                                            {
                                                navData && navData.length !== 0 && navData.map((item, index) => {
                                                    if (!item || !item.cat_name || !Array.isArray(item.items)) {
                                                        return null;
                                                    }
                                                    return (
                                                        <div className='col'>
                                                            <a href={`/cat/${item.cat_name.toLowerCase()}`}> <h4 className='text-p text-capitalize'>{item.cat_name}</h4></a>
                                                            {
                                                                item.items.length !== 0 &&
                                                                <ul className='mt-4 mb-0'>
                                                                    {
                                                                        item.items.map((item_, index_) => {
                                                                            // console.log(item_)
                                                                            return (
                                                                                <li>
                                                                                    <Link to={`/cat/${item.cat_name.toLowerCase()}/${item_.cat_name.replace(/\s/g, '-').toLowerCase()}`}>{item_.cat_name}</Link>
                                                                                </li>
                                                                            )
                                                                        })
                                                                    }
                                                                </ul>
                                                            }
                                                        </div>
                                                    )
                                                })
                                            }
                                            {/* <div className="col">
                                                <h4 className='text-p'>Fruits & Vegetables</h4>
                                                <ul className="mt-3 mb-0">

                                                    <li><Link>Meat & Poultry</Link></li>
                                                    <li><Link>Fresh Vegetables</Link></li>
                                                    <li><Link>Herbs & Seasonings</Link></li>
                                                    <li><Link>Cuts & Sprouts</Link></li>
                                                    <li><Link>Exotic Fruits & Veggies</Link></li>
                                                    <li><Link>Packaged Produce</Link></li>

                                                </ul>
                                            </div>


                                            <div className="col">
                                                <h4 className='text-p'>Breakfast & Dairy</h4>
                                                <ul className="mt-3 mb-0">

                                                    <li><Link>Milk & Flavoured Milk</Link></li>
                                                    <li><Link>Butter and Margarine</Link></li>
                                                    <li><Link>Eggs Substitutes</Link></li>
                                                    <li><Link>Marmalades</Link></li>
                                                    <li><Link>Sour Cream</Link></li>
                                                    <li><Link>Cheese</Link></li>

                                                </ul>
                                            </div>
                                            <div className="col">
                                                <h4 className='text-p'>Meat & Seafood</h4>

                                                <ul className="mt-3 mb-0">

                                                    <li><Link>Breakfast Sausage</Link></li>
                                                    <li><Link>Dinner Sausage</Link></li>
                                                    <li><Link>Chicken</Link></li>
                                                    <li><Link>Sliced Deli Meat</Link></li>
                                                    <li><Link>Wild Caught Fillets</Link></li>
                                                    <li><Link>Crab and Shellfish</Link></li>

                                                </ul>
                                            </div> */}
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
                                            <li><Button><Link to="/product/details">About us</Link></Button></li>
                                            <li><Button><Link to="/listing">Products</Link></Button></li>
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
                                {/* <li className='list-inline-item'>
                                    <Button><Link to="/contact">Contact</Link></Button>
                                </li> */}

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
