import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./StoreDescription.module.css";

const Review = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/get-in-touch");
  }, [navigate]);

  return (
    <div className={[styles.review2, className].join(" ")}>
      
      <img className={styles.image3Icon} alt="" src="/image-21@2x.png" />
      <div className={styles.directReviewParent}>
        <div className={styles.directReview}>2.Direct review</div>
        <div className={styles.optimizeReviews45}>
          Optimize reviews by directly opening review page where customers can provide 1 5 star, according to their experience.
        </div>
        <div className={styles.contactlessSvgrepoCom1}>
          <div className={styles.layer2Parent}>
            <img className={styles.layer2Icon} alt="" src="/layer-2@2x.png" />
            <img className={styles.groupIcon} alt="" src="/group.svg" />
          </div>
          <div className={styles.nfcqrEnabled}>Nfc/Qr Enabled</div>
        </div>
        <div className={styles.contactlessSvgrepoCom1}>
          <img
            className={styles.designIdeasSvgrepoCom1Icon}
            alt=""
            src="/designideassvgrepocom-1.svg"
          />
          <div className={styles.nfcqrEnabled}>Customizable Design</div>
        </div>
        <div className={styles.frame} onClick={onFrameContainerClick}>
          <div className={styles.orderNow}>Order Now</div>
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  className: PropTypes.string,
};

export default Review;
