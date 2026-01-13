import { useState } from "react";

export const useLocalFiles = () => {
  const [files, setFiles] = useState<File[]>([]);

  // Add new files
  const addFiles = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
  };

  // Remove a file by index
  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return { files, addFiles, removeFile };
};
