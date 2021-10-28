import {  Link } from "react-router-dom";
import './nav.css'

const navbar= () =>{
  return (
  <div className='NavBar'>
    <li>
       <img alt='My HandyMan' src='/'/>
    </li>
    <li className='push'>
      <Link to="/">Profile</Link>
    </li>
    <li>
      <Link to="/">Blog</Link>
    </li>
    <li>
      <Link to="/">Cantact</Link>
    </li>
    <li>
      <Link to="/">Logout</Link>
    </li>
  </div>
  );
}
export default navbar;