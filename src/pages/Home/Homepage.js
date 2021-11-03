import React from 'react';
import CustomButton from '../../components/CustomButtton/Custom-button';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CardList from '../../components/Card/CardList'
import { handy } from '../../components/Card/handy';
import CustomInput from '../../components/CustomInput/Custom-Input'

const Hompage = () => {
  return (
    <div className="Header">
      
      <NavBar />
      <CustomInput  placeholder="I am looking for ..." style={{width:"35.5em"}} />
      <CustomButton title ="Search" style={{width:"rem"}} />
      <CardList handy={handy}/>
      <Footer/>
    </div>
  );
}

export default Hompage;