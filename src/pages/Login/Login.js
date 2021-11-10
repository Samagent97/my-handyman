import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButtton/Custom-button";
import CustomInput from "../../components/CustomInput/Custom-Input";
import { path } from "../../routes";
import './Login.css'

const Login = (props) => {
  return (
    <div className='login'>
      <div className="form">
        <form className="text" method="">
            <h1>Login</h1>
                <CustomInput type="Email" placeholder='Email' style={{width:"16rem",padding:"10px"}}/>
                <br/>
                <CustomInput type="password" placeholder='Password' style={{width:"16rem",padding:"10px"}}/>
                <br/>
                <CustomButton title="Login" style={{width:"13.5rem",padding:"15px", }}/>
                    <p>forgot password?</p>
                <Link to={path.register} >Don't have an account?Register</Link>
          </form>
      </div> 
        <div className='image'>
              <img src="https://media.istockphoto.com/photos/group-of-young-friends-catching-up-picture-id1243622637?b=1&k=20&m=1243622637&s=170667a&w=0&h=eNN6RjTD_QjDddpxKk5j_jvQE18T-7k1wyd5as_tifw=" alt ="Background"/>
        </div>
    </div>
  );
}

export default Login;