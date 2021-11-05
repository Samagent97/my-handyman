import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import './Register.css'

const Register = (props) => {
  return (
    <div className='register'>
        <form className='Register-form'>
        <h1>Register</h1>
        <div className = 'input'>
          <CustomInput type="Full Name"  placeholder='Full Name' style={{width:"20rem"}}/>
          <br/>
          <CustomInput type="Email"  placeholder='Email' style={{width:"20rem"}}/>
          <br/>
          <CustomInput type="Phone No."  placeholder='Phone No.' style={{width:"20rem"}}/>
          <br/>
          <CustomInput type="password"  placeholder='Password' style={{width:"20rem"}}/>
          <br/>
          <CustomButton title="Register" style={{width:"20rem"}}/>
          </div>
          <Link><p>forgot password? </p></Link>
          <Link ><p>Already have an account? Login</p></Link>
       </form>
    <img className="img" src="https://media.istockphoto.com/photos/group-of-young-friends-catching-up-picture-id1243622637?b=1&k=20&m=1243622637&s=170667a&w=0&h=eNN6RjTD_QjDddpxKk5j_jvQE18T-7k1wyd5as_tifw=" alt ="Background"/>
    </div>

  );
}

export default Register;