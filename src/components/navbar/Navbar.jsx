import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <><header>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <div className={styles.logoContainer}><img className={styles.logo} src="/Sangeeta.png" alt="Logo" />
                    <p className={styles.logoText} id={styles.Sangeeta}>Sangeeta </p>
                    <p className={styles.logoText} id={styles.Makover}>Makover </p>
                    <p className={styles.logoText} id={styles.Studio}>Studio</p>
                    </div>
                    <div className={styles.options}>
                        <img 
                        className={styles.menuBtn}
                        src={
                            menuOpen ? "/closeIcon.png" : "/menuIcon.png"
                        }alt="menu-button" 
                        onClick={()=>{setMenuOpen(!menuOpen)}}
                        />
                        
                        <ul className={`${styles.option} ${menuOpen && styles.menuOpen}`}>
                            <li className={styles.home}>
                            <NavLink
                                to="/"
                                    style={({ isActive }) =>({
                                        color:isActive?"#f5f5f5":"#000"
                                    })}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className={styles.services}>
                            <NavLink
                                to="/services"
                                    style={({ isActive }) =>({
                                        color:isActive?"#f5f5f5":"#000"

                                    })}
                                        
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li className={styles.about}>
                            <NavLink
                                to="/about"
                                    style={({ isActive }) =>({
                                        color:isActive?"#f5f5f5":"#000"

                                    })
                                        
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className={styles.contact}>
                            <NavLink
                                to="/contact"
                                    style={({ isActive }) =>({
                                        color:isActive?"#f5f5f5":"#000"

                                    })}
                                        
                                >
                                    Contact
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
            </header>
        </>
    )
}

export default Navbar;