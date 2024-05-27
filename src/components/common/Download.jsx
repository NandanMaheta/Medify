import React from "react";
import styles from "./Download.module.css";
import { Button } from "@mui/material";

import Vector from "../../assests/Vector.png";

import mobileIcon from "../../assests/mobile.png";
import GPlay from "../../assests/google_play.png"
import AppleBtn from "../../assests/apple_store.png";

export default function Download() {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.Wrapper}>
        <div className={styles.ImageContainer}>
          <img src={mobileIcon} alt="" srcset="" />
        </div>

        <img src={Vector} alt="Arrow" />

        <div className={styles.textContainer}>
          <div className={styles.downloadText}>
            <p>
              Download the <span>Medify</span> App
            </p>
          </div>

          <p className={styles.BtmLine}>Get the link to download the app</p>
          <div className={styles.inputContainer}>
            <div className={styles.inputNum}>+91</div>
            <input type="text" />
            <Button variant="contained" size="l">
              Send SMS
            </Button>
          </div>

          <div className={styles.buttonGroup}>
            <img src={GPlay} alt="" srcset="" />
            <img src={AppleBtn} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
