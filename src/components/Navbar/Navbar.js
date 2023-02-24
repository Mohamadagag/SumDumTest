import "./Navbar.css";
import Logo from "../../assets/Logo-without-background.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
      <nav className="header-navigation">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/shop">OUR E-SHOP</NavLink>
          </li>
          <li>
            <NavLink to="/find-us">FIND US</NavLink>
          </li>
          <li>
            <NavLink to="/cart">CART</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
