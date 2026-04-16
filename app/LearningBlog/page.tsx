import React from 'react';
import BlogCardDisplay from '../components/BlogCardDisplay';
import '../css/article_project_landing.css';
import Image from 'next/image';
import blog_image from '../images/blog_image.png';
import TagSection from '../components/TagSection';
import { getAllBlogPosts } from '@/lib/db/blog_post';

export default async function LearningBlog() {
    const posts = await getAllBlogPosts();
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

        {posts.map((post) => (
            <BlogCardDisplay
                key={post.id ?? `${post.blog_post_title}-${post.date_published}`}
                image={post.blog_image}
                imageTitle={post.blog_post_title}
                contentTitle={post.blog_post_title}
                tags={post.tag_list
                    .split(",")
                    .map((tag) => tag.trim())
                    .filter(Boolean)}
                DatePosted={new Date(post.date_published).toLocaleDateString()}
            />
        ))}
    </>
}
