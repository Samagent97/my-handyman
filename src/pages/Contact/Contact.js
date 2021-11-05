import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import './Contact.css';


const Contact = (props) => {
    return (
      <div className='Contact'>
          <Navbar />
        <form className='responsive-contact'>
          <h1 className="header">Contact</h1>
          <CustomInput type="text" placeholder='Full Name' style={{width:"50%", height:"2rem"}}/> 
            <CustomInput type="Email" placeholder='Email' style={{width:"50%", height:"2rem"}}/> <br/>
           <textarea variant='outlined' placeholder="Message" style={{width:"50%", height:"18rem",}}></textarea> <br/>
            <CustomButton title="Submit" style={{width:"50%", height:"3rem"}}/>
        </form>
        <Footer />
      </div>
  
    );
  }






export default Contact;