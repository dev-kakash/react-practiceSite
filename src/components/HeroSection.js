import React from "react";
import styles from "./HeroSection.module.css";
import { Button } from "./Button";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>WHat are yiu waiting for?</p>
      <div className={styles.heroButton}>
        <Button
          className={styles.btn}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className={styles.btn}
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
