import { useCallback, useEffect } from "react";
import Header from "../components/Header";
import ReviewHero from "../components/ReviewHero";
import BenefitTwo from "../components/BenefitTwo";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";
import ProductVisualsReview from "../components/ProductVisualsReview";
import RecommendationMobile from "../components/RecommendationMobile";
import Footer from "../components/Footer";
import styles from "./SmartReviewStand.module.css";

const SmartReviewStand = () => {
  console.log('SmartReviewStand component rendering...');
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/get-in-touch");
  }, [navigate]);

  return (
    <div className={styles.smartreviewstand}>
      <h1>Smart Review Stand Page</h1>
      <Header />
      <p>Testing minimal content...</p>
    </div>
  );
};

export default SmartReviewStand;
