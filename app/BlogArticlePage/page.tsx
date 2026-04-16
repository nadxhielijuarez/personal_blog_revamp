import React from 'react';
import BlogArticle from '../components/BlogArticle';
import blog_image from '../images/NextJs_learning1.jpeg';
import { getAllBlogPosts } from '@/lib/db/blog_post';
import { notFound } from 'next/navigation';

type BlogArticlePageProps = {
    searchParams?: Promise<{ postId?: string }>;
};

export default async function BlogArticlePage({ searchParams }: BlogArticlePageProps) {
    const params = await searchParams;
    const postId = Number(params?.postId);
    if (!Number.isInteger(postId)) {
        notFound();
    }

    const posts = await getAllBlogPosts();
    const post = posts.find((candidate) => candidate.blog_post_id === postId);
    if (!post) {
        notFound();
    }

    return (
        <>
          <BlogArticle 
          title={post.blog_post_title}
          content={post.blog_content}
          date={new Date(post.date_published).toLocaleDateString()}
          tags={post.tag_list.split(',').map((tag) => tag.trim()).filter(Boolean)}
          image={post.blog_image || blog_image.src} />
        </>
    );
}