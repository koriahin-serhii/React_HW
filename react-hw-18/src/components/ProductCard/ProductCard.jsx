import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./ProductCard.module.scss";

// Card for displaying a single product
const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Handler for adding product to cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <div>
        <h3>{product.name}</h3>
        <div className={styles.priceWrapper}>
          <div>
            <h4>PRICE: </h4>
            <p className={styles.price}>{product.price} €</p>
          </div>
          <button onClick={handleAddToCart} className={styles.button}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
