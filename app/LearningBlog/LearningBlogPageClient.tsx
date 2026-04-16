"use client";

import { useCallback, useMemo, useState } from "react";
import BlogCardDisplay from "../components/BlogCardDisplay";
import TagSection from "../components/TagSection";

export type LearningBlogPostRow = {
  postKey: string;
  postRouteId?: number;
  blog_post_title: string;
  blog_image: string;
  date_published: string;
  displayTags: string[];
  tagIds: number[];
};

type LearningBlogPageClientProps = {
  posts: LearningBlogPostRow[];
};

export default function LearningBlogPageClient({ posts }: LearningBlogPageClientProps) {
  /** Unique tag ids used to filter posts (toggle on pill click). */
  const [filterBlogByTagID, setFilterBlogByTagID] = useState<number[]>([]);

  const handleTagIdToggle = useCallback((tagId: number) => {
    setFilterBlogByTagID((previous) =>
      previous.includes(tagId) ? previous.filter((id) => id !== tagId) : [...previous, tagId]
    );
  }, []);

  const visiblePosts = useMemo(() => {
    if (filterBlogByTagID.length === 0) {
      return posts;
    }
    return posts.filter((post) =>
      post.tagIds.some((id) => filterBlogByTagID.includes(id))
    );
  }, [posts, filterBlogByTagID]);

  return (
    <>
      <TagSection
        tagType="Blog Post"
        displayCreateNewTag={false}
        onTagSelectId={handleTagIdToggle}
      />
      {visiblePosts.map((post) => (
        <BlogCardDisplay
          key={post.postKey}
          id={post.postRouteId}
          image={post.blog_image}
          imageTitle={post.blog_post_title}
          contentTitle={post.blog_post_title}
          tags={post.displayTags}
          DatePosted={new Date(post.date_published).toLocaleDateString()}
        />
      ))}
    </>
  );
}
