import React from 'react'
import "./Header.css"
import LocationPinIcon from "@mui/icons-material/LocationPin";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import LowerHeader from './LowerHeader';

// to avoid re rendering(refreshing at each router we import link)
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section>
        <div className="outer_div ">
          <div className="logo_container">
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon LOgo"
              />
            </Link>

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

            <Link to="/auth">
              <p>Sign In</p>
              <span>Account & lists</span>
            </Link>

            <Link to="/orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>

            <Link to="/cart" className="cart">
              <ShoppingCartTwoToneIcon size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header