import { useCallback } from "react";
import Header from "../components/Header";
import ShareYourTravelsForm from "../components/ShareYourTravelsForm";
import Footer from "../components/Footer";
import styles from "./GetInTouch.module.css";

const GetInTouch = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='heroSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.getintouch}>
      <Header onHomeTextClick={onHomeTextClick} />
      <ShareYourTravelsForm />
      <Footer lETTERLOGO1="/letter-logo-1@2x.png" propGap="24px" />
    </div>
  );
};

export default GetInTouch;
