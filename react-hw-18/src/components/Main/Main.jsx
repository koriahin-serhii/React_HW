import React, { useEffect, useState } from "react";
import axios from "axios";
import News from "../News/News";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Main.module.scss";

// Main page with news banner and product list
const Main = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from API on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://6863d97e88359a373e969065.mockapi.io/productData"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error when receiving data from the server", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className={styles.main}>
      <News />
      <div className={styles.container}>
        <h1>Products</h1>
        <div className={styles.products}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
