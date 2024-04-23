import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useState } from 'react';
import { Button } from '@mui/material';

const Quantitybox = () => {
    const [inputValue, setinputValue] = useState(1);
    const plus = () => {
        setinputValue(inputValue + 1)
    }
    const minus = () => {
        if (inputValue !== 0) {
            setinputValue(inputValue - 1)

        }
    }
    return (
        <>
            <div className="addCartSection pt-4 pb-4 d-flex align-items-center">
                <div className="counterSection mr-3">
                    <input type="number" value={inputValue} />
                    <span className='plus'><KeyboardArrowUpOutlinedIcon onClick={plus} /></span>
                    <span className='minus'><KeyboardArrowDownOutlinedIcon onClick={minus} /></span>

                </div>
            </div>
        </>
    )
}

export default Quantitybox
