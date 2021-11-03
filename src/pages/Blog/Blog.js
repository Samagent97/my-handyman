import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { blogger } from '../../components/BlogCard/blogger';
import CustomInput from '../../components/CustomInput/Custom-Input';
import CustomButton from '../../components/CustomButtton/Custom-button';
import BlogList from '../../components/BlogCard/BlogList';
import Footer from '../../components/Footer/Footer';


const Blog = () => {
  return (
    <div>
      <Navbar/>
      <CustomInput placeholder="I am looking for ..." style={{width:'30rem'}}/>
      <CustomButton title="Search"/>
      <BlogList blogger={blogger}/>  
      <Footer/>
    </div>
  );
}

export default Blog;