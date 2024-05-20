import { ReactComponent as Medify } from "../../assests/LOGO.svg";
import React from "react";
import styles from "./NavBar.module.css";
import { StyleSharp } from "@mui/icons-material";

export default function NavBar() {
  return (
    // <div className={styles.NavBarContainer}>
    //   <Medify style={{ width: "92px", height: "27px" }} />
    //   <div className={styles.NavBarMenu}>
    //     <div className={styles.SubContainer}></div>
    //     <button style={{height:"21px",width:"87px"}} className={styles.NavBarButtons}>Find Doctors</button>
    //     <button style={{height:"21px",width:"65px"}} className={styles.NavBarButtons}>Hospitals</button>
    //     <button style={{height:"21px",width:"71px"}} className={styles.NavBarButtons}>Medicines</button>
    //     <button style={{height:"21px",width:"66px"}} className={styles.NavBarButtons}>Surgeries</button>
    //     <button style={{height:"21px",width:"145px"}} className={styles.NavBarButtons}>Software for provider</button>
    //     <button style={{height:"21px",width:"60px"}} className={styles.NavBarButtons}>Facilities</button>
    //   </div>
    //   <button className={styles.Booking}>My Bookings</button>
    // </div>

    <nav className={styles.NavBarWrapper}>
        
        <div className={styles.Navicon}><Medify style={{ width: "92px", height: "27px" }} /></div>
        <div className={styles.NavBarMenu}>
            <ul className={styles.menus}>
                <li>Find Doctors</li>
                <li>Hospitals</li>
                <li>Medicines</li>
                <li>Surgeries</li>
                <li>Software for provider</li>
                <li>Facilities</li>

            </ul>
            <button>My bookings</button>
        </div>
    </nav>
  );
}
