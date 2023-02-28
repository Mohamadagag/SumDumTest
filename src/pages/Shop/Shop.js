import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Product from "../../components/product/Product";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./Shop.css";
import { CartContext } from "../../context/CartContext";
import Navbar from "../../components/Navbar/Navbar";
import HomeSkeletonGrid from "../../components/product/HomeSkeletonGrid";

const Shop = () => {
  const [product, setProduct] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  const [active, setActive] = useState(false);
  const { cart } = useContext(CartContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getProducts();
    getCategory();
  }, [category]);

  const getProducts = async () => {
    const res = await axios.get(
      `https://tout-de-sweet-backend.vercel.app/api/products?cat=${category}`
    );
    try {
      setProduct(res.data.response);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    const res = await axios.get(
      "https://tout-de-sweet-backend.vercel.app/api/category"
    );
    try {
      setCategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = product.filter((product) => {
    return product.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div>
      <Navbar />
      <div className="shop-container">
        <div className="center-product-filtering">
          <div className="product-filtering">
            <div className="product-filtering-btns">
              <button onClick={(e) => setCategory("")}>All</button>
              {categories &&
                categories.map((cat, id) => (
                  <button
                    value={cat._id}
                    key={id}
                    className={active ? "not-active" : "active"}
                    onClick={(e) => {
                      setCategory(e.target.value);
                      setActive(true);
                    }}
                  >
                    {cat.name}
                  </button>
                ))}
            </div>
            <div className="mobile-filter">
              <form>
                <div className="form-group">
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    name=""
                    id=""
                    className="form-control"
                  >
                    <option value="">All</option>
                    {categories &&
                      categories.map((cat, id) => (
                        <option value={cat._id} key={id}>
                          {cat.name}
                        </option>
                      ))}
                  </select>
                </div>
              </form>
            </div>
          </div>
        </div>
        {isLoaded ? (
          <div className="product-grid">
            {filteredProducts.map((product) => {
              return (
                <Link to={`/itemDetail/${product._id}`} key={product._id}>
                  <Product
                    image={product.image[0]}
                    name={product.name}
                    price={product.price}
                  />
                </Link>
              );
            })}
          </div>
        ) : (
          <HomeSkeletonGrid SKGrid="product-grid" />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
