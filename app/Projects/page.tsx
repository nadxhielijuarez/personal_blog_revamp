import React from 'react';
import learning_blog_placeholder from '../images/NextJs_learning1.jpeg';
import ContentSquareLayout from '../components/ContentSquareLayout';

export default function Projects() {
    
    return <>
    <ContentSquareLayout
        image={learning_blog_placeholder}
        imageTitle="Learning Blog Placeholder"
        contentTitle="My Personal Website!"
    />
    </>
}