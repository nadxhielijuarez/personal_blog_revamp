import { insertEntity } from "./client";
import type { CreateNewFormPayload } from "@/app/components/CreateNewForm";

export type BlogPost = {
  id?: number;
  date_published: string;
  blog_post_title: string;
  blog_content: string;
  blog_image: string;
  created_by_user_id: string;
};

export function blogPostFromFormPayload(payload: CreateNewFormPayload): BlogPost {
  const created_by_user_id = payload.userId ?? "empty";
  return {
    blog_post_title: payload.title,
    date_published: new Date().toISOString(),
    blog_content: payload.content,
    blog_image: payload.uploadedImageUrl ?? "",
    created_by_user_id,
  };
}

export async function createBlogPost(blogPost: BlogPost) {
  const { blog_post_title, blog_content, blog_image, created_by_user_id } = blogPost;
  const result = await insertEntity<BlogPost>("blog_post", {
    date_published: new Date().toISOString(),
    blog_post_title,
    blog_content,
    blog_image,
    created_by_user_id,
  });
  return result;
}
