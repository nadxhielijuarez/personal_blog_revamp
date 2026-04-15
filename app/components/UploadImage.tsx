"use client";

import { UploadButton } from "@/lib/upload_things/upload_thing";
import upload_image from "../images/upload_image.png";
import type { JSX } from "react";

const uploadImageSrc =
  typeof upload_image === "string" ? upload_image : upload_image.src;

export default function UploadImage(): JSX.Element {
  return (
    <>
    <div className="UploadImage-container">
        <img className="UploadImage-image" src={uploadImageSrc} alt="Upload Image" />
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          const file = res[0];
          console.log("Upload complete for userId:", file?.serverData?.uploadedBy);
          console.log("file url", file?.ufsUrl);
        }}
        onUploadError={(error: Error) => {
          console.error("Error uploading file:", error);
        }}        
      />
    </div>
    </>
  );
}
