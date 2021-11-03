import React from 'react';
import { blogger } from '../../components/BlogCard/blogger';
import BlogList from '../../components/BlogCard/BlogList';



const Blog = () => {
  return (
    <BlogList blogger={blogger}/>
  );
}

export default Blog;