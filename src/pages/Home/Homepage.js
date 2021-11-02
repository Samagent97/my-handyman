import React from 'react';
import CustomButton from '../../components/CustomButtton/Custom-button';
import NavBar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import CustomInput from '../../components/CustomInput/Custom-Input'

const Hompage = () => {
  return (
    <div>
      <NavBar />
      <CustomInput/>
      <CustomButton title ="call" style = {{ background:'#f0794f', color:'white' ,width:'100px'}} />
      <h1>Home</h1>
      <Footer/>
    </div>
  );
}

export default Hompage;