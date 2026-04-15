"use server";

import type { CreateNewFormPayload } from "@/app/components/CreateNewForm";
import { requireAdminUser } from "@/lib/auth/requireAdmin";
import { createProject, projectFromFormPayload } from "@/lib/db/project";

/** Re-checks admin on the server, then inserts a project row. */
export async function createProjectFromForm(payload: CreateNewFormPayload) {
  await requireAdminUser();
  const project = projectFromFormPayload(payload);
  return createProject(project);
}
