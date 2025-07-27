import React from 'react';
import styles from '../pages/Home.module.css';

const TrustSection = () => {
  const logos = [
    "/path/to/insana-logo.svg", // Replace with actual paths
    "/path/to/newnew-logo.svg",
    "/path/to/tnc-logo.svg",
    "/path/to/chatime-logo.svg",
    "/path/to/global-logo.svg",
    "/path/to/himalayan-club-logo.svg",
  ];

  return (
    <section className={styles.trustSection}>
      <h2 className={styles.trustTitle}>Trusted by more than 300 businesses</h2>
      <div className={styles.trustLogos}>
        {/* Replace with your actual logo images */}
        <p className="text-gray-500">[Insana Logo]</p>
        <p className="text-gray-500">[NewNew Logo]</p>
        <p className="text-gray-500">[The TNC Logo]</p>
        <p className="text-gray-500">[Chatime Logo]</p>
        <p className="text-gray-500">[Global Logo]</p>
      </div>
    </section>
  );
};

export default TrustSection;
