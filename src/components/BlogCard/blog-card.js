import './blog.css';
import CustomButton from '../CustomButtton/Custom-button';

 
const BlogCard = ({title,imageUrl,description}) => {
    return(
			<div className="blog-card">
				<img className='image' src={imageUrl} alt=''/>
				<div className="card-container">
						<h1 className='title'>{title}</h1> 
						<p className = "card-description">{description}</p>
						<CustomButton className="btn" title ="Read more" style = {{ background:'#f0794f', color:'white', }}/>
				</div>
			</div>
  );
}

export default BlogCard;