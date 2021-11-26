import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import './artisan.css'
// import { Cloudinary } from "@cloudinary/url-gen";

//     const cld = new Cloudinary.Artisan({
//     cloud: {
//       cloudName: 'mbrag'
//     }
//   });
class Artisan extends Component{
    constructor() {
        super()
        this.state = {
            imageInput:""
        }
    }
    // onInputChange =(e)=>{
    //     this.setState({imageInput:e.target.value});
    // }
    // onUploadButton = ()=> {
    //     console.log(this.onInputChange)
    //     cld.image()
    // }
    render(){
            return(
        <div>
        <Navbar />
        <div className='master-form'>
        <div className='artisan-form'>
        <p id='arp'>Image Upload</p>
            <CustomInput onChange={this.onInputChange} className="ars-upload-input" type="file" placeholder='' style={{width:"90%", height:"2rem"}}/>
            <CustomButton className="ars-upload-button" title="upload" onClick={this.onUploadButton} style={{width:"25%", height:"2rem"}}/>
            <p id='arp'>Full Name</p>
            <CustomInput  type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            <p id='arp'>Phone Number</p>
            <CustomInput type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
        </div>
        <div className='artisan-form1'>
            <p id='arp'>Email</p>
            <CustomInput  type="Email" placeholder='' style={{width:"90%", height:"2rem"}}/> 
            <p id='arp'>Office Address</p>
            <CustomInput  type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            <p id='arp'>Skill</p>
            <CustomInput  type="Text" placeholder='' style={{width:"90%", height:"2rem"}}/>
            </div> 
            </div>
            <div className='artisan-btn'>
             <CustomButton className="submit-btn" title="Submit" style={{width:"15%", height:"3rem"}}/>
        </div>
        
        <Footer />
        </div>

        );
    }
}

export default Artisan;