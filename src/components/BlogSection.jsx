import React from 'react';
import styles from '../pages/Home.module.css';

const blogPosts = [
    {
        imgSrc: "/Rectangle478.png",
        title: "Boost Your Business with NFC-Enabled Google Review Cards in Nepal",
        authorImg: "/Yeshi.png",
        authorName: "Yeshi Dolkar",
        authorDate: "Posted on Jun 8, 2024"
    },
    {
        imgSrc: "/Loyaltyscreenpic.png",
        title: "Enhance Customer Loyalty with Digital Loyalty Solution Software",
        authorImg: "/Dipendra.png",
        authorName: "Dipendera Shah",
        authorDate: "Posted on Jun 17, 2024"
    },
    {
        imgSrc: "/rectangle-478@2x.png",
        title: "Upgrade Your Networking with Smart NFC Business Cards in Nepal",
        authorImg: "/avatar@2x.png",
        authorName: "Shreeyanch Shrestha",
        authorDate: "Posted on May 17, 2024"
    }
];

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <h2 className={styles.blogTitle}>Discover our blog</h2>
      <div className={styles.blogGrid}>
        {blogPosts.map(post => (
          <a href="#" key={post.title} className={styles.blogCard}>
            <img src={post.imgSrc} alt={post.title} className={styles.blogCardImage} />
            <div className={styles.blogCardContent}>
              <h3 className={styles.blogCardTitle}>{post.title}</h3>
              <div className={styles.blogCardAuthor}>
                <img src={post.authorImg} alt={post.authorName} />
                <div>
                  <div className={styles.authorName}>{post.authorName}</div>
                  <div className={styles.authorDate}>{post.authorDate}</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
