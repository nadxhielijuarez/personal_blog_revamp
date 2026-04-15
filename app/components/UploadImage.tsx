"use client";

import { UploadButton, UploadDropzone} from "@/lib/upload_things/upload_thing";
import type { JSX } from "react";

export default function UploadImage(): JSX.Element {
  return (
    <>
      {/* <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("file url", res[0]?.ufsUrl);
        }}
        onUploadError={(error: Error) => {
          console.error("Error uploading file:", error);
        }}
      /> */}

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
    </>
  );
}
