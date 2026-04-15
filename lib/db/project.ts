import type { CreateNewFormPayload } from "@/app/components/CreateNewForm";
import { db } from "./client";

export type Project = {
  id?: number;
  project_image: string;
  project_title: string;
  project_link: string;
  tag_list: string;
};

export function projectFromFormPayload(payload: CreateNewFormPayload): Project {
  return {
    project_title: payload.title,
    project_image: payload.uploadedImageUrl ?? "",
    project_link: payload.content,
    tag_list: payload.selectedTags,
  };
}

export async function createProject(project: Project): Promise<Project> {
  const { project_image, project_title, project_link, tag_list } = project;
  try {
    const text =
      "INSERT INTO project (project_image, project_title, project_link, tag_list) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [project_image, project_title, project_link, tag_list];
    const rows = await db.query(text, values);
    const [result] = rows ?? [];
    if (!result) {
      throw new Error("project insert returned no rows.");
    }
    return result as Project;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to insert project: ${error}`);
  }
}
