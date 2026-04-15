"use client";

import CreateNewForm, {
  type CreateNewFormPayload,
} from "../components/CreateNewForm";
import React, { useCallback, useState } from "react";

type Props = {
  userId: string;
};

export default function CreateNewProjectPageClient({ userId }: Props) {
  const [submission, setSubmission] = useState<CreateNewFormPayload | null>(
    null
  );

  const handleSubmit = useCallback((payload: CreateNewFormPayload) => {
    setSubmission(payload);
  }, []);

  return (
    <>
      <CreateNewForm
        formType="Project"
        userId={userId}
        onSubmit={handleSubmit}
      />
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
