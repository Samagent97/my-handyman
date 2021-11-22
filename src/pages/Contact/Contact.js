import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import './Contact.css';
import CustomInput from "../../components/CustomInput/Custom-Input";


const Contact = (props) => {
    return (
      <div>
          <Navbar />
            <div>
            <h1>Contact</h1>
            </div>
          <div className='responsive-contact'>
            <CustomInput id='as' type="text" placeholder='Full Name'/> 
            <CustomInput id='as' type="Email" placeholder='Email'/> 
            <textarea id='msg' variant='outlined' placeholder="Message"></textarea> 
          
          <div className='contact-btn'>
            <CustomButton id='is' type="submit" title="Submit"/> 
          </div>
          </div> 
        <Footer />
      </div>
  
    );
  }






export default Contact;