import './custom-button.css'


const CustomButton = (props)=> { 
    return (
        <button className='c-btn'>
            {props.btntitle}
        </button>
        );
    }

export default CustomButton;
