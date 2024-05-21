import React from "react";
import styles from "./Home.module.css";
import NavBar from "../components/common/NavBar";
import Header from "../components/common/Header";
import { ReactComponent as HeroImg } from "../assests/HEROIMAGE.svg";
import {useWidth} from "../customhook";


export default function Home() {
    const {width} = useWidth();
    
  return (
    <div className={styles.LandingPage}>
      <Header />
      <NavBar />
      <div className={styles.HeroSecWrapper}>
        <div className={styles.TextWrapper}>
          <div className={styles.FirstPara}>
            <p className={styles.HeroText}>
              Skip the travel! Find Online
            </p>
            <span className={styles.HeroSpan}>Medical</span>{" "}
            <span className={styles.HeroSpan2}>Centers</span>
          </div>

          <div className={styles.HeroPara}>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
          </div>

          <div style={{ marginTop: "25px" }}>
            <button className={styles.HeroButton}>Find Centers</button>
          </div>
        </div>
        {width>768 ? <HeroImg /> : <HeroImg width="80%" height="auto%" />}

        
      </div>
    </div>
  );
  
}