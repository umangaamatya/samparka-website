import { useState, useCallback } from "react";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";
import styles from "./HeroBusinessCard.module.css";
import { useNavigate } from "react-router-dom";


const HeroBusinessCard = ({ className = "" }) => {
  const [isVideoPopupOpen, setVideoPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openVideoPopup = useCallback(() => {
    setVideoPopupOpen(true);
  }, []);

  const closeVideoPopup = useCallback(() => {
    setVideoPopupOpen(false);
  }, []);


  const onGroupContainerClick = useCallback(() => {
    navigate("/get-in-touch");
  }, [navigate]);


  return (
    <>
      <div className={[styles.herobusinesscard, className].join(" ")}>
        <div className={styles.herobusinesscardheading}>
          <img
            className={styles.desktoptitleIcon}
            alt=""
            src="/desktoptitle@2x.png"
          />
          <img
            className={styles.mobiletitleIcon}
            alt=""
            src="/mobiletitle@2x.png"
          />
          <div className={styles.elevatingStatusWith}>
            Elevating status with seamless sharing.
          </div>
          <div className={styles.desktopCtaButton}>
            <div className={styles.group} onClick={onGroupContainerClick}>
              <div className={styles.rectangle} />
              <div className={styles.getInTouch}>Get In Touch</div>
            </div>
            <div className={styles.group1} onClick={openVideoPopup}>
              <div className={styles.rectangle1} />
              <div className={styles.watchAVideo}>Watch a video</div>
            </div>
          </div>
          <div className={styles.mobileCtaButton}>
            <div className={styles.group2} onClick={onGroupContainerClick}>
              <div
                className={styles.rectangle2}
                onClick={onGroupContainerClick}
              />
              <div className={styles.getInTouch1}>Get In Touch</div>
            </div>
            <div className={styles.group3} onClick={openVideoPopup}>
              <div className={styles.rectangle3} />
              <div className={styles.watchAVideo1}>Watch a video</div>
            </div>
          </div>
        </div>
        <div className={styles.desktopHeroImageBusiness}>
          <img
            className={styles.samparka91}
            alt=""
            src="/samparka-9-1@2x.png"
          />
        </div>
        <div className={styles.companydesktopBusiness}>
          <div className={styles.logo}>
            <img className={styles.icon} alt="" src="/7@2x.png" />
            <img className={styles.icon1} alt="" src="/2@2x.png" />
            <img className={styles.icon2} alt="" src="/3@2x.png" />
            <img className={styles.icon3} alt="" src="/6@2x.png" />
            <img className={styles.icon4} alt="" src="/1@2x.png" />
            <img className={styles.icon5} alt="" src="/5@2x.png" />
          </div>
        </div>
        <div className={styles.companymobileBusiness}>
          <div className={styles.logo1}>
            <img className={styles.icon6} alt="" src="/13@2x.png" />
            <img className={styles.icon7} alt="" src="/2@2x.png" />
            <img className={styles.icon8} alt="" src="/31@2x.png" />
            <img className={styles.icon9} alt="" src="/6@2x.png" />
            <img className={styles.icon10} alt="" src="/5@2x.png" />
          </div>
        </div>
      </div>
      {isVideoPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.8)"
          placement="Centered"
          onOutsideClick={closeVideoPopup}
        >
          <div className={styles.videoPopup}>
            <button className={styles.videoPopupClose} onClick={closeVideoPopup}>
              &times;
            </button>
            <div className={styles.videoWrapper}>
              <iframe
                title="YouTube Video"
                width="560"  // Adjust width as needed
                height="315" // Adjust height as needed
                src="https://www.youtube.com/embed/FG78By_yEJc"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </PortalPopup>
      )}
    </>
  );
};

HeroBusinessCard.propTypes = {
  className: PropTypes.string,
};

export default HeroBusinessCard;