import './custom-button.css'


const CustomButton = (props)=> { 
    return (
        <button className='c-btn' onclick="">
        <p>{props.btntitle}</p>
        <p>Test Run</p>
        </button>
        );
    }

export default CustomButton;
