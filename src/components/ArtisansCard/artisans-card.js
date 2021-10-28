import './artisans-card.css'

const ArtisansCard = (props) => {
    return(
        <div className='artisantsCard'>
            
           
            <div>
                <div>
                <img alt='profile-pics' src='' />
                <hr/>
                </div>
                
                <h1>{props.name}</h1>
                <h2>{props.phoneno}</h2>
                <h2>{props.skill}</h2>
                <h3>{props.email}</h3>
                
                
            </div>

        
        </div>
        

    );
}
export default ArtisansCard;