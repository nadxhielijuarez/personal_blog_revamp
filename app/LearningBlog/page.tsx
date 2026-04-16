import React from 'react';
import BlogCardDisplay from '../components/BlogCardDisplay';
import '../css/article_project_landing.css';
import Image from 'next/image';
import blog_image from '../images/blog_image.png';
import TagSection from '../components/TagSection';
import { getAllBlogPosts } from '@/lib/db/blog_post';
import {getAllTags} from '@/lib/db/tag';

export default async function LearningBlog() {
    const posts = await getAllBlogPosts();
    const tags = await getAllTags();
    const tagTitleById = new Map<number, string>();
    tags.forEach((tag) => {
        const tagId = tag.tag_id ?? tag.id;
        if (typeof tagId === 'number') {
            tagTitleById.set(tagId, tag.tag_title);
        }
    });

    const getTagTitlesForProject = (tagList: string): string[] =>
        tagList
            .split(',')
            .map((value) => Number.parseInt(value.trim(), 10))
            .filter((value) => Number.isInteger(value))
            .map((tagId) => tagTitleById.get(tagId))
            .filter((title): title is string => Boolean(title));


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

            <div className="BlogCardDisplay-container">
        {posts.map((post) => (
            <BlogCardDisplay
                key={post.id ?? `${post.blog_post_title}-${post.date_published}`}
                id={post.blog_post_id}
                image={post.blog_image}
                imageTitle={post.blog_post_title}
                contentTitle={post.blog_post_title}
                tags={getTagTitlesForProject(post.tag_list)}
                DatePosted={new Date(post.date_published).toLocaleDateString()}
            />
        ))}
        </div>
    </>
}