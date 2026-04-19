import React from 'react';
import BlogArticle from '../components/BlogArticle';
import blog_image from '../images/NextJs_learning1.jpeg';
import { getAllBlogPosts } from '@/lib/db/blog_post';
import { notFound } from 'next/navigation';

type BlogArticlePageProps = {
    searchParams?: Promise<{ postId?: string }>;
};

/** Avoid running Neon queries during `next build` static generation. */
export const dynamic = "force-dynamic";

export default async function BlogArticlePage({ searchParams }: BlogArticlePageProps) {
    const params = await searchParams;
    const postId = Number(params?.postId);
    if (!Number.isInteger(postId)) {
        const postId = 0;
    }

    const posts = await getAllBlogPosts();
    const post = posts.find((candidate) => {
        const candidateId = (candidate as { blog_post_id?: number }).blog_post_id ?? candidate.id;
        return candidateId === postId;
    });
    if (!post) {
        const post = {
            blog_post_id: 0,
            blog_post_title: 'Post Not Found',
            blog_content: 'Post Not Found',
            date_published: new Date(),
            tag_list: '',
            blog_image: ''
        }
    }

    return (
        <>
          <BlogArticle 
          title={post?.blog_post_title || 'Sorry! Check your URL'}
          content={post?.blog_content || 'Looks like the post you are looking for does not exist, or has been deleted.'}
          date={new Date(post?.date_published || new Date()).toLocaleDateString()}
          tags={post?.tag_list.split(',').map((tag) => tag.trim()).filter(Boolean) || []}
          image={post?.blog_image || ''} />
        </>
    );
}