import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import './Contact.css';


const Contact = (props) => {
    return (
      <div>
          <Navbar />
            <div>
            <h1>Contact</h1>
            </div>
          <div className='responsive-contact'>
            <textarea id='as' type="text" placeholder='Full Name' style={{width:"100%", height:"2rem"}}></textarea> 
            <textarea id='as' type="Email" placeholder='Email' style={{width:"100%", height:"2rem"}}></textarea> 
           <textarea id='as' variant='outlined' placeholder="Message" style={{width:"100%", height:"10rem"}}></textarea> 
          </div>
          <div className='contact-btn'>
          <CustomButton id='is' title="Submit" style={{width:"10%", height:"2rem"}}/> 
          </div>
          
        <Footer />
      </div>
  
    );
  }






export default Contact;