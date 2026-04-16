import React from 'react';
import learning_blog_placeholder from '../images/NextJs_learning1.jpeg';
import ContentSquareLayout from '../components/ContentSquareLayout';
import '../css/article_project_landing.css';
import Image from 'next/image';
import blog_image from '../images/blog_image.png';
import TagSection from '../components/TagSection';

export default function LearningBlog() {
    return <> 
        <div className="blogTitle">
            <div className="blogTitle-column">
            <div id="blogTitle-container" className="vertical-line">
                <div className="blogTitle-text">My Learning Blog</div>
                <br />
            </div>
            </div>
            <div className="blogTitle-column">
                <div className="BlogImageContainer">
                <Image className="BlogImage" src={blog_image} alt="Personal Website" />
                </div>
            </div>
        </div>

        <TagSection
            tagType={'Blog Post'}
            displayCreateNewTag={false}
            />


        <ContentSquareLayout
            image={learning_blog_placeholder}
            imageTitle="Learning Blog Placeholder"
            contentTitle="First Post: My Learning Journey with Next.js"
        />
    </>
}