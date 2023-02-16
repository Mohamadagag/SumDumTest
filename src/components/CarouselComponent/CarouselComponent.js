import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.css";
import Slide1 from "../../assets/Slide1.png";
import Slide2 from "../../assets/Slide2.png";
import Slide3 from "../../assets/Slide3.png";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">ENTREMET</h3>
          <p className="carousel-description">
            A crispy golden crust, a thin cake or almond cream, a smooth custard
            or creamy ganache.. and a lot of pleasure!
          </p>
          <Link to="/shop" className="carousel-order-btn">
            ORDER NOW
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide3} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">VIENNOISERIES</h3>
          <p className="carousel-description">
            Madeleines and financiers… the perfect tiny treats you can take with
            you everywhere, and enjoy at any time of the day.
          </p>
          <Link to="/shop" className="carousel-order-btn">
            ORDER NOW
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">POUNDCAKE</h3>
          <p className="carousel-description">
            Moist and light poundcakes, or “gâteaux de voyage”, perfect for your
            breakfasts or afternoon snacks.
          </p>
          <Link to="/shop" className="carousel-order-btn">
            ORDER NOW
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
