import React from 'react';
// import { Link } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
// import { path } from '../../routes';
import './About us.css'
import Ham from '../../images/Ham.jpg';
import CustomButton from '../../components/CustomButtton/Custom-button';
import { Link } from 'react-router-dom';
import { path } from '../../routes';
import BlogCard from '../../components/BlogCard/blog-card';


function Aboutus({title,imageUrl,description}) {

    
    return (
        <div>
        <Navbar />
        
            <div className="work">
                    <div className="about">
                    <img className='home-image' src={Ham} style={{}}/>
                  </div>
                  <div className="title1">  <h1>About Us</h1>
                <h2 className="header">MY HANDYMAN</h2>
                <p>
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   

                </p>

                </div>
                 </div>
                 <div className="title2">
                 <h3>Our Team</h3>
                 <p>
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   
                   lorem sdsidhjdbfndfbd  b chdfbsdbhdhdd bhdbdjbdvd chbcdbdjskd ds cd sdkbcbksjd  nds jbdkbsjcbd cbc jcc  cscbkshcbhcbscsbhd   

                </p>
                 </div>
                
            <Footer />
        </div>
    );
}

export default Aboutus;