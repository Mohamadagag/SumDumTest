import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import TableContainer from "@mui/material/TableContainer";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import "./Cart.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const cartItems = cart.map((cItem) => {
    return cItem.name;
  });

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <div>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Description</TableCell>
                  <TableCell align="right">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart &&
                  cart.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="button-container">
            {cart.length == 0 ? null : (
              <a
                target="_blank"
                href={`https://wa.me/70575419?text=Hi TDS, I came from your website. I want to order ${cartItems}.`}
              >
                Checkout
              </a>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
