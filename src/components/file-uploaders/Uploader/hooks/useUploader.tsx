import { useState } from "react";

interface UploadedFileType {
  name: string;
  url: string;
  size: number;
}

/**
 * ------------------------------------------------------------------
 * Mock / Simulated Upload API
 * ------------------------------------------------------------------
 * This simulates a real backend upload service (e.g. Bunny CDN).
 * Replace this with the real API implementation later.
 */
export const FeaturesAPI = {
  Bunny: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    uploadToBunny: async (_formData: FormData) => {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Simulated response shape from backend
      return {
        data: {
          urls: [
            {
              url: "https://cdn.example.com/file1.jpg",
              name: "file1.jpg",
              size: 12345,
            },
          ] as UploadedFileType[],
        },
      };
    },
  },
};

/**
 * ------------------------------------------------------------------
 * useUploader Hook
 * ------------------------------------------------------------------
 * Handles:
 * - Uploading files
 * - Tracking uploaded files
 * - Managing loading state
 *
 * @param folder - Destination folder name on the server/CDN
 */
export const useUploader = (folder: string) => {
  const [files, setFiles] = useState<UploadedFileType[]>([]);
  const [loading, setLoading] = useState(false);

  /**
   * Upload one or multiple files
   *
   * @param filesToUpload - Array of browser File objects
   * @returns Uploaded file metadata from the API
   */
  const uploadFiles = async (filesToUpload: File[]) => {
    // Prepare multipart form data
    const formData = new FormData();

    // Append each file under the same key ("files")
    for (const file of filesToUpload) {
      formData.append("files", file);
    }

    // Append folder info for backend routing
    formData.append("folder", folder);
    setLoading(true);

    try {
      // Call upload API
      const response = await FeaturesAPI.Bunny.uploadToBunny(formData);

      // Persist uploaded file data in state
      setFiles((prevFiles) => [...prevFiles, ...response.data.urls]);

      // Return uploaded files to the caller (useful for UI handling)
      return response.data.urls;
    } catch (error) {
      console.error("Upload failed:", error);

      // Always return a predictable value
      return [];
    } finally {
      setLoading(false);
    }
  };

  return {
    files,
    loading, // upload status
    uploadFiles,
  };
};
