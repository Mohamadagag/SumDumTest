import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { TbBrandTiktok } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import LogoAndCards from "../../assets/Logo-and-cards.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="first-div">
          <h5>CONTACT US</h5>
          <div>
            <p>info@toutdesweet.ae</p>
            <p>+971 43264473</p>
            <p>+971 501077848</p>
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
              <a href="#" className="footer-terms">
                &nbsp;terms and conditions&nbsp;
              </a>
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
          <a href="https://www.facebook.com/toutdesweetae/" target="_blank">
            <BsFacebook className="footer-icon" />
          </a>
        </div>
        <div className="click-icon">
          <a href="https://www.instagram.com/toutdesweetae/" target="_blank">
            <AiOutlineInstagram className="insta-icon move-footer-icon" />
          </a>
        </div>
        <div className="click-icon">
          <a href="https://www.tiktok.com/@toutdesweet.ae" target="_blank">
            <TbBrandTiktok className="tiktok-icon move-footer-icon" />
          </a>
        </div>

        <div className="payment-pic">
          <img src={LogoAndCards} draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
