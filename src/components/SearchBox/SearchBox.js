// import './SearchBox.js'
import { Component } from 'react';
import './SearchBox.css'
import CustomButton from '../CustomButtton/Custom-button.js';
import CustomInput from '../CustomInput/Custom-Input.js';

class SearchBox extends Component {
    constructor(){
        super()
        this.state={
            filteredHandy:""
        }
    }

    onInputChange = e => {
        this.setState({ filteredHandy: e.target.value })
    }

    updateHomeState = (event) => {
        event.preventDefault();
        if (!this.state.filteredHandy) return;
        this.props.onValueChange(this.state.filteredHandy)
    }

        render(){
    
        return(
            <form onSubmit={this.updateHomeState}>
                <div>
                <CustomInput onChange={this.onInputChange}  placeholder="I am looking for ..." style={{width:"25.5rem", height:"2.3rem"}} />
                <button title="clear">X</button>
                </div>
                    <CustomButton type="submit" title ="Search" style={{ width:"9rem",height:"2.7rem" }} />
            </form>
        );
    }
}

export default SearchBox;




