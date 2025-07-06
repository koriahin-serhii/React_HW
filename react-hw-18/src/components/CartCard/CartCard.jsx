import React from "react";
import styles from "./CartCard.module.scss";
import TrashIcon from "../../assets/trashIcon.svg";
import { useCart } from "../../context/CartContext";

// Card for displaying a single cart item
const CartCard = ({ item }) => {
  const { deleteFromCart } = useCart();

  // Handler for deleting item from cart
  const handleDelete = () => {
    deleteFromCart(item);
  };

  return (
    <div className={styles.card}>
      <img src={item.image} alt={item.name} />
      <div className={styles.info}>
        <p className={styles.name}>{item.name}</p>
        <div className={styles.price}>
          <p>PRICE:</p>
          <span>{item.price} €</span>
        </div>
      </div>
      {/* Delete button */}
      <button onClick={handleDelete} className={styles.deleteBtn}>
        <img src={TrashIcon} alt="TrashIcon" />
      </button>
    </div>
  );
};

export default CartCard;
