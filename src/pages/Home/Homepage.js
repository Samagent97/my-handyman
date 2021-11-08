import React from 'react';
import CustomButton from '../../components/CustomButtton/Custom-button';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CardList from '../../components/CardList/CardList';
import { handy } from '../../utils/handy';
import CustomInput from '../../components/CustomInput/Custom-Input';
import './Homepage.css';


const Homepage = () => {
  return (
    <div className="Header">
      <NavBar />
      <div className= "responsive-searchbox">
        <CustomInput  placeholder="I am looking for ..." style={{width:"50%"}} />
        <CustomButton title ="Search" style={{ width: '20%'}} />
      </div>
      <CardList handy={handy}/>
      <Footer/>
    </div>
  );
}

export default Homepage;