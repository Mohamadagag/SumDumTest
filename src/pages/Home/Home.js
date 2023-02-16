import { useState, useEffect, useContext } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HomeProduct from "../../components/HomeProduct/HomeProduct";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "../../components/Accordion/Accordion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../../assets/TDS-HEADER N IMAGES_our concept.png";
import image2 from "../../assets/TDS-HEADER N IMAGES_our value 1.png";
import image3 from "../../assets/team.jpeg";

const Home = () => {
  const [product, setProduct] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    getLastProducts();
  }, []);

  const getLastProducts = async () => {
    const res = await axios.get(
      "https://tout-de-sweet-backend.vercel.app/api/products/last"
    );
    try {
      setProduct(res.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <CarouselComponent />
      </div>

      <div className="everyday">
        <h1>EVERY DAY IS A TREAT DAY</h1>
        <p>
          We welcome you every day starting from 8am to enjoy viennoiseries and
          treats (Croissants, financiers, madeleines, poundcakes, eclairs,
          tartes, …).
        </p>
        <p>
          Our customers are welcome in our boutique to have a coffee or tea with
          our viennoiseries and delights.
        </p>
      </div>
      <div>
        <div className="home-grid">
          <Carousel responsive={responsive}>
            {product.map((product) => {
              return (
                <div key={product._id}>
                  <Link to={`/itemDetail/${product._id}`}>
                    <HomeProduct
                      image={product.image[0]}
                      name={product.name}
                      price={product.price}
                    />
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div className="three-images">
        <Accordion
          image={image1}
          title={"OUR CONCEPT"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />

        <Accordion
          image={image2}
          title={"Our Values"}
          description={
            "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
        <Accordion
          image={image3}
          title={"Our Team"}
          description={
            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur"
          }
        />
      </div>

      <div>
        <div className="findus-section">
          <h1>FIND US</h1>
          <p>We are Located in Shop 14, Block 4, Wasl Square, Dubai-U.A.E.</p>
        </div>
        <div className="findus-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.534106585011!2d55.23520566523074!3d25.18520451747383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d6ee219c35%3A0x372e42ea657fd673!2sTout%20De%20Sweet!5e0!3m2!1sen!2slb!4v1674683219240!5m2!1sen!2slb"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
