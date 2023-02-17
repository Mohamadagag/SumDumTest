import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { TbBrandTiktok } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import LogoAndCards from "../../assets/Logo-and-cards.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="first-div">
          <h5>CONTACT US</h5>
          <div>
            <p>
              <a href="mailto:info@toutdesweet.ae" className="change">
                info@toutdesweet.ae
              </a>
            </p>
            <p>
              <a href="tel:+971 43264473" className="change">
                +971 43264473
              </a>
            </p>

            <p>
              <a href="tel:+971 501077848" className="change">
                +971 501077848
              </a>
            </p>
          </div>
        </div>
        <div className="second-div">
          <h5>LOCATION</h5>
          <div>
            <p>shop 14 - block 4</p>
            <p>wasl square - Dubai</p>
          </div>
        </div>
        <div className="third-div">
          <h5>TERMS & CONDITIONS</h5>
          <div>
            <p className="terms">
              please refer to our
              <Link to="/terms-and-conditions" className="footer-terms">
                &nbsp; terms and conditions &nbsp;
              </Link>
              to know more about orders, payments, refunds...
            </p>
          </div>
        </div>
        <div className="fourth-div">
          <h5>NEWSLETTER</h5>
          <input placeholder="Email..." className="footer-input" />
          <div>
            <button className="send-button">SEND</button>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div>
          <a
            href="https://www.facebook.com/toutdesweetae/"
            rel="noreferrer"
            target="_blank"
          >
            <BsFacebook className="footer-icon" />
          </a>
        </div>
        <div className="click-icon">
          <a
            href="https://www.instagram.com/toutdesweetae/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineInstagram className="insta-icon move-footer-icon" />
          </a>
        </div>
        <div className="click-icon">
          <a
            href="https://www.tiktok.com/@toutdesweet.ae"
            rel="noreferrer"
            target="_blank"
          >
            <TbBrandTiktok className="tiktok-icon move-footer-icon" />
          </a>
        </div>
        <div className="payment-pic">
          <img
            src={LogoAndCards}
            alt="Visa-Mastercard Logo"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
