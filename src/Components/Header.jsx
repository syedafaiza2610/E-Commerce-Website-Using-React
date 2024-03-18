import React from 'react'
import Logo2 from "../Assets/logo2..png"
import { FaSearch } from "react-icons/fa";


function Header() {
  return (
    <div className="header">
    <div className='container-fluid'>
        <div className="row">
            <div className="col-sm-2">
                <img className='logoImg' src={Logo2} alt="" />
            </div>
            <div className="col-sm-5">
             <div className="headerSearch d-flex align-items-center ">
                <div className="selectDropdown cursor">
                    All Categories    
                </div>
                <div className="search">
                    <input type="text" placeholder='Search here'  /> 
                    <FaSearch className='icon cursor' size={20} />
                </div>


            </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Header
