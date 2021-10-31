import './artisansblog.css';

const ArtisansBlogCard = ({title,imageUrl,body}) => {
    return(
        <div className="Card-container">
            <div className= "image-container">
            <img className='imageb ' src={imageUrl} alt=''/>
            </div>
            <div className = "Card-title">
               <h1>{title}</h1> 
               </div>
            <div className = "card-body" >
                <p>{body}</p>
            </div>  
            <div className ="btn">
                <button>
                    <a>
                        Read more 
                    </a>
                </button>
            </div>
                </div>

        
        

    );
}
export default ArtisansBlogCard;