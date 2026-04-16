import React from 'react';
import BlogArticle from '../components/BlogArticle';
import '../css/article_project_landing.css';
import '../css/original.css';
import blog_image from '../images/NextJs_learning1.jpeg';


export default function BlogArticlePage() {
    return (
        <>
          <BlogArticle 
          title="Blog Article" 
          content="Content" 
          date="Date" 
          tags={['Tag']} 
          image={blog_image} />
        </>
    );
}