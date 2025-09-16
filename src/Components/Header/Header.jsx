import React from 'react'
import "./Header.css"
import LocationPinIcon from "@mui/icons-material/LocationPin";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import LowerHeader from './LowerHeader';


const Header = () => {
  return (
    <>
      <section>
        <div className="outer_div ">
          <div className="logo_container">
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon LOgo"
              />
            </a>

            {/* delivery */}
            <div className="delivery">
              <span>
                <LocationPinIcon />
              </span>

              <div>
                <p>Delivered To</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          <div className="search">
            <select name="" id="">
              <option value="">All</option>
            </select>

            <input type="text" name="" id="" placeholder="search products" />
            <SearchTwoToneIcon size={25} />
          </div>

          <div className="order_container">
            {/* the right side div */}

            <a href="" className="language ">
              <img
                src="https://image.shutterstock.com/image-vector/usa-waving-flag-pattern-background-260nw-2480140689.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            <a href="">
              <p>Sign In</p>
              <span>Account & lists</span>
            </a>

            <a href="">
              <p>returns</p>
              <span>& orders</span>
            </a>

            <a href="" className="cart">
              <ShoppingCartTwoToneIcon size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
}

export default Header