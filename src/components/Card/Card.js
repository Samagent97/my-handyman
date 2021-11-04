import './Card.css';
import CustomButton from '../CustomButtton/Custom-button'
import StarRating from '../StarRating/StarRating';


const Card = (props) => {
    return(
        <div className="card-container">
              <img alt = "" src="https://picsum.photos/id/1005/400/250"/>
            <div className="text">
                <h4>{props.name}</h4>
                <p>{props.skill}</p>
                <p>{props.address}</p>
                <StarRating/>
                <a href="url">VIEW ON MAP</a>   
            </div>
            <div className="btn">
                <CustomButton title ="call" style = {{ background:'#f0794f', color:'white' ,width:'150%',}} />
             </div>
           
    
        </div>

    );
}


export default Card;

