import React from "react";
import "../css/article_project_landing.css";
import Image from "next/image";
import blog_image from "../images/blog_image.png";
import { getAllBlogPosts } from "@/lib/db/blog_post";
import { getAllTags } from "@/lib/db/tag";
import LearningBlogPageClient, { type LearningBlogPostRow } from "./LearningBlogPageClient";

/** Avoid running Neon queries during `next build` static generation. */
export const dynamic = "force-dynamic";

function parseTagIdsFromList(tagList: string): number[] {
  return tagList
    .split(",")
    .map((value) => Number.parseInt(value.trim(), 10))
    .filter((value) => Number.isInteger(value));
}

type BlogPostRow = Awaited<ReturnType<typeof getAllBlogPosts>>[number] & {
  blog_post_id?: number;
};

export default async function LearningBlog() {
  const posts = await getAllBlogPosts();
  const tags = await getAllTags();
  const tagTitleById = new Map<number, string>();
  tags.forEach((tag) => {
    const tagId = tag.tag_id ?? tag.id;
    if (typeof tagId === "number") {
      tagTitleById.set(tagId, tag.tag_title);
    }
  });

  const getTagTitlesForProject = (tagList: string): string[] =>
    tagList
      .split(",")
      .map((value) => Number.parseInt(value.trim(), 10))
      .filter((value) => Number.isInteger(value))
      .map((tagId) => tagTitleById.get(tagId))
      .filter((title): title is string => Boolean(title));

  const postRows: LearningBlogPostRow[] = posts.map((post) => {
    const row = post as BlogPostRow;
    const routeId = row.blog_post_id ?? post.id;
    return {
      postKey: String(routeId ?? `${post.blog_post_title}-${post.date_published}`),
      postRouteId: typeof routeId === "number" ? routeId : undefined,
      blog_post_title: post.blog_post_title,
      blog_image: post.blog_image,
      date_published: post.date_published,
      displayTags: getTagTitlesForProject(post.tag_list),
      tagIds: parseTagIdsFromList(post.tag_list),
    };
  });

  return (
    <>
      <div className="blogTitle">
        <div className="blogTitle-column">
          <div id="blogTitle-container" className="vertical-line">
            <div className="blogTitle-text">Learning</div>
            <br />
          </div>
        </div>
        <div className="blogTitle-column">
          <div className="BlogImageContainer">
            <Image className="BlogImage" src={blog_image} alt="Personal Website"  loading="eager"  />
          </div>
        </div>
      </div>

      <LearningBlogPageClient posts={postRows} />
    </>
  );
}
