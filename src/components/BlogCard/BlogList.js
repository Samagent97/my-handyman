import React from 'react';
import BlogCard from './blog-card';

const BlogList = ({blogger}) => {
    const cardComponent = blogger.map((user,i) =>{
        return(
            <BlogCard
            key={i}
            id={blogger[i].id}
            title={blogger[i].title}
            imageUrl={blogger[i].imageUrl}
            description={blogger[i].description}
            />
        )
    })
    return(
        <div>
        {cardComponent}
      </div>

    );
}

export default BlogList;