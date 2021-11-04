import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import './Login.css'

const Login = (props) => {
  return (
    <div className='login'>
      <form className='form'>
        <h1 className="header">Login</h1>
          <CustomInput type="Email" placeholder='Email' style={{width:"15rem"}}/>
          <CustomInput type="password" placeholder='Password' style={{width:"15rem"}}/>
          <CustomButton title="Login"/>
          <p>forgot password?</p>
        <Link >Don't have an account?Register</Link>
      </form>
      <img className="img" src="https://media.istockphoto.com/photos/group-of-young-friends-catching-up-picture-id1243622637?b=1&k=20&m=1243622637&s=170667a&w=0&h=eNN6RjTD_QjDddpxKk5j_jvQE18T-7k1wyd5as_tifw=" alt ="Background"/>
    </div>

  );
}

export default Login;