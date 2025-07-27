import React from 'react';
import styles from '../pages/Home.module.css';

const products = [
  { title: "Digital Loyalty Solution", image: "https://assets-global.website-files.com/649581331fe3f31a839a8435/649666060c57201c1875e11f_Group%201171275212.webp" },
  { title: "Smart Business Card", image: "https://assets-global.website-files.com/649581331fe3f31a839a8435/64966606d15b30342466f35a_Group%201171275213.webp" },
  { title: "Smart Review Stand", image: "https://assets-global.website-files.com/649581331fe3f31a839a8435/64966606e123687358a5e3f4_Group%201171275214.webp" },
];

const ProductsSection = () => {
  return (
    <section className={styles.productsSection}>
      <h2 className={styles.productsTitle}>Our line of products</h2>
      <p className={styles.productsSubtitle}>Here's what we're building to help businesses deliver amazing customer experiences.</p>
      <div className={styles.productsGrid}>
        {products.map(product => (
          <div key={product.title} className={styles.productCard}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;