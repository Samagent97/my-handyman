import "./Custum-button.css"

const CustomButton = ({tittle , style}) => {
    return (
    <button id ="CustomButton" style={style}>
      {tittle}
    </button>
    );
}
export default CustomButton;