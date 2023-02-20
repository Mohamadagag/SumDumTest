import { useState, useEffect } from "react";

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
import image2 from "../../assets/TDS-HEADER N IMAGES_our value 3.png";
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
          Start your day with a touch of elegance and a taste of France! Savor
          the sweet moments of life and indulge in our vibrant array of
          viennoiseries and treats, including croissants,financiers, and tartes
          while sipping on a cup of coffee or tea in our charming boutique.
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
            "Tout de Sweet is more than just a continuation of a home baking journey. It's an extension of life's journey where every color, scent, and flavor brings a sense of belonging to mystifying places. Tout de Sweet is a reflection of a passion to create and offer unique, exceptional artisanal cakes and desserts. It's where the finest ingredients and lightest emotions merge to create elegant and tasty creations."
          }
        />

        <Accordion
          image={image2}
          title={"Our Values"}
          description={
            "Tout de Sweet provides exclusively handcrafted cakes and delicacies made from high-quality, natural ingredients without any preservatives. Our goal is to strike the perfect balance between excellent taste and reduced levels of sugar and gluten. When developing new items, we keep in mind the seasonal availability of ingredients and prioritize the use of the best quality components. Our focus is on creating unique flavor and texture combinations, while also delivering creative and sophisticated finishes. It's worth noting that all of our products are safe for pregnant women to enjoy!"
          }
        />
        <Accordion
          image={image3}
          title={"Our Team"}
          description={
            "Our chefs are the finest in terms of their expertise, imagination, and meticulousness, ensuring the unfailing excellence of our products and a constant stream of new, distinctive, and exceptional offerings. Their love for both baking and art distinguishes Tout de Sweet as more than just a superb bakery, but a unique destination for culinary and dessert artistry."
          }
        />
      </div>

      <div>
        <div className="findus-section">
          <h1>FIND US</h1>
          <p>We are Located in Shop 14, Block 4, Wasl Square, Dubai-U.A.E.</p>
        </div>
        <div className="findus-map">
          <iframe
            title="ToutDeSweet Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.534106585011!2d55.23520566523074!3d25.18520451747383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d6ee219c35%3A0x372e42ea657fd673!2sTout%20De%20Sweet!5e0!3m2!1sen!2slb!4v1674683219240!5m2!1sen!2slb"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
