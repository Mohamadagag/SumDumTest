import Navbar from "../../components/Navbar/Navbar";
import "./Findus.css";
import LeftImage from "../../assets/leftImage.jpg";
import Directions from "../../assets/Directions.jpg";
import Footer from "../../components/Footer/Footer";

const Findus = () => {
  return (
    <div>
      <Navbar />
      <div className="findus-container">
        <div className="first-section">
          <div className="left-side">
            <img src={LeftImage} />
          </div>
          <div className="right-side">
            <div>
              <h2 className="open">OPENING HOURS</h2>
            </div>
            <div>
              <h3 className="day">Tuesday - Saturday</h3>
              <span className="time">8:00 AM - 8:00 PM</span>
            </div>
            <div>
              <h3 className="day">Sunday</h3>
              <span className="time">8:00 AM - 2:00 PM</span>
            </div>
            <div>
              <h3 className="day">Monday</h3>
              <span className="time">Closed</span>
            </div>
          </div>
        </div>

        <div className="second-section">
          <div className="second-section-first">
            <form>
              <h1>GET IN TOUCH</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat.
              </p>
              <div className="form-name">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <div className="form-email">
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <textarea placeholder="write your message here..." rows="5" />
              </div>
              <div className="form-icon-btn">
                <button type="submit" className="form-btn">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="second-section-second">
            <img src={Directions} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Findus;
