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
            The perfect solution for any celebration. From dreamy chocolate to
            smooth caramel, unique cakes are always pre-ordered!
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
            Start your day right with our fresh & flaky pastries, baked to
            perfection and handled with love. Every morning is sun-lit with
            these viennoiseries.
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
            Enjoy the classic taste of our rich and buttery pound cakes.
            Available in a variety of flavors and made with only the finest
            ingredients.
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
