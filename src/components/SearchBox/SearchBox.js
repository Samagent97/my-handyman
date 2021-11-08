import './SearchBox.js'
import './SearchBox.css'
const SearchBox = ({style,type,placeholder,title}) => {
    return(
        <div>
        <button id ="custom-button"  style={style}>
      {title}
      <input id ="custom-input" style = {style} type ={type} placeholder = {placeholder}  />
    </button>
   
       

        </div>
      
    );
}

export default SearchBox;




