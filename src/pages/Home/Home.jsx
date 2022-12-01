import React, { useState } from "react";
import styles from "./Home.module.css";
import Header from "../../components/Home/Header/header";
import SearchBar from "../../components/Home/SearchBar/SearchBar";
import BlogList from "../../components/Home/BlogList/BlogList";
import { blogList } from "../../config/data";
import EmptyList from "../../components/SharedComponent/emptyComp/EmptyList";
const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  // console.log(searchKey, "kera mula")
  // search submit

  const handelSearchSubmit = (e) => {
    e.preventDefault();

    handleSearchResults();
  };

  // search for blogs by categories
  const handleSearchResults = () => {
    const allBlogs = blogList;

    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey)
    );

    setBlogs(filteredBlogs);
  };
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };
  return (
    <div className={styles.home_container}>
      {/* page header */}

      <Header />

      {/* search bar */}

      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handelSearchSubmit}
        handelSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* BLog list and empty list */}
      {!blogs.length ?<EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
