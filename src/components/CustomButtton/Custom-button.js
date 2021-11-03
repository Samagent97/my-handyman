import "./Custum-button.css"

const CustomButton = ({title , style}) => {
    return (
    <button id ="custom-button" style={style}>
      {title}
    </button>
    );
}
export default CustomButton;