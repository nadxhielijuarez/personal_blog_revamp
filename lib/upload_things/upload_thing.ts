import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";
  
  import type { OurFileRouter } from "@/app/api/upload_thing/core";
  

  
  /** Must match `app/api/upload_thing/route.ts` (default helper URL is `/api/uploadthing`). */
  const uploadThingUrl = "/api/upload_thing";

  export const UploadButton = generateUploadButton<OurFileRouter>({
    url: uploadThingUrl,
  });
  export const UploadDropzone = generateUploadDropzone<OurFileRouter>({
    url: uploadThingUrl,
  });
  