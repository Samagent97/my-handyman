import './Navbar.css';
import { Link } from 'react-router-dom';
import {path} from '../../routes';
import Logo from '../../assets/Logo/Logo.png'

const Navbar = () => {
    return (
      
    <div className='navbar'>
      <div className='link'>
        <Link to={path.home}><img src={Logo} alt='HandyMan' style={{width:'50px'}}/></Link>
      </div>
      <ul className='push'>
        <li className='links'>
            <Link to={path.profile}>Profile</Link>
        </li>
        <li className='links'>
            <Link to={path.blog}>Blog</Link>
        </li>
        <li className='links'>
            <Link to={path.blogView}>Contact</Link>
        </li>
        <li className='links'>
            <Link to={path.login}>Logout</Link>
        </li>
      </ul>
    </div>
    );
  }
  export default Navbar;