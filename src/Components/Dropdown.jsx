import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';




function Dropdown({ data, placeholder, icon }) {
    const [isopenselect, setisopenselect] = useState(false)
    const [selected, setselected] = useState(0)
    const [selecteditem, setselecteditem] = useState(placeholder)
    const [listData, setlistData] = useState(data);
    const [listData2, setlistData2] = useState(data);
    const openSelect = () => {
        setisopenselect(!isopenselect)
    }
    const closeSelect = (index, name) => {
        setisopenselect(false)
        setselected(index)
        setselecteditem(name)
    }
    const filterlist = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = listData2.filter((item) => {
            return item.toLowerCase().includes(keyword);
        })

        const list2 = list.filter((item,index) =>list.indexOf(item) === index)
        setlistData(list)

    }

    return (
        <ClickAwayListener onClickAway={() => setisopenselect(false)}>
            <div className="selectDropdown cursor position-relative">
                {icon}
                <span className='openSelect' onClick={openSelect}>{selecteditem.length>14 ? selecteditem.substr(0,14) +'...' : selecteditem}<IoIosArrowDown className='arrow' /></span>
                {
                    isopenselect === true &&
                    <div className='selectDrop'>
                        <div className="searchfield">
                            <input type="text" placeholder='Search here' onChange={filterlist} />
                        </div>
                        <ul className='result'>
                            <li key={0} onClick={() => closeSelect(0, placeholder)} className={`${selected === 0 ? 'active' : " "}`}>{placeholder}</li>
                            {
                                listData.map((item, index) => {
                                    return (
                                        <li key={index + 1} onClick={() => closeSelect(index + 1, item)} className={`${selected === index + 1 ? 'active' : " "}`}>{item}</li>
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
