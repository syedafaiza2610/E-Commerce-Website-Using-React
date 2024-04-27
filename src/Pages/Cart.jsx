import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Berry from '../Assets/berry.jpg'
import Rating from '@mui/material/Rating';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Button } from '@mui/material';
import Quantitybox from '../Components/Quantitybox';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Header from '../Components/Header';
import { MyContext } from '../App';
import { useContext } from 'react';
import axios from 'axios';

const Cart = () => {

    const [cartItems, setCartItems] = useState([])
    const context = useContext(MyContext);

    useEffect(() => {
        getCartData("http://localhost:4000/cartItems");
    }, []);

    const getCartData = async (url) => {
        try {
            await axios.get(url).then((response) => {
                setCartItems(response.data);
            })

        } catch (error) {
            console.log(error.message);
        }
    }
    const deleteItem = async (id) => {
        let response = await axios.delete(`http://localhost:4000/cartItems/${id}`);
        if (response !== null) {
            getCartData("http://localhost:4000/cartItems");
            context.removeItemsFromCart();

        }

    }

    const emptyCart = () => {
        let response = null;
        cartItems.length !== 0 &&
            cartItems.map((item) => {
                response = axios.delete(`http://localhost:4000/cartItems/${parseInt(item.id)}`);
            })
        if (response !== null) {
            getCartData("http://localhost:4000/cartItems");
        }

        context.emptyCart();
    }


    const updateCart = (items) => {
        // console.log(items)
        setCartItems(items)
    }




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
                                <span className="spancart d-flex align-items-center cursor" onClick={() => emptyCart()}> <DeleteOutlineOutlinedIcon />Clear Cart</span>


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
                                            {
                                                cartItems.length !== 0 &&
                                                cartItems.map((item, index) => {
                                                    return (
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex">
                                                                    <div className="imgcart align-items-center">
                                                                        <img src={item.catImg + '?im=Resize=(100,100)'} className='w-100' alt="" />
                                                                    </div>
                                                                    <div className="info-cart">
                                                                        <Link to={`/product/${item.id}`}><h4>{item.productName}</h4></Link>
                                                                        <Rating name="half-rating-read" value={parseFloat(item.rating)} precision={0.5} readOnly />
                                                                        <span className='text-right'>{parseFloat(item.rating)}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td><span>Rs:  {parseInt(item.price.split(",").join(""))}</span></td>
                                                            <td>
                                                                <Quantitybox item={item} cartItems={context.cartItems} index={index} updateCart={updateCart} />
                                                            </td>
                                                            <td>
                                                                <span className='text-p'>Rs. {parseInt(item.price.split(",").join("")) * parseInt(item.quantity)}</span>
                                                            </td>
                                                            <td><span className='cursor' onClick={() => deleteItem(item.id)}><DeleteOutlineOutlinedIcon /></span></td>
                                                        </tr>

                                                    )
                                                })
                                            }


                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <br></br>
                            <div className='d-flex align-items-center'>
                                <Link to="/">
                                    <Button className='btnfilter'>
                                        <KeyboardBackspaceIcon /> Continue Shopping</Button>

                                </Link>
                            </div>


                        </div>
                        <div className="col-md-5 pl-5 checkout">
                            <div className="card p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <h5 className='mb-0 text-b'>Subtotal</h5>
                                    <h3 className='ml-auto mb-0'><span className='text-p'>  {
                                        cartItems.length !== 0 &&
                                        cartItems?.map(item =>
                                            parseInt(item.price.split(",").join("")) * item.quantity).reduce((total, value) => total + value, 0)
                                    }</span></h3>

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
                                    <h3 className='ml-auto mb-0'><span className='text-p'> {
                                        cartItems.length !== 0 &&
                                        cartItems?.map(item =>
                                            parseInt(item.price.split(",").join("")) * item.quantity).reduce((total, value) => total + value, 0)
                                    }</span></h3>

                                </div>
                                <br></br>
                                <Button className="btnfilter">Checkout</Button>
                            </div>



                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Cart;
