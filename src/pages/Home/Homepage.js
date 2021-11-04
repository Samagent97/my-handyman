import React from 'react';
import CustomButton from '../../components/CustomButtton/Custom-button';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CardList from '../../components/CardList/CardList';
import { handy } from '../../utils/handy';
import CustomInput from '../../components/CustomInput/Custom-Input'
import './Homepage.css'


const Homepage = () => {
  return (
    <div className="Header">
      <NavBar />
      <CustomInput  placeholder="I am looking for ..." style={{width:"35.5em"}} />
      <CustomButton title ="Search" style={{width:"7rem"}} />
      <CardList handy={handy}/>
      <Footer/>
    </div>
  );
}

export default Homepage;