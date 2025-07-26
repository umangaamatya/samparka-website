import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import styles from "./Home.module.css";
import PointsNepal from "../components/PointsTrend";

const pointsEconomy = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onIntroductionClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWhatIsDigitalClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWhyUpgradeClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHowItBenefitsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFeaturesOfSamparkasClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onConclusionClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onFrameLinkClick = useCallback(() => {
    navigate("/boost-your-business-with-n-f-c-e");
  }, [navigate]);

  const onFrameLinkClick1 = useCallback(() => {
    navigate("/enhance-customer-loyalty-with");
  }, [navigate]);

  const onFrameLinkClick2 = useCallback(() => {
    navigate("/upgrade-your-networking-with-s");
  }, [navigate]);

  return (
    <div className={styles.boostYourBusinessWithNfcE}>
      <Header />
      <div className={styles.blogArticleBodyLoyalty}>
        <button className={styles.iconBackParent} onClick={onFrameButtonClick}>
          <img className={styles.iconBack} alt="" src="/icon--back.svg" />
          <a className={styles.home}>Blog</a>
        </button>
        <div className={styles.frameParent}>
          <PointsNepal />
        </div>
      </div>

      <Footer lETTERLOGO1="/letter-logo-1@2x.png" />
    </div>
  );
};

export default pointsEconomy;
