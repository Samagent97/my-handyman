import React from 'react';
import CustomButton from '../../components/CustomButtton/Custom-button';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CustomInput from '../../components/CustomInput/Custom-Input'

const Hompage = () => {
  return (
    <div>
      <NavBar />
      <CustomInput  placeholder="Enter your name"/>
      <CustomButton title ="call"  />
      <h1>Home</h1>
      <Footer/>
    </div>
  );
}

export default Hompage;