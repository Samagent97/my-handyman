import './Custom-Input.css'

const CustomInput = ({style, type , placeholder,  }) => {
    return (
        <input id ="custom-input" style = {style} type ={type} placeholder = {placeholder}  />
    )
}
export default CustomInput;