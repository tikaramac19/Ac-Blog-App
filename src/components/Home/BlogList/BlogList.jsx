import React from "react";
import styles from "./BlogList.module.css";
import BlogItem from "./BlogItem/BlogItem"; 

const BlogList = ({ blogs }) => {
  return (
    <div className={styles.bloglist_wrap}>
      {blogs.map((blog) => {
        return (
          <>
            <BlogItem blog={blog} key={blog.id}/>
          </>
        );
      })}
    </div>
  );
};

export default BlogList;
