import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

// Header with navigation links
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>Sneaker - Shop</h1>
        <nav className={styles.nav}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Cart
          </NavLink>
          <NavLink
            to="/contacts"
            style={({ isActive }) => ({
              color: isActive ? "#FFFFFF" : "#FFFFFF80",
            })}
          >
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
