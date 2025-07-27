import React from 'react';
import styles from '../pages/Home.module.css'; // Note: uses the main Home page CSS

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span>🟢</span>
          <span>Powerful Digital Solution</span>
        </div>
        <h1 className={styles.heroTitle}>
          Bridging the gap between traditional and the new.
        </h1>
        <p className={styles.heroDescription}>
          Our products are crafted to elevate your professional image, enhance customer feedback, and strengthen client loyalty, so you can make a lasting impression and achieve more.
        </p>
        <button className={styles.heroButton}>Get in Touch</button>
      </div>
      <div className={styles.heroImageContainer}>
        <img src="https://assets-global.website-files.com/649581331fe3f31a839a8435/649665181b508277a8682855_Group%201171275215%20(1).webp" alt="App on Phones" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default HeroSection;
