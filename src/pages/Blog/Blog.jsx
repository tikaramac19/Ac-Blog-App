import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { blogList } from "../../config/data";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import "./styles.css";
import Chip from "../../components/SharedComponent/Chip/Chip";
import EmptyList from "../../components/SharedComponent/emptyComp/EmptyList"
const Blog = () => {
  const { id } = useParams();
  // console.log(id)

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blogItem = blogList.find((item) => item.id === parseInt(id));
    // console.log(blog)
    if (blogItem) {
      setBlog(blogItem);
    }
  }, []);

  // destructuring blog items
  // const {title, category,description,authorName, authorAvatar,createdAt,cover} = blog

  return (
    <>
      <div className="blog-container">
        <Link to="/" className="go-back">
          <BsFillArrowLeftCircleFill className="goBack-icon"/> Go Back
        </Link>
        {blog ? (
          <div className="blog-wrap">
            <header>
              <p className="blog-date">Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className="sub-category">
                {blog.subCategory.map((category, index) => (
                  <div>
                    <Chip key={index} label={category} className="chip"/>
                  </div> 
                ))}
              </div>
            </header>
            <img src={blog.cover} alt="cover" />
            <p className="blog-description">{blog.description}</p>
            
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
      ;
    </>
  );
};

export default Blog;
