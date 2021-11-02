import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import BlogCard from '../../components/BlogCard/blog-card';

const Blog = () => {
  return (
    <div>
      <NavBar />
      <BlogCard
      title='Blog Card'
      imageUrl='https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJsb2clMjBiYWNrZ3JvdW5kJTIwaW1hZ2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima esse praesentium quo perspiciatis dicta ad, vero amet dolore similique facilis iure, sit nobis natus iusto, vel aliquid sapiente dignissimos optio aspernatur minus aperiam dolores hic?'
      />
    </div>
  );
}

export default Blog;