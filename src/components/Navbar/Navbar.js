import './Navbar.css';
import { Link } from 'react-router-dom';
import {path} from '../../routes';

const Navbar = () => {
    return (
    <div className='navbar'>
      <div className='link'>
        <img alt='My Handy Man' src='/'/>
      </div>
      <ul className='push'>
        <li className='links'>
            <Link to={path.profile}>Profile</Link>
        </li>
        <li className='links'>
            <Link to={path.blog}>Blog</Link>
        </li>
        <li className='links'>
            <Link to="/b">Contact</Link>
        </li>
        <li className='links'>
            <Link to="/">Logout</Link>
        </li>
      </ul>
    </div>
    );
  }
  export default Navbar;