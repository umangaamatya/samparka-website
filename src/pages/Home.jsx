import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; // We will create this
import TrustSection from "../components/TrustSection"; // We will create this
import ProductsSection from "../components/ProductsSection"; // We will create this
import RecommendationSection from "../components/RecommendationSection"; // We will create this
import BlogSection from "../components/BlogSection"; // We will create this
import styles from "./Home.module.css";



const Home = () => {
  return (
    <div className={styles.home}>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ProductsSection />
        <RecommendationSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
