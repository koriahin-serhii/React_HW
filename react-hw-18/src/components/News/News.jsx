import React from "react";
import styles from "./News.module.scss";
import Banner from "../../assets/main/Banner.png";

// Banner section for news or promotions
const News = () => {
  return (
    <section className={styles.news}>
      <img src={Banner} alt="News" className={styles.image} />
    </section>
  );
};

export default News;
