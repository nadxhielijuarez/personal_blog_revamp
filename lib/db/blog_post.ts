import type { CreateNewFormPayload } from "@/app/components/CreateNewForm";
import { db } from "./client";

export type BlogPost = {
  id?: number;
  date_published: string;
  blog_post_title: string;
  blog_content: string;
  blog_image: string;
  created_by_user_id: string;
  tag_list: string;
};

export function blogPostFromFormPayload(payload: CreateNewFormPayload): BlogPost {
  return {
    blog_post_title: payload.title,
    date_published: new Date().toISOString(),
    blog_content: payload.content,
    blog_image: payload.uploadedImageUrl ?? "",
    created_by_user_id: payload.userId ?? "empty",
    tag_list: payload.selectedTags,
  };
}

export async function createBlogPost(blogPost: BlogPost): Promise<BlogPost> {
  const { date_published, blog_post_title, blog_content, blog_image, created_by_user_id, tag_list } = blogPost;
  try {
    const text = "INSERT INTO blog_post (date_published, blog_post_title, blog_content, blog_image, created_by_user_id, tag_list) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [date_published, blog_post_title, blog_content, blog_image, created_by_user_id, tag_list];
    const rows = await db.query(text, values);
    const [result] = rows ?? [];
    if (!result) {
      throw new Error("blog_post insert returned no rows.");
    }
    return result as BlogPost;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to insert blog_post: ${error}`);
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const text = "SELECT * FROM blog_post ORDER BY date_published DESC";
    const rows = await db.query(text);
    return (rows ?? []) as BlogPost[];
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch blog_posts: ${error}`);
  }
}