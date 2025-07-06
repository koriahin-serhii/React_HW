import React from "react";
import styles from "./Footer.module.scss";
import facebookLogo from "../../assets/Facebook_logo.svg";
import twitterLogo from "../../assets/Twitter_logo.svg";
import instagramLogo from "../../assets/Instagram_logo.svg";

// Footer with contacts and social links
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerLeft}>
          <h3>Contacts</h3>
          <div>
            <span>+49 123 45678901</span>
            <span>emailexample@gmail.com</span>
          </div>
          <p>2025 Sniker-Shop. All Rights reserved</p>
        </div>
        <div className={styles.footerRight}>
          <div>
            <a href="link.domain">
              <img src={facebookLogo} alt="facebook" />
            </a>
            <a href="link.domain">
              <img src={twitterLogo} alt="twitter" />
            </a>
            <a href="link.domain">
              <img src={instagramLogo} alt="instagram" />
            </a>
          </div>
          <input type="text" placeholder="Insert your email:" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
