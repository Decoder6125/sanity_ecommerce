import React from 'react'
import { MdShoppingBasket } from "react-icons/md";
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
const Header = () => {
  return (
    <>
        <div className="header">
        <div className="brand">HEADPHONEHUB</div>
            <div className="cart">
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MdShoppingBasket />
          </Badge>
        </IconButton>
            </div>
        </div>
         
    </>
  )
}

export default Header