"use server";

import type { CreateNewFormPayload } from "@/app/components/CreateNewForm";
import { requireAdminUser } from "@/lib/auth/requireAdmin";
import { createBlogPost, blogPostFromFormPayload } from "@/lib/db/blog_post";

/** Re-checks admin on the server, then inserts a blog post row. */
export async function createBlogPostFromForm(payload: CreateNewFormPayload) {
  await requireAdminUser();
  const blogPost = blogPostFromFormPayload(payload);
  return createBlogPost(blogPost);
}
