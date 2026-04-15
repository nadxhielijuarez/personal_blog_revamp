"use client";

import upload_image from "../images/upload_image.png";
import { useEffect, useState } from "react";
import type { ChangeEvent, JSX } from "react";

const uploadImageSrc =
  typeof upload_image === "string" ? upload_image : upload_image.src;

type UploadImageProps = {
  selectedFile: File | null;
  onFileChange: (file: File | null) => void;
};

export default function UploadImage({
  selectedFile,
  onFileChange,
}: UploadImageProps): JSX.Element {
  const [previewUrl, setPreviewUrl] = useState(uploadImageSrc);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(uploadImageSrc);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedFile]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onFileChange(file);
  };

  return (
    <div className="UploadImage-container">
      <input
        className="UploadImage-input"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
