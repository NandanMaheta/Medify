import styles from "./Footer.module.css";
import { ReactComponent as Medify } from "../../assests/LOGO.svg";
import Fb from "../../assests/fb.png";
import Pin from "../../assests/pintrest.png";
import ytube from "../../assests/ytube.png";
import Twt from "../../assests/twittr.png";
import arw from "../../assests/aerrow.png";
import {useWidth} from "../../customhook";
export default function Footer() {

  const {width} = useWidth();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.InnerWrapper}>
        <div className={styles.Top}>
          <div className={styles.IconWrapper}>
            {width > 1023 ? <Medify /> : <Medify className={styles.Small} />}

            <div className={styles.Icons}>
              <img src={Fb} alt="" />
              <img src={Twt} alt="" />
              <img src={ytube} alt="" />
              <img src={Pin} alt="" />
            </div>
          </div>
          <div className={styles.Menu}>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>About Us</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Our Pricing</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Our Gallary</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Appointment</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Privacy Policy</span>
            </div>
          </div>
          <div className={styles.Menu}>
          <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Orthology</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Neurology</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Dental Care</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Opthalmology</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Cardiology</span>
            </div>
          </div>
          <div className={styles.Menu}>
          <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>About Us</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Our Pricing</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Our Gallary</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Appointment</span>
            </div>
            <div>
              <span style={{marginRight:"12px"}}>
                <img src={arw} alt="" />
              </span>
              <span className={styles.bullets}>Privacy Policy</span>
            </div>
          </div>
        </div>
        <div className={styles.Bottom}>
          <span className={styles.BottomText}>
            Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}
