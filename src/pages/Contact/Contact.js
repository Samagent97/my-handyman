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
        <form className='Responsive-contact'>
          <h1 className="header">Contact</h1>
            <CustomInput type="Email" placeholder='Email' style={{width:"50%", height:"2rem"}}/>
            <CustomInput  placeholder='Message' style={{width:"50%", height:"18rem"}}/> <br/>
            <CustomButton title="Submit" style={{width:"40%"}}/>
        </form>
        <Footer />
      </div>
  
    );
  }






export default Contact;