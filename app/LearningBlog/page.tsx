import React from 'react';
import learning_blog_placeholder from '../images/NextJs_learning1.jpeg';
import ContentSquareLayout from '../components/ContentSquareLayout';
import '../css/article_project_landing.css';

export default function LearningBlog() {

    return <>
        <h2>My Learning Blog</h2>
        <ContentSquareLayout
            image={learning_blog_placeholder}
            imageTitle="Learning Blog Placeholder"
            contentTitle="First Post: My Learning Journey with Next.js"
        />
    </>
}