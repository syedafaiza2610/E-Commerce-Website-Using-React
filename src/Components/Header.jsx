import React, { useState } from 'react'
import Logo2 from "../Assets/logo2..png"
import { FaSearch } from "react-icons/fa";
import Dropdown from './Dropdown';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';



function Header() {
    // const [Categories, setcategories] = useState(
    //     'All Categories','Clothing','Beauty','Foot Wear','Baking Items','Bags','Pets',"Abaya's", 'Jwellery','Hijabs'
    // )
    return (
        
        <div className="header">
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-sm-2">
                        <div className='logo'><img className='logoImg' src={Logo2} alt="" />
                            <h5>SHOPSAVVY</h5></div>
                    </div>
                    <div className="col-sm-5">
                        <div className="headerSearch d-flex align-items-center ">
                            <Dropdown />
                            <div className="search">
                                <input type="text" placeholder='Search here' />
                                <FaSearch className='icon cursor' size={20} />
                            </div>

                        </div>
                    </div>
                    <div 
                    className="col-sm-5 country">
                        <Dropdown/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header
