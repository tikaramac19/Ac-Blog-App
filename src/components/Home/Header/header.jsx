import React from "react";
import styles from "./header.module.css";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className={styles.home_header}>
      {/* navbar import */}
      {/* <Navbar /> */}
      <h2>Have A Fantastic Day Folks !!</h2>
      <h1>
        <span></span>Ac - Blog <span></span>
      </h1>
      <p>
        awasome place to make yourself <br /> productive and entertained through
        daily updates.
      </p>
    </div>
  );
};

export default Header;
