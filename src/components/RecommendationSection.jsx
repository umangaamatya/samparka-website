import React from 'react';
import styles from '../pages/Home.module.css';

const Star = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.416 4.517 1.48-8.279L0 9.306l8.332-1.151z"/></svg>;

const RecommendationSection = () => {
  return (
    <section className={styles.recommendationSection}>
      <div className={styles.recommendationText}>
        <div className={styles.recommendationPercentage}>95%</div>
        <div className={styles.recommendationStatement}>
          95% of customers <br /> recommend Samparka
        </div>
      </div>
      <div className={styles.recommendationStars}>
        <Star /><Star /><Star /><Star /><Star />
      </div>
    </section>
  );
};

export default RecommendationSection;