import { db } from "./client";
import type { CreateNewTagPayload } from "@/app/components/CreateNewTag";

export type Tag = {
    id?: number;
    tag_id?: number;
    tag_title: string;
    tag_type: string;
}

export function tagFromCreateNewTagPayload(payload: CreateNewTagPayload): Tag {
    return {
        tag_title: payload.tagTitle,
        tag_type: payload.tagType,
    }
}

export async function insertTag(tag: Tag): Promise<Tag> {
  const { tag_title, tag_type } = tag;
  try {
    const text = "INSERT INTO tag (tag_title, tag_type) VALUES ($1, $2) RETURNING *";
    const values = [tag_title, tag_type];
    const rows = await db.query(text, values);
    const [result] = rows ?? [];
    if (!result) {
      throw new Error("Tag insert returned no rows.");
    }
    return result as Tag;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to insert tag: ${error}`);
  }
}

export async function getAllTags(): Promise<Tag[]> {
  try {
    const text = "SELECT tag_id, tag_title, tag_type FROM tag ORDER BY tag_title ASC";
    const rows = await db.query(text);
    return (rows ?? []) as Tag[];
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch tags: ${error}`);
  }
}