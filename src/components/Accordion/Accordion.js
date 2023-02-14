import { useState } from "react";
import Pic1 from "../../assets/pic1.jpeg";
import "./Accordion.css";

const Accordion = ({ title, description }) => {
  const [show, setShow] = useState(true);
  const toogle = () => {
    setShow(!show);
  };

  return (
    <div className="image-container">
      <div className="image-hover-overlay" onClick={toogle}>
        <img src={Pic1} className="image" />
        <div className="middle">
          <div className={show ? "text" : "text-move"}>{title}</div>
          <div className="description">
            <p className={show ? "hide-description" : ""}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
