import { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { CartContext } from "../../context/CartContext";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import "./ProductDetails.css";
import axios from "axios";

const ProductDetails = () => {
  const { cart, setCart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(
      `https://tout-de-sweet-backend.vercel.app/api/products/${id}`
    );
    try {
      setProduct(res.data.response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (item) => {
    setCart([...cart, item]);
    Swal.fire({
      title: "Added successfully",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="product-details">
        <div className="image-description">
          <div className="image-only">
            <img src={product.image} />
          </div>
          <h2>{product.name}</h2>
        </div>
        <div className="seperate"></div>
        <div className="description-price">
          <p>{product.description}</p>
          <p>Price: {product.price} AED</p>
        </div>
        <a className="order-btn" href={product.linkButton} target="_blank">
          Order Through Whatsapp
        </a>
        <button
          className="order-btn  order-btn-cart"
          onClick={() => handleAdd(product)}
        >
          Add to Cart
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
