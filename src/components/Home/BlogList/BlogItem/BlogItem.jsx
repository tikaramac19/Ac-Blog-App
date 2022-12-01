import React from "react";
import styles from "./BlogItem.module.css";
import Chip from "../../../SharedComponent/Chip/Chip";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
const BlogItem = ({ blog }) => {
  const {
    id,
    title,
    category,
    description,
    authorName,
    authorAvatar,
    createdAt,
    cover,
  } = blog;
  return (
    <>
      <div className={styles.blogitem_container}>
        <img src={cover} alt="cover" className={styles.blog_cover} />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className={styles.blog_description}>{description}</p>

        <footer>
          <div className={styles.blogItem_author}>
            <img src={authorAvatar} alt="authorImg" />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link to={`/blog/${id}`} className={styles.blog_link}>
            
            <BsFillArrowRightSquareFill />
          </Link>
        </footer>
      </div>
    </>
  );
};

export default BlogItem;
