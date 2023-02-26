import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./ProductsAvailabilityAguidance.css";

const ProductsAvailabilityAguidance = () => {
  return (
    <>
      <Navbar />
      <div className="info-container">
        <h2>Products Availability Guidance</h2>
        <div className="info-text">
          <p>
            * Our signature cakes can be pre-ordered upon 2 to 3 days earlier
            notice, via either direct phone call or whatsapp message. Cakes and
            big orders can be delivered across all Dubai via our delivery
            partner.
          </p>
          <p>
            * Our tartes, eclairs, and other delights are available for delivery
            via delivery aggregator “Deliveroo” or for pick-up by simply
            referring directly to our shop.
          </p>
          <p>
            * Tout de Sweet caters for the different types of events in Dubai
            whether weddings, birthdays and celebrations, business conferences,
            or others. Please reach out to us via contact details shared on our
            website.
          </p>
          <p>
            * We can also host small events such as high-tea gatherings, Pop-up
            exhibitions and others in our homy and cozy venue located in Al Wasl
            - Dubai. We are always happy to discuss with you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsAvailabilityAguidance;
