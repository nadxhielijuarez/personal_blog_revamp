"use server";

import type { CreateNewTagPayload } from "../CreateNewTag";
import { getAllTags, insertTag, tagFromCreateNewTagPayload } from "@/lib/db/tag";

export async function createTagFromForm(payload: CreateNewTagPayload) {
  const tag = tagFromCreateNewTagPayload(payload);
  return insertTag(tag);
}

export async function fetchAllTags() {
  return getAllTags();
}