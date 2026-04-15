import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { requireAdminUser } from "@/lib/auth/requireAdmin";

const f = createUploadthing();



// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      const user = await requireAdminUser();
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
    try {
         return { uploadedBy: metadata.userId };
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new UploadThingError("Error uploading file");
    }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
