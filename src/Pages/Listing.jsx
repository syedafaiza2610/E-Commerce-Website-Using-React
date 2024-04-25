import React from 'react'
import Header from '../Components/Header'
import { Link, useParams } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'
import Products from '../Components/Products'
import { Button } from '@mui/material'
import { useState , useEffect } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';

function Listing( props ) {
    const [data, setData] = useState([]);
    var itemsData = [];

    const {id} = useParams();

    // useEffect(() => {
    //     // alert(props.single)
    // //    alert(props.single)
    // //    console.log(props.single)
    // }, []);
    useEffect(() => {

        props.data.length !== 0 &&
            props.data.map((item, index) => {
                if (props.single === true) {

                    if (item.cat_name.toLowerCase() == id.toLowerCase()) {
                        item.items.length !== 0 &&
                            item.items.map((item_) => {
                                item_.products.map((item__, index__) => {
                                    // console.log(item_)
                                     itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })
                                })

                            })


                    }
                }
         
                else {
                    item.items.length !== 0 &&
                        item.items.map((item_, index_) => {
                            // console.log(item_.cat_name.replace(/[^A-Za-z]/g,"-").toLowerCase())
                            if (item_.cat_name.split(' ').join('-').toLowerCase() == id.split(' ').join('-').toLowerCase()) {
                                item_.products.map((item__, index__) => {

                                    itemsData.push({ ...item__, parentCatName: item.cat_name, subCatName: item_.cat_name })

                                })

                            }
                        })
                }

            })




        const list2 = itemsData.filter((item, index) => itemsData.indexOf(item) === index); // filter duplicate data

        setData(list2);

        window.scrollTo(0,0);

    }, [id])





    const [isopendropdown, setisopendropdown] = useState(false)
    const [isopendropdown2, setisopendropdown2] = useState(false)
    return (
        <>
           

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
                                {
                                    data.length!==0 &&
                                    <Sidebar data={props.data}/>
                                }
                            </div>
                            <div className="col-md-9 right-content homeProducts pt-0">
                                <div className="topStrip d-flex align-items-center">
                                    <p className='mb-0'>We Found <span className='text'> {data.length} </span> items for you!</p>
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
                                {
                                        data.length !== 0 &&
                                        data.map((item, index) => {
                                            return (
                                                <div className='item2' key={index}>
                                                    <Products tag={item.type} item={item} />
                                                </div>
                                            )
                                        })
                                    }

                                    


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