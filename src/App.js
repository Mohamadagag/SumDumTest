import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Findus from "./pages/Findus/Findus";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Notfound from "./pages/Notfound/Notfound";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/find-us" element={<Findus />} />
        <Route path="/itemDetail/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber="70575419"
        accountName="Tout De Sweet"
        allowEsc
        allowClickAway
      />
    </div>
  );
}

export default App;
