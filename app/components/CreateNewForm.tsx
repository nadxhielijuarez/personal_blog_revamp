"use client";

import { sanitizePlainText } from "@/lib/sanitizePlainText";
import React, { useCallback, useState } from "react";

const TITLE_MAX = 200;
const DESCRIPTION_MAX = 10_000;

export type CreateNewFormPayload = {
  formType: string;
  title: string;
  description: string;
  submittedAt: string;
};

type CreateNewFormProps = {
  formType: string;
  /** Called with a plain-text JSON-safe payload after successful client-side validation. */
  onSubmit?: (payload: CreateNewFormPayload) => void;
};

export default function CreateNewForm({
  formType,
  onSubmit,
}: CreateNewFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      const safeTitle = sanitizePlainText(title, TITLE_MAX);
      const safeDescription = sanitizePlainText(description, DESCRIPTION_MAX);

      if (!safeTitle) {
        setError("Please enter a title.");
        return;
      }

      const payload: CreateNewFormPayload = {
        formType,
        title: safeTitle,
        description: safeDescription,
        submittedAt: new Date().toISOString(),
      };

      onSubmit?.(payload);
    },
    [description, formType, onSubmit, title]
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-title">Create New {formType}</h1>

      <label htmlFor="title" className="form-label">
        {formType} Title:{" "}
      </label>
      <input
        type="text"
        id="title"
        name="title"
        autoComplete="off"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={`${formType} Title`}
        className="form-input"
        maxLength={TITLE_MAX}
      />

      <label htmlFor="description" className="form-label">
        {formType} Content:{" "}
      </label>
      <textarea
        id="description"
        name="description"
        rows={6}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={`${formType} content`}
        className="form-input"
        maxLength={DESCRIPTION_MAX}
      />

      {error ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}
