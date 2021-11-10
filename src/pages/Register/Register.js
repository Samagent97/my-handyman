import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import { path } from "../../routes";
import Home from '../../assets/Logo/Home.png'
import './Register.css'
import handyMan2 from "../../assets/Images/handyMan2.jpeg";



const Register = (props) => {
  return (
    <div className='register'>

      <div className='home'>  
        <Link to="/">
          <svg height="55" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="white" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(1 1)"><path d="m.5 9.5 9-9 9 9"/><path d="m2.5 7.5v7c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-7"/></g></svg>
        </Link>
      </div>

        <form className='Register-form'>
        <h1>Register</h1>
        <div className = 'input'>
          <CustomInput type="Full Name"  placeholder='Full Name' style={{width:"16rem",padding:"8px"}}/>
          <br/>
          <CustomInput type="Email"  placeholder='Email' style={{width:"16rem",padding:"8px"}}/>
          <br/>
          <CustomInput type="Phone No."  placeholder='Phone No.' style={{width:"16rem",padding:"8px"}}/>
          <br/>
          <CustomInput type="password"  placeholder='Password' style={{width:"16rem",padding:"8px"}}/>
          <br/>
          <CustomInput type="password"  placeholder='Confirm Password' style={{width:"16rem",padding:"8px"}}/>
          <br/>
          <CustomButton title="Register" style={{width:"17rem",padding:"12px", height:"3rem"}}/>
           {/* <p>forgot password? </p> */}
          <Link to={path.login}><p>Already have an account? Login</p></Link>
          </div>
       </form>
    <div className='background-img'>
        <img src={handyMan2} alt="photo"/>
    </div>
    </div>

  );
}

export default Register;