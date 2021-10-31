import './Artisansblog.css';

const ArtisansBlogCard = ({title,imageUrl,body}) => {
    return(
    <div>
        <h1 className='title'>{title}</h1> 
     <span className="Card-container">
        <img className='image' src={imageUrl} alt=''/>
        <p className = "card-description">{body}</p>
        <button className ="btn">
            <a> Read more </a>
        </button>
    </span>
  </div>
  );
}
export default ArtisansBlogCard;