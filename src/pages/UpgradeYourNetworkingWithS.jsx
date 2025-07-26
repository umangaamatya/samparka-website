import { useCallback } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import Footer from "../components/Footer";
import styles from "./UpgradeYourNetworkingWithS.module.css";

const UpgradeYourNetworkingWithS = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const onIntroductionClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer5']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWhyChooseSmartClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer4']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPaperCardVsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBenefitsOfSmartClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onComparisonWithTraditionalClick = useCallback(() => {
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
    <div className={styles.upgradeYourNetworkingWithS}>
      <Header />
      <div className={styles.blogArticleBodyNfccard}>
        <button className={styles.iconBackParent} onClick={onFrameButtonClick}>
          <img className={styles.iconBack} alt="" src="/icon--back.svg" />
          <a className={styles.home}>Blog</a>
        </button>
        <div className={styles.frameParent}>
          <div className={styles.tableOfContentsParent}>
            <div className={styles.tableOfContents}>Table of Contents</div>
            <div className={styles.introductionParent}>
              <a className={styles.introduction} onClick={onIntroductionClick}>
                Introduction
              </a>
              <a
                className={styles.whyChooseSmart}
                onClick={onWhyChooseSmartClick}
              >
                Why Choose Smart NFC Business Cards?
              </a>
              <a className={styles.introduction} onClick={onPaperCardVsClick}>
                Paper Card vs. One NFC Card
              </a>
              <a
                className={styles.benefitsOfSmart}
                onClick={onBenefitsOfSmartClick}
              >
                Benefits of Smart NFC Business Cards in Nepal
              </a>
              <a
                className={styles.benefitsOfSmart}
                onClick={onComparisonWithTraditionalClick}
              >
                Comparison with Traditional Paper Cards
              </a>
              <a className={styles.conclusion} onClick={onConclusionClick}>
                Conclusion
              </a>
            </div>
          </div>
          <CardComponent />
        </div>
      </div>
      <div className={styles.frame7680Nfccard}>
        <div className={styles.blogCatHeaders}>
          <div className={styles.discoverMoreTopics}>Discover more topics</div>
        </div>
        <div className={styles.frameGroup}>
          <a className={styles.rectangleParent} onClick={onFrameLinkClick}>
            <img
              className={styles.frameChild}
              alt=""
              src="/Rectangle478.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.minReadWrapper}>
                      <div className={styles.minRead}>3 min read</div>
                    </div>
                  </div>
                  <b className={styles.boostYourBusiness}>
                    Boost Your Business with NFC-Enabled Google Review Cards in
                    Nepal
                  </b>
                </div>
                <div className={styles.asABusinessOwnerInNepalWrapper}>
                  <div className={styles.asABusiness}>
                    As a business owner in Nepal, leveraging Google reviews
                    effectively can ...
                  </div>
                </div>
              </div>
              <div className={styles.frameItem} />
              <div className={styles.articleAuthor}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/Yeshi.png"
                />
                <div className={styles.authorText}>
                  <div className={styles.yeshiDolkar}>Yeshi Dolkar</div>
                  <div className={styles.postedOnJun}>
                    Posted on Jun 8, 2024
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className={styles.rectangleGroup} onClick={onFrameLinkClick1}>
            <img
              className={styles.frameChild}
              alt=""
              src="/Loyaltyscreenpic.png"
            />
            <div className={styles.frameParent2}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.minReadContainer}>
                      <div className={styles.minRead}>2 min read</div>
                    </div>
                  </div>
                  <b className={styles.boostYourBusiness}>
                    Enhance Customer Loyalty with Digital Loyalty Solution
                    Software
                  </b>
                </div>
                <div className={styles.asABusinessOwnerInNepalWrapper}>
                  <div className={styles.transformFromTraditional}>
                    Transform from traditional punch cards to cloud-based
                    digital loyalty solutions ...
                  </div>
                </div>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.lineDiv} />
                <div className={styles.articleAuthor1}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/Dipendra.png"
                  />
                  <div className={styles.authorText}>
                    <div className={styles.yeshiDolkar}>Dipendera Shah</div>
                    <div className={styles.postedOnMay}>
                      Posted on Jun 17, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a className={styles.rectangleGroup} onClick={onFrameLinkClick2}>
            <img
              className={styles.frameChild}
              alt=""
              src="/rectangle-478@2x.png"
            />
            <div className={styles.frameParent2}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.minReadContainer}>
                      <div className={styles.minRead}>2 min read</div>
                    </div>
                  </div>
                  <b className={styles.boostYourBusiness}>
                    Upgrade Your Networking with Smart NFC Business Cards in
                    Nepal
                  </b>
                </div>
                <div className={styles.asABusinessOwnerInNepalWrapper}>
                  <div className={styles.asABusiness}>
                    Smart NFC business cards offer a modern solution to
                    traditional paper cards ...
                  </div>
                </div>
              </div>
              <div className={styles.lineParent}>
                <div className={styles.frameChild1} />
                <div className={styles.articleAuthor1}>
                  <img
                    className={styles.avatarIcon1}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <div className={styles.authorText}>
                    <div className={styles.shreeyanchShrestha}>
                      Shreeyanch Shrestha
                    </div>
                    <div className={styles.postedOnMay}>
                      Posted on May 17, 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <Footer lETTERLOGO1="/letter-logo-1@2x.png" />
    </div>
  );
};

export default UpgradeYourNetworkingWithS;
