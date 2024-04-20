import { Button } from '@mui/material'
import React from 'react'
import SendOutlinedIcon from'@mui/icons-material/SendOutlined'

const Newsletter = () => {
  return (
    <div>
      <div className="newsLetterBanner">
        <SendOutlinedIcon/>
        <input type="text" placeholder='Your Email-address'/>
        <Button className='btnfilter'>Subscribe</Button>
      </div>
    </div>
  )
}

export default Newsletter
