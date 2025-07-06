import React from "react";
import { useCart } from "../../context/CartContext";
import CartCard from "../CartCard/CartCard";
import styles from "./Cart.module.scss";

// Cart page component
const Cart = () => {
  const { cartItems } = useCart();
  // Calculate total price of all items in the cart
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.cartContainer}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        // Show message if cart is empty
        <p className={styles.empty}>Your cart is empty</p>
      ) : (
        <div className={styles.content}>
          <div className={styles.leftContent}>
            {/* Render each cart item */}
            {cartItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          <div className={styles.rightContent}>
            <h3>Total</h3>
            <ul>
              {/* List all product names in the cart */}
              {cartItems.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>

            <div className={styles.totalPrice}>
              <p>PRICE: </p>
              {/* Display total price */}
              <span>{totalPrice.toLocaleString()} €</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
