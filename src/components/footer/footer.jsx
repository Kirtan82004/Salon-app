import React from "react";
import styles from "./footer.module.css";
import {  NavLink} from "react-router-dom";

function Footer(){
    return(
        <>
        <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="/Sangeeta.png" alt="Logo" className={styles.logo} />
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" activeClassName={styles.active}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName={styles.active}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Sangeeta Makover Studio. All rights reserved.
      </div>
    </footer>
        </>
    )

}

export default Footer;