import './blog.css';
import CustomButton from '../CustomButtton/Custom-button';
import { Link } from 'react-router-dom';
import { path } from '../../routes';

 
const BlogCard = ({title,imageUrl,description}) => {
    return(
			<div className="blog-card">
				<img className='image' src={imageUrl} alt=''/>
				<div className="blog-card-container">
						<h1 className='title'>{title}</h1> 
						<p className = "card-description">{description}</p>
						<Link to={`${path.blogView}/${title}`}>
						 <CustomButton  title ="Read more" />
						</Link>
				</div>
			</div>
  );
}

export default BlogCard;