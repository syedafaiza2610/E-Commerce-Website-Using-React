import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState , useEffect } from 'react';
import { Button } from '@mui/material';

const Quantitybox = (props) => {
    const [inputValue, setinputValue] = useState(1);
    const [cartItems, setcartItems] = useState([]);
    useEffect(() => {
        setcartItems(props.cartItems);
        //setinputValue(props.item.quantity)
    }, [props.cartItems])


    const updateCart=(items)=>{
        props.updateCart(items)
    }

   
    return (
        <>
            <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                <div className="counterSection mr-3">
                    <input type="number" value={inputValue} />
                    <span className='plus'
                   
                   onClick={
                    () => {
                        setinputValue(inputValue + 1);
                        const _cart = props.cartItems ?.map((cartItem, key) => {
                            return key === parseInt(props.index) ? { ...cartItem, quantity: inputValue + 1 } : {...cartItem}
                           
                        });
                            
                        updateCart(_cart);
                        setcartItems(_cart);
                       
                    }
                }      
                
                ><KeyboardArrowUpOutlinedIcon /></span>
                   
                <span className='minus'
                onClick={() => {
                    if (inputValue > 1) {
                        const newQuantity = inputValue - 1;
                        const updatedCart = props.cartItems.map((cartItem, index) => {
                            if (index === parseInt(props.index)) {
                                return { ...cartItem, quantity: newQuantity };
                            }
                            return cartItem;
                        });
                
                        updateCart(updatedCart);
                
                        setcartItems(updatedCart);
                
                        setinputValue(newQuantity);
                    }
                }}
                
                // onClick={() => {
                //     if (inputValue !== 1) {
                //         setinputValue(inputValue - 1);
                //     }
                    
                //     const _cart = props.cartItems ?.map((cartItem, key) => {
                //         return key === parseInt(props.index) ? { ...cartItem, quantity: cartItem.quantity !== 1 ? inputValue - 1 : cartItem.quantity } : {...cartItem}
                //     });
                    
                //     updateCart(_cart);
                //     setcartItems(_cart);
                // }}
                ><KeyboardArrowDownOutlinedIcon /></span>

                </div>
            </div>
        </>
    )
}

export default Quantitybox
