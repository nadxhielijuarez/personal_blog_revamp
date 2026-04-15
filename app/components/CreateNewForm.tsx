"use client";

import { sanitizePlainText } from "@/lib/sanitizePlainText";
import React, { useCallback, useState } from "react";
import UploadImage from "./UploadImage";
import "@/app/css/form_formatting.css";

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
    <form className="create-new-form" onSubmit={handleSubmit}>
      <h1 className="create-new-form__title">Create New {formType}</h1>

      <div className="create-new-form__field">
        <label htmlFor="title" className="create-new-form__label">
          {formType} title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={`Enter ${formType.toLowerCase()} title`}
          className="create-new-form__input"
          maxLength={TITLE_MAX}
        />
      </div>

      <div className="create-new-form__field create-new-form__field--upload">
        <span className="create-new-form__label" id="upload-label">
          Image
        </span>
        <div
          className="create-new-form__upload-wrap"
          aria-labelledby="upload-label"
        >
          <UploadImage />
        </div>
      </div>

      <div className="create-new-form__field">
        <label htmlFor="description" className="create-new-form__label">
          {formType} content
        </label>
        <textarea
          id="description"
          name="description"
          rows={8}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={`Enter ${formType.toLowerCase()} content`}
          className="create-new-form__textarea"
          maxLength={DESCRIPTION_MAX}
        />
      </div>

      {error ? (
        <p className="create-new-form__error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="create-new-form__actions">
        <button type="submit" className="create-new-form__submit">
          Submit
        </button>
      </div>
    </form>
  );
}
