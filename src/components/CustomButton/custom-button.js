import './custom-button.css'


const Button = (props)=> { 
    return (
        <button className='c-btn'>
            {props.btntitle}
        </button>
        );
    }

export default Button;
