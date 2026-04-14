"use client";

import CreateNewForm, {
  type CreateNewFormPayload,
} from "../components/CreateNewForm";
import React, { useCallback, useEffect, useState } from "react";

export default function CreateNewBlogPostPage() {
  const [submission, setSubmission] = useState<CreateNewFormPayload | null>(
    null
  );

  const handleSubmit = useCallback((payload: CreateNewFormPayload) => {
    setSubmission(payload);
  }, []);

  useEffect(() => {
    if (!submission) return;
    console.log("[CreateNewBlogPost] submission:", submission);
  }, [submission]);

  return (
    <>
      <CreateNewForm formType="Blog Post" onSubmit={handleSubmit} />
      {submission ? (
        <section className="mt-6 rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Last submission (preview)</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Values are plain text; render with React text or{" "}
            <code>JSON.stringify</code> only — avoid{" "}
            <code>dangerouslySetInnerHTML</code>.
          </p>
          <pre className="mt-3 overflow-x-auto rounded bg-muted p-3 text-xs">
            {JSON.stringify(submission, null, 2)}
          </pre>
        </section>
      ) : null}
    </>
  );
}
