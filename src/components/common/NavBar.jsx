import { ReactComponent as Medify } from "../../assests/LOGO.svg";
import React from "react";
import styles from "./NavBar.module.css";
import { StyleSharp } from "@mui/icons-material";

export default function NavBar() {
  return (
    <nav className={styles.NavBarWrapper}>
      <div className={styles.Navicon}>
        <Medify style={{ width: "92px", height: "27px" }} />
      </div>
      <div className={styles.NavBarMenu}>
        <ul className={styles.subCont}>
          <li className={styles.menu}>Find Doctors</li>
          <li className={styles.menu}>Hospitals</li>
          <li className={styles.menu}>Medicines</li>
          <li className={styles.menu}>Surgeries</li>
          <li className={styles.menu}>Software for provider</li>
          <li className={styles.menu}>Facilities</li>
        </ul>
        <button className={styles.booking}>My bookings</button>
      </div>
    </nav>
  );
}
