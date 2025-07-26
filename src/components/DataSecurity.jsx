import { useEffect } from "react";
import styles from "./DataSecurity.module.css";

export default function DataSecurity({ className = "" }) {
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

  return (
    <div className={[styles.container, className].join(" ")} data-animate-on-scroll>
      <div className={styles.header}>
        <div className={styles.lockImage}>
          <img src="/lock-icon.png" alt="Lock icon" width={100} height={100} />
        </div>
        <div className={styles.textSection}>
          <h2 className={styles.title}>Your Data is Secured</h2>
          <p className={styles.subtitle}>
            Your data is securely stored with maximum security.
          </p>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>📑</span>
            </div>
            <h3 className={styles.cardTitle}>TLS/SSL Certificate</h3>
          </div>
          <p className={styles.cardDescription}>
            TLS/SSL encryption protects your data in transit, keeping it safe
            from unauthorized access.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>☁️</span>
            </div>
            <h3 className={styles.cardTitle}>AWS/Google Cloud</h3>
          </div>
          <p className={styles.cardDescription}>
            Our cloud infrastructure on AWS and Google Cloud ensures reliable
            data protection and high performance.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>🔐</span>
            </div>
            <h3 className={styles.cardTitle}>Data Encryption</h3>
          </div>
          <p className={styles.cardDescription}>
            All sensitive data is encrypted both in transit and at rest, ensuring
            that only authorized parties can access it.
          </p>
        </div>
      </div>
    </div>
  );
}
