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
            <h1 className="contact">Contact</h1>
            </div>
          <form className='responsive-contact'>
            <CustomInput className='as' type="text" placeholder='Full Name' style={{height:"3rem"}} /> 
            <CustomInput className='as' type="Email" placeholder='Email' style={{height:"3rem"}} /> 
            <textarea className='msg' variant='outlined' placeholder="Message" style={{outline:"none",}}></textarea> 
          <div className='contact-btn'>
            <CustomButton   type="submit" title="Submit" style={{width:"25rem",height:"3rem"}}/> 
          </div>
          </form> 
        <Footer />
      </div>
  
    );
  }






export default Contact;