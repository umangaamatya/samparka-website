import React from 'react';
import Header from "../components/Header"; // Assuming paths are correct
import Footer from "../components/Footer";
import styles from "./SmartReviewStand.module.css"; // We will create this new CSS file

// --- Data and SVGs for the components ---

// Data for the three benefit cards
const benefitsData = [
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32.0002 4.00003L37.0242 24.536L57.6002 29.6L42.5922 44.56L47.5842 64L32.0002 53.2L16.4162 64L21.4082 44.56L6.40018 29.6L26.9762 24.536L32.0002 4.00003Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Effortless Reviews',
    description: 'Streamlines the review process, making it quick and straightforward for customers to share their experiences.',
  },
  {
    icon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M38.4111 13.9221C39.4939 12.8394 40.7891 11.9836 42.2033 11.4215C43.6175 10.8593 45.1187 10.6064 46.6111 10.6888V10.6667C47.8841 10.6667 49.1241 11.0022 50.2223 11.6369C51.3205 12.2716 52.2415 13.1826 52.8947 14.2808C53.5479 15.379 53.9034 16.619 53.9034 17.8911C53.9034 20.915 51.5271 24.1621 48.6948 24.1621C47.2798 24.1621 46.0355 23.6332 44.9948 22.8464M28.2222 64V51.3259C28.2222 47.9079 29.8333 45.1111 32.4444 45.1111H41.5556C44.1667 45.1111 45.7778 47.9079 45.7778 51.3259V64" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="32" y="36" fontFamily="Arial, sans-serif" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">iOS</text>
      </svg>
    ),
    title: 'Device Support',
    description: 'Works on smartphones running both Android or iOS.',
  },
  {
    icon: (
       <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 50.6667C39.3638 50.6667 45.3333 44.6971 45.3333 37.3333C45.3333 30.8334 40.7333 24.8889 33.6 24L32 13.3333L30.4 24C23.2667 24.8889 18.6667 30.8334 18.6667 37.3333C18.6667 44.6971 24.6362 50.6667 32 50.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 50.6667V58.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 61.3333H40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Gain An Edge',
    description: 'Impress potential customers, clients and partners with the latest in networking technology.',
  },
];

const SmartReviewStandPage = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />

      <main>
        {/* --- Hero Section --- */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.trustedBadge}>
              Trusted By 300+ Businesses
            </div>
            <h1 className={styles.mainHeading}>
              Online Reviews Made Easy.
            </h1>
            <p className={styles.subheading}>
              Elevating Status With Seamless Sharing.
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.ctaButton}>Get In Touch</button>
              <button className={styles.secondaryButton}>Watch a video</button>
            </div>
            <img 
              src="https://assets-global.website-files.com/649581331fe3f31a839a8435/649666d625b536e765507d73_Group%201171275218%20(1).webp" 
              alt="App reviews on phones"
              className={styles.phoneShowcase}
            />
          </div>
        </section>

        {/* --- Benefits Section --- */}
        <section className={styles.benefitsSection}>
          <div className={styles.benefitsGrid}>
            {benefitsData.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.iconWrapper}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Filter Review Section --- */}
        <section className={styles.filterSection}>
          <div className={styles.filterGrid}>
            <div className={styles.imageContainer}>
              <img 
                src="https://assets-global.website-files.com/649581331fe3f31a839a8435/6496674e1d73983424a496f3_Group%201171275217.webp" 
                alt="Smart review card and phone" 
                className={styles.featureImage}
              />
            </div>
            <div className={styles.contentBlock}>
              <h2 className={styles.filterTitle}>1. Filter review</h2>
              <p className={styles.filterDescription}>
                Optimize reviews 4-5 stars lead to Google reviews, 1-3 stars redirect to a feedback form, saving from negative reviews.
              </p>
              <div className={styles.subFeature}>
                <div className={styles.subFeatureIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5L11.2929 4.29289L12 3.58579L12.7071 4.29289L12 5ZM18 11L17.2929 11.7071L18 12.4142L18.7071 11.7071L18 11ZM6 11L5.29289 10.2929L4.58579 11L5.29289 11.7071L6 11ZM12.7071 4.29289L18.7071 10.2929L17.2929 11.7071L11.2929 5.70711L12.7071 4.29289ZM18.7071 11.7071L12.7071 17.7071L11.2929 16.2929L17.2929 10.2929L18.7071 11.7071ZM5.29289 11.7071L11.2929 17.7071L12.7071 16.2929L6.70711 10.2929L5.29289 11.7071ZM6.70711 11.7071L12.7071 5.70711L11.2929 4.29289L5.29289 10.2929L6.70711 11.7071Z" fill="white"/></svg>
                </div>
                <p>NFC/QR & Android</p>
              </div>
              <button className={styles.orderButton}>
                Order Now
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H5.21333C5.79667 3 6.32667 3.33333 6.54667 3.86L10.3333 12.4533C10.56 12.9933 10.56 13.62 10.3333 14.16L9.46 15.96C9.1 16.7133 9.64667 17.58 10.4667 17.58H18.9133" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.8 21.3333C9.73741 21.3333 10.5 20.5707 10.5 19.6333C10.5 18.6959 9.73741 17.9333 8.8 17.9333C7.86259 17.9333 7.1 18.6959 7.1 19.6333C7.1 20.5707 7.86259 21.3333 8.8 21.3333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18.8 21.3333C19.7374 21.3333 20.5 20.5707 20.5 19.6333C20.5 18.6959 19.7374 17.9333 18.8 17.9333C17.8626 17.9333 17.1 18.6959 17.1 19.6333C17.1 20.5707 17.8626 21.3333 18.8 21.3333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6667 14.22H10.0533" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default SmartReviewStandPage;
