import './Navbar.css';
import { Link } from 'react-router-dom';
import {path} from '../../routes';
import Logo from '../../assets/Logo/Logo.png'

const Navbar = () => {
    return (

    <div className='navbar'>
      <div className='link'>
        <a href='/'><img src={Logo} alt='HandyMan' style={{width:'80px'}}/></a>
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