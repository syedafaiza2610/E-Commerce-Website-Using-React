import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GiLargeDress } from "react-icons/gi";
import { GiLipstick } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";
import { MdCake } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { FaDog } from "react-icons/fa";
import { MdOutlineGirl } from "react-icons/md";
import { GiDiamondRing } from "react-icons/gi";
import { GiNinjaMask } from "react-icons/gi";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';




function Dropdown({data , placeholder , icon}) {
    const [isopenselect , setisopenselect] = useState(false)
    const [selected , setselected] = useState(0)
    const [selecteditem , setselecteditem] = useState(placeholder)
    const openSelect=() =>{
        setisopenselect(!isopenselect)
    }
    const closeSelect=(index , name) =>{
        setisopenselect(false)
        setselected(index)
        setselecteditem(name)
    }
    return (
        <ClickAwayListener onClickAway={() => setisopenselect(false)}>
        <div className="selectDropdown cursor position-relative">
            {icon}
            <span className='openSelect' onClick={openSelect}>{selecteditem}<IoIosArrowDown className='arrow'/></span>
            {
             isopenselect  === true && 
             <div className='selectDrop'>
             <div className="searchfield">
                 <input type="text"placeholder='Search here' />
             </div>
             <ul className='result'>
             <li key={0} onClick={() => closeSelect(0 ,placeholder)} className={`${selected === 0 ? 'active' : " "}`}>{placeholder}</li>
                {
                    data.map((item , index)=>{
                        return(
                            <li key={index+1} onClick={() => closeSelect(index+1 ,item)} className={`${selected === index+1 ? 'active' : " "}`}>{item}</li>
                    )
                    })
                }
               
             </ul>

         </div>

            }
            
        </div>
        </ClickAwayListener>
  
     

    )

}

export default Dropdown
