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




function Dropdown() {
    const [isopenselect , setisopenselect] = useState(false)
    const [selected , setselected] = useState(0)
    const [selecteditem , setselecteditem] = useState('All Categories')
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
            <span className='openSelect' onClick={openSelect}>{selecteditem}<IoIosArrowDown className='arrow'/></span>
            {
             isopenselect  === true && 
             <div className='selectDrop'>
             <div className="searchfield">
                 <input type="text"placeholder='Search here' />
             </div>
             <ul className='result'>
               
                 <li onClick={() => closeSelect(0 , "All Categories")} className={`${selected ===0 ? 'active' : " "}`}>All Categories</li>
                 <li onClick={() => closeSelect(1 , "Clothing")} className={`${selected ===1 ? 'active' : " "}`}> <GiLargeDress className='icn'/><span></span> Clothing</li>
                 <li onClick={() => closeSelect(2 , "Beauty")} className={`${selected ===2 ? 'active' : " "}`}><GiLipstick className='icn'/><span></span> Beauty</li>
                 <li onClick={() => closeSelect(3 , "Foot Wear")} className={`${selected ===3 ? 'active' : " "}`}><GiSonicShoes className='icn'/><span></span> Foot Wear</li>
                 <li onClick={() => closeSelect(4 , "Baking Items")} className={`${selected ===4 ? 'active' : " "}`}><MdCake className='icn'/><span></span> Baking Items</li>
                 <li onClick={() => closeSelect(5 , "Bags")} className={`${selected ===5 ? 'active' : " "}`}><FaBagShopping className='icn'/><span></span> Bags</li>
                 <li onClick={() => closeSelect(6 , "Pets")} className={`${selected ===6 ? 'active' : " "}`}> <FaDog className='icn'/><span></span> Pets</li>
                 <li onClick={() => closeSelect(7 , "Abaya's")} className={`${selected ===7 ? 'active' : " "}`}><MdOutlineGirl className='icn'/><span></span> Abaya's</li>
                 <li onClick={() => closeSelect(8 , "Jwellery")} className={`${selected ===8 ? 'active' : " "}`}><GiDiamondRing className='icn'/><span></span> Jwellery</li>
                 <li onClick={() => closeSelect(9 , "Hijabs")} className={`${selected ===9 ? 'active' : " "}`}> <GiNinjaMask className='icn'/><span></span> Hijabs</li>
             </ul>

         </div>

            }
            
        </div>
        </ClickAwayListener>
  
     

    )

}

export default Dropdown
