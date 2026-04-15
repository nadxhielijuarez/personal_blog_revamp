"use client";

import { sanitizePlainText } from "@/lib/sanitizePlainText";
import React, { useCallback, useState } from "react";
import UploadImage from "./UploadImage";
import { uploadFiles } from "@/lib/upload_things/upload_thing";
import "@/app/css/form_formatting.css";
import AvailableTagsSection from "./AvailableTagsSection";

const TITLE_MAX = 200;
const CONTENT_MAX = 10_000;

export type CreateNewFormPayload = {
  formType: string;
  title: string;
  content: string;
  submittedAt: string;
  uploadedImageUrl?: string;
  /** Present when parent passes signed-in user id (e.g. from server layout/page). */
  userId?: string;
};

type CreateNewFormProps = {
  formType: string;
  /** Optional Better Auth / Neon user id from a Server Component parent. */
  userId?: string;
  /** Called with a plain-text JSON-safe payload after successful client-side validation. */
  onSubmit?: (payload: CreateNewFormPayload) => void;
};

export default function CreateNewForm({
  formType,
  userId,
  onSubmit,
}: CreateNewFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null);

      const safeTitle = sanitizePlainText(title, TITLE_MAX);
      const safeContent = sanitizePlainText(content, CONTENT_MAX);

      if (!safeTitle) {
        setError("Please enter a title.");
        return;
      }

      setIsSubmitting(true);
      let uploadedImageUrl: string | undefined;
      if (selectedImage) {
        try {
          const uploaded = await uploadFiles("imageUploader", {
            files: [selectedImage],
          });
          uploadedImageUrl = uploaded[0]?.ufsUrl;
        } catch (uploadError) {
          console.error("Image upload failed:", uploadError);
          setError("Image upload failed. Please try again.");
          setIsSubmitting(false);
          return;
        }
      }

      const payload: CreateNewFormPayload = {
        formType,
        title: safeTitle,
        content: safeContent,
        submittedAt: new Date().toISOString(),
        uploadedImageUrl,
        ...(userId ? { userId } : {}),
      };

      onSubmit?.(payload);
      setIsSubmitting(false);
    },
    [content, formType, onSubmit, selectedImage, title, userId]
  );

  return (
    <>
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
          <UploadImage selectedFile={selectedImage} onFileChange={setSelectedImage} />
        </div>
      </div>

      <div className="create-new-form__field">
        <label htmlFor="content" className="create-new-form__label">
          {formType} content
        </label>
        <textarea
          id="content"
          name="content"
          rows={8}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={`Enter ${formType.toLowerCase()} content`}
          className="create-new-form__textarea"
          maxLength={CONTENT_MAX}
        />
      </div>

      {error ? (
        <p className="create-new-form__error" role="alert">
          {error}
        </p>
      ) : null}

      <div className="create-new-form__actions">
        <button type="submit" className="create-new-form__submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>


    <AvailableTagsSection tagType={formType} displayCreateNewTag={true} />
    </>
  );
}
