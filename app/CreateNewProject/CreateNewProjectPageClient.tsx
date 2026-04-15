"use client";

import CreateNewForm, {
  type CreateNewFormPayload,
} from "../components/CreateNewForm";
import React, { useCallback, useState } from "react";
import { createProjectFromForm } from "../components/actions/Project.actions";

type Props = {
  userId: string;
};

export default function CreateNewProjectPageClient({ userId }: Props) {
  const [submission, setSubmission] = useState<CreateNewFormPayload | null>(
    null
  );
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveOk, setSaveOk] = useState(false);

  const handleSubmit = useCallback(
    async (payload: CreateNewFormPayload) => {
      setSaveError(null);
      setSaveOk(false);
      setSubmission(payload);
      try {
        await createProjectFromForm(payload);
        setSaveOk(true);
      } catch (e) {
        setSaveOk(false);
        setSaveError(e instanceof Error ? e.message : "Save failed.");
      }
    },
    []
  );

  return (
    <>
      <CreateNewForm
        formType="Project"
        userId={userId}
        onSubmit={handleSubmit}
      />

      {saveOk ? (
        <div className="mt-6 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Project saved</h2>
        </div>
      ) : null}
      {saveError ? (
        <div className="mt-6 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Error saving project</h2>
          <p className="mt-3 text-sm text-destructive">{saveError}</p>
        </div>
      ) : null} 
      {submission ? (
        <section className="mt-6 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Last submission (preview)</h2>
          <pre className="mt-3 overflow-x-auto rounded bg-muted p-3 text-xs">
            {JSON.stringify(submission, null, 2)}
          </pre>
        </section>
      ) : null}
    </>
  );
}
