import './artisansblog.css';

const ArtisansBlogCard = ({title,imageUrl,description}) => {
    return(
			<div className="artisan-card">
				<img className='image' src={imageUrl} alt=''/>
				<div className="card-container">
						<h1 className='title'>{title}</h1> 
						<p className = "card-description">{description}</p>
						<button className ="btn">
							<a> Read more </a>
						</button>
				</div>
			</div>
  );
}
export default ArtisansBlogCard;