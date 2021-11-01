import React from 'react';
import CustomButton from '../../components/CustomButtton/Custom-button';
import NavBar from '../../components/Navbar/Navbar';

const Hompage = () => {
  return (
    <div>
      <NavBar />
      <CustomButton tittle ="call" style = {{ background:'#f0794f', color:'white' ,width:'100px'}} />
      <h1>Home</h1>
    </div>
  );
}

export default Hompage;