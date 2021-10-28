import './custom-input.css';

function CustomInput(props) {
	return (
		<input className="custom-input" type={props.type} placeholder={props.placeholder}/>
	)
}


export default CustomInput;