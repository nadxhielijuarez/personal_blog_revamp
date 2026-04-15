"use client";

import CreateNewForm, {
  type CreateNewFormPayload,
} from "../components/CreateNewForm";
import React, { useCallback, useState } from "react";
import { createBlogPostFromForm } from "../components/actions/BlogPost.actions";

type Props = {
  userId: string;
};

export default function CreateNewBlogPostPageClient({ userId }: Props) {
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
        await createBlogPostFromForm(payload);
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
        formType="Blog Post"
        userId={userId}
        onSubmit={handleSubmit}
      />
      {saveError ? (
        <p className="mt-4 text-sm text-destructive" role="alert">
          {saveError}
        </p>
      ) : null}
      {saveOk ? (
        <p className="mt-4 text-sm text-green-800" role="status">
          Blog post saved.
        </p>
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
