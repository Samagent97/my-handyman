import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import { path } from "../../routes";
import Home from '../../assets/Logo/Home.png'
import './Register.css'


const Register = (props) => {
  return (
    <div className='register'>

      <div className='home'>  
        <Link to={path.home}><img src={Home} alt='HandyMan' style={{width:'30px'}}/></Link>
      </div>

        <form className='Register-form'>
        <h1>Register</h1>
        <div className = 'input'>
          <CustomInput type="Full Name"  placeholder='Full Name' style={{width:"16rem",padding:"4px"}}/>
          <br/>
          <CustomInput type="Email"  placeholder='Email' style={{width:"16rem",padding:"4px"}}/>
          <br/>
          <CustomInput type="Phone No."  placeholder='Phone No.' style={{width:"16rem",padding:"4px"}}/>
          <br/>
          <CustomInput type="password"  placeholder='Password' style={{width:"16rem",padding:"4px"}}/>
          <br/>
          <CustomInput type="password"  placeholder='Confirm Password' style={{width:"16rem",padding:"4px"}}/>
          <br/>
          <CustomButton title="Register" style={{width:"17rem",padding:"12px", height:"2rem"}}/>
           <p>forgot password? </p>
          <Link to={path.login}><p>Already have an account? Login</p></Link>
          </div>
       </form>
    <div className='background-img'>
    <img src="https://media.istockphoto.com/photos/group-of-young-friends-catching-up-picture-id1243622637?b=1&k=20&m=1243622637&s=170667a&w=0&h=eNN6RjTD_QjDddpxKk5j_jvQE18T-7k1wyd5as_tifw=" alt ="Background"/>
    </div>
    </div>

  );
}

export default Register;