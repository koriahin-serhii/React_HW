import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

// Create context for cart
const CartContext = createContext();

// Provider component for cart context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from API on mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(
          "https://6863d97e88359a373e969065.mockapi.io/cartData"
        );
        setCartItems(response.data);
      } catch (error) {
        console.error("Error when retrieving shopping cart data: ", error);
      }
    };
    fetchCartItems();
  }, []);

  // Add product to cart and update state
  const addToCart = async (product) => {
    try {
      const response = await axios.post(
        "https://6863d97e88359a373e969065.mockapi.io/cartData",
        product
      );
      setCartItems((prevItems) => [...prevItems, response.data]);
    } catch (error) {
      console.error("Error when adding cart data: ", error);
    }
  };

  // Delete product from cart and update state
  const deleteFromCart = async (product) => {
    try {
      await axios.delete(
        `https://6863d97e88359a373e969065.mockapi.io/cartData/${product.id}`
      );
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== product.id)
      );
    } catch (error) {
      console.error("Error when deleting an item from the cart: ", error);
    }
  };

  // Provide cart state and actions to children
  return (
    <CartContext.Provider value={{ cartItems, addToCart, deleteFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using cart context
export const useCart = () => useContext(CartContext);
