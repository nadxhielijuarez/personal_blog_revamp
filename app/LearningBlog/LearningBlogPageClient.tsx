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

/** TagItem passes `tag.tag_id` here; TagSection types it as string only. */
function tagSelectArgToId(raw: string): number | null {
  const value = raw as unknown;
  if (typeof value === "number" && Number.isInteger(value)) {
    return value;
  }
  const parsed = Number.parseInt(String(raw), 10);
  return Number.isInteger(parsed) ? parsed : null;
}

export default function LearningBlogPageClient({ posts }: LearningBlogPageClientProps) {
  /** Unique tag ids used to filter posts (toggle on pill click). */
  const [filterBlogByTagID, setFilterBlogByTagID] = useState<number[]>([]);

  const handleTagSelectForFilter = useCallback((raw: string) => {
    const tagId = tagSelectArgToId(raw);
    if (tagId === null) {
      return;
    }
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
        onTagSelect={handleTagSelectForFilter}
      />

      <div className="BlogCardDisplay-container">
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
      </div>
    </>
  );
}
