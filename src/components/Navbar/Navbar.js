import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar= () =>{
    return (
    <div className='navbar'>
      <li className='logo'>
        <img alt='My HandyMan' src='/'/>
      </li>
      <div className='push'>
        <li>
        <Link to="/">Profile</Link>
        </li>
        <li>
        <Link to="/">Blog</Link>
        </li>
        <li>
        <Link to="/">Contact</Link>
        </li>
        <li>
        <Link to="/">Logout</Link>
        </li>
      </div>
    </div>
    );
  }
  export default Navbar;