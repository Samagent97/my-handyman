import './artisans-card.css'

const ArtisansCard = (props) => {
    return(
        <div className='artisantsCard'>
            <img alt='profile-pics' src='' />
            <div>
                <h1>{props.name}</h1>
                <p>{props.phoneno}</p>
                <h2>{props.skill}</h2>
                <p>{props.email}</p>
                <p>hard coded text for clearity</p>
            </div>

        </div>
        

    );
}
export default ArtisansCard;