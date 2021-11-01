import "./Custum-button.css"

const CustomButton = ({title , style}) => {
    return (
    <button id ="CustomButton" style={style}>
      {title}
    </button>
    );
}
export default CustomButton;