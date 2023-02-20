import "./Navbar.css";
import Logo from "../../assets/Logo-without-background.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="top-header"></div>
      <div className="main-header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
      </div>
      <nav className="header-navigation">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">OUR E-SHOP</Link>
          </li>
          <li>
            <Link to="/find-us">FIND US</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
