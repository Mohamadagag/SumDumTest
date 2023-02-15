import Carousel from "react-bootstrap/Carousel";
import "./CarouselComponent.css";
import Slide1 from "../../assets/slide1.jpg";
import Slide2 from "../../assets/productImages/Slide2.jpg";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Slide1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">Entremets</h3>
          <p className="carousel-description">
            Full Cakes Available on pre-order. Moist and airy hazelnut sponge
            cake topped with hazelnut crunch.
          </p>
          <Link to="/shop" className="carousel-order-btn">
            ORDER NOW
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={Slide2} alt="First slide" />
        <Carousel.Caption>
          <h3 className="carousel-title">Small Bites</h3>
          <p className="carousel-description">
            Madeleines and financiers… the perfect tiny treats you can take with
            you everywhere, and enjoy at any time of the day.
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
