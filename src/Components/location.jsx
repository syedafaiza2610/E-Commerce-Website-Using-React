import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { GiLargeDress } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

import { ClickAwayListener } from '@mui/base/ClickAwayListener';





function Location({data}) {
    const [isopenselect , setisopenselect] = useState(false)
    const [selected , setselected] = useState(0)
    const [selecteditem , setselecteditem] = useState('All Location')
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
        <div className="selectDropdownlocation cursor position-relative">
            <span className='openSelect' onClick={openSelect}><MdOutlineLocationOn className='icn' size={20}/><span></span>{selecteditem}<IoIosArrowDown className='arrow1'/></span>
            {
             isopenselect  === true && 
             <div className='selectDrop'>
             <div className="searchfield">
                 <input type="text"placeholder='Search here' />
             </div>
             <ul className='result'>
               
                 <li onClick={() => closeSelect(0 , "All Location")} className={`${selected ===0 ? 'active' : " "}`}>All Location</li>
                 <li onClick={() => closeSelect(1 , "Pakistan")} className={`${selected ===1 ? 'active' : " "}`}>Pakistan</li>
                 <li onClick={() => closeSelect(2 , "UAE")} className={`${selected ===2 ? 'active' : " "}`}> UAE</li>
                 <li onClick={() => closeSelect(3 , "America")} className={`${selected ===3 ? 'active' : " "}`}> America</li>
                 <li onClick={() => closeSelect(4 , "China")} className={`${selected ===4 ? 'active' : " "}`}>China</li>
                 <li onClick={() => closeSelect(5 , "Islamabad")} className={`${selected ===5 ? 'active' : " "}`}>Islamabad</li>
                 <li onClick={() => closeSelect(6 , "Karachi")} className={`${selected ===6 ? 'active' : " "}`}>Karachi</li>
                 <li onClick={() => closeSelect(7 , "London")} className={`${selected ===7 ? 'active' : " "}`}>London</li>
                 <li onClick={() => closeSelect(8 , "Dubai")} className={`${selected ===8 ? 'active' : " "}`}> Dubai</li>
                 <li onClick={() => closeSelect(9 , "US")} className={`${selected ===9 ? 'active' : " "}`}>US</li> 
                 <li onClick={() => closeSelect(10 , "US")} className={`${selected ===10 ? 'active' : " "}`}>Lahore</li> 
             </ul>

         </div>

            }
            
        </div>
        </ClickAwayListener>
  
     

    )

}

export default Location
