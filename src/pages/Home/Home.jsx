import React from 'react'
import styles from "./Home.module.css"
import Header from '../../components/Home/Header/header'
import SearchBar from '../../components/Home/SearchBar/SearchBar'
import BlogList from '../../components/Home/BlogList/BlogList'
import { blogList } from '../../config/data'

const Home = () => {
  return (
    <div className={styles.home_container}>
        
    {/* page header */}

    <Header />


    {/* search bar */}

    <SearchBar />

    {/* BLog list and empty list */}

    <BlogList  blogs={blogList}/>

    </div>
  )
}

export default Home