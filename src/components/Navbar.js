import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Navbar.module.css";
import cx from "classnames";
import { Button } from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleMenu = () => {
    setClick(!click);
  };
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => {
    setClick(false);
  };
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <Link to="/" className={styles.navbarLogo}>
            AKASH
          </Link>
          <div className={styles.menuIcon} onClick={handleMenu}>
            {click ? "-" : "x"}
          </div>
          <ul
            className={
              click ? cx(styles.navMenu, styles.active) : styles.navMenu
            }
          >
            <li className={styles.navItems}>
              <Link
                to="/"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={styles.navItems}>
              <Link
                to="/services"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className={styles.navItems}>
              <Link
                to="/product"
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Product
              </Link>
            </li>
            <li className={styles.navItems}>
              <Link
                to="/sign-up"
                className={styles.navLinksMobile}
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
