import React from 'react';
import learning_blog_placeholder from '../images/NextJs_learning1.jpeg';
import ProjectSquareLayout from '../components/ProjectSquareLayout';
import Image from 'next/image';
import blog_image from '../images/projects_image.png';
import TagSection from '../components/TagSection';

export default function Projects() {
    
    return <>
        <div className="blogTitle">
        <div className="blogTitle-column">
        <div id="blogTitle-container" className="vertical-line">
            <div className="blogTitle-text">My Projects</div>
            <br />
        </div>
        </div>
        <div className="blogTitle-column">
            <div className="BlogImageContainer">
            <Image className="BlogImage" src={blog_image} alt="Personal Website" />
            </div>
        </div>
    </div>


    <ProjectSquareLayout
        image={learning_blog_placeholder}
        imageTitle="Learning Blog Placeholder"
        contentTitle="My Personal Website!"
    />
    </>
}