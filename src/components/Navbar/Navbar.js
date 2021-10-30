import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar= () =>{
    return (
    <div className='navbar'>
      <li className='link'>
        <img alt='My HandyMan' src='/'/>
      </li>
      <ul className='push'>
        <li className='links'>
            <Link to="/">Profile</Link>
        </li>
        <li className='links'>
            <Link to="/">Blog</Link>
        </li>
        <li className='links'>
            <Link to="/">Contact</Link>
        </li>
        <li className='links'>
            <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
    );
  }
  export default Navbar;