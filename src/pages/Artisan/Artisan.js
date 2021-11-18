import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import './artisan.css'

const Artisan = () =>{
    return(
        <div>
        <Navbar />
        <div className='master-form'>
        <div className='artisan-form'>
        <p id='arp'>Image Upload</p>
            <div className="upload-input">
            <CustomInput id='ars' type="file" placeholder='' style={{width:"90%", height:"2rem", margin:'1px 0px'}}/>
            </div>
            <div>
            <CustomButton title="upload" style={{width:"5rem", height:"2rem", margin:'1px 160px'}}/>
            </div>
            <p id='arp'>Full Name</p>
            <CustomInput id='ars' type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            <p id='arp'>Phone Number</p>
            <CustomInput id='ars' type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
        </div >
        <div className='artisan-form1'>
            <p id='arp'>Email</p>
            <CustomInput id='ars' type="Email" placeholder='' style={{width:"90%", height:"2rem"}}/> 
            <p id='arp'>Office Address</p>
            <CustomInput id='ars' type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            <p id='arp'>Skill</p>
            <CustomInput id='ars' type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            </div> 
            </div>
            <div className='artisan-btn'>
             <CustomButton  title="Submit" style={{width:"15%", height:"3rem"}}/>
        </div>
        
        <Footer />
        </div>

    );
}

export default Artisan;