import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { blogger } from '../../utils/blogger';
import CustomInput from '../../components/CustomInput/Custom-Input';
import CustomButton from '../../components/CustomButtton/Custom-button';
import BlogList from '../../components/BlogCard/BlogList';
import Footer from '../../components/Footer/Footer';


const Blog = () => {
  return (
    <div>
      <Navbar/>
      <CustomInput placeholder="Search" style={{width:'20.5rem'}}/>
      <CustomButton title="Search" style={{width:"7rem"}}/>
      <BlogList blogger={blogger}/>  
      <Footer/>
    </div>
  );
}

export default Blog;