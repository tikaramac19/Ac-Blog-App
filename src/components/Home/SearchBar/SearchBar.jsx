import React from "react";
import { useState } from "react";
import styles from "./SearchBar.module.css";
const SearchBar = ({ value, handelSearchKey, formSubmit, clearSearch }) => {
  return (
    <div className={styles.searchbar}>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          onChange={handelSearchKey}
          placeholder="Search By Category "
          value={value}
        />
        {value && <span onClick={clearSearch} className ={styles.exit}>X</span>}

        <button>Go</button>
      </form>
    </div>
  );
};

export default SearchBar;
