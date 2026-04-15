"use client";

import upload_image from "../images/upload_image.png";
import { useEffect, useRef, useState } from "react";
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
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl(uploadImageSrc);
      return;
    }

    const createdImageUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(createdImageUrl);

    return () => {
      URL.revokeObjectURL(createdImageUrl);
    };
  }, [selectedFile]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onFileChange(file);
  };

  const handleContainerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="UploadImage-container" onClick={handleContainerClick}>
      <img className="UploadImage-image" src={previewUrl} alt="Selected upload preview" />
      <input
        ref={fileInputRef}
        className="UploadImage-input"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
    </div>
  );
}
