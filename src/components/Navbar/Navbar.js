import "./Navbar.css";
import Logo from "../../assets/Logo-without-background.png";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="header">
      <div className="top-header"></div>
      <div className="main-header">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" draggable={false} />
          </NavLink>
        </div>
      </div>
      <AiOutlineMenu
        className="menu-icon"
        onClick={() => {
          setShowNavbar(true);
        }}
      />
      <nav>
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop">OUR E-SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/products-availability-guidance">
              DELIVERY INFO
            </NavLink>
          </li>
          <li>
            <NavLink to="/find-us">FIND US</NavLink>
          </li>
          <li>
            <NavLink to="/cart">CART</NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile Navbar */}
      <div className={showNavbar ? `mobile-header-navigation` : `hide-nav`}>
        <IoMdClose
          className="close-icon"
          onClick={() => {
            setShowNavbar(false);
          }}
        />
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop">OUR E-SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/products-availability-guidance">
              DELIVERY INFO
            </NavLink>
          </li>
          <li>
            <NavLink to="/find-us">FIND US</NavLink>
          </li>
          <li>
            <NavLink to="/cart">CART</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
