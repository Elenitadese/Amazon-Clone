import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import './Header.css'
const LowerHeader = () => {
  return (
    <div className="lower_container">
      <ul>
        <li>
          <MenuIcon />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader