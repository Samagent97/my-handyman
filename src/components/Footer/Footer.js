import './Footer.css';

const Footer =() =>{
    return (
    <div className='footer'>
        <li className='link'>
            <img alt='My HandyMan' src='/'/>
        </li>
    <ul className='company'>
        <li className='links'>
            <a className='mine'to="/">About us</a>
        </li>
        <li className='links'>
            <a className='mine'to="/">Terms of use</a>
        </li>
    </ul>
    </div>  
    );
}
    export default Footer;