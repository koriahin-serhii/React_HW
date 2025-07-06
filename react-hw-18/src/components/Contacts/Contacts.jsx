import React from "react";
import SnapChat from "../../assets/contacts/SnapChat.png";
import Facebook from "../../assets/contacts/Facebook.png";
import X from "../../assets/contacts/X.png";
import styles from "./Contacts.module.scss";

// Contacts page component
const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h1>Contacts</h1>
      <div className={styles.contentContainer}>
        <div className={styles.contactForm}>
          <ul>
            {/* Contact information */}
            <li>+49 123 45678901</li>
            <li>emailexample@gmail.com</li>
            {/* Contact form */}
            <form action="#">
              <div className={styles.formRow}>
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Name" required />
              </div>
              <textarea placeholder="Insert your message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </ul>
        </div>
        <div className={styles.linksContainer}>
          <p>Find us on:</p>
          <div className={styles.links}>
            {/* Social media links */}
            <a href="https://www.snapchat.com">
              <img src={SnapChat} alt="Snapchat" />
            </a>
            <a href="https://www.facebook.com">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://www.X.com">
              <img src={X} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
