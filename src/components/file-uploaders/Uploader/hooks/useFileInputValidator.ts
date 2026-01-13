import { useCallback } from "react";
import { UploaderProps } from "../Uploader";

type UseFileUploaderParams = Pick<
  UploaderProps,
  "currentFiles" | "accept" | "fileSize" | "maxFiles" | "onChange" | "onError"
>;

export const useFileInputValidator = ({
  currentFiles = [],
  accept = [],
  fileSize = 5,
  maxFiles,
  onChange,
  onError,
}: UseFileUploaderParams) => {
  const MAX_FILE_SIZE = fileSize * 1024 * 1024;

  const handleError = useCallback(
    (msg: string, input?: HTMLInputElement) => {
      if (onError) onError(msg);
      else alert(msg);
      if (input) input.value = "";
    },
    [onError]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      const files = input.files;
      if (!files || files.length === 0) return;

      let selectedFiles = Array.from(files);

      // Remove duplicates
      selectedFiles = selectedFiles.filter(
        (file) =>
          !currentFiles.some(
            (f) => f.name === file.name && f.size === file.size
          )
      );

      if (selectedFiles.length === 0) {
        handleError("All selected files are already added.", input);
        return;
      }

      // Filter invalid types and sizes
      const invalidTypeFiles = selectedFiles.filter(
        (file) => accept.length && !accept.includes(file.type)
      );
      const invalidSizeFiles = selectedFiles.filter(
        (file) => file.size > MAX_FILE_SIZE
      );

      // Keep only valid files
      const validFiles = selectedFiles.filter(
        (file) => accept.includes(file.type) && file.size <= MAX_FILE_SIZE
      );

      // Check max files limit
      if (maxFiles && validFiles.length + currentFiles.length > maxFiles) {
        return handleError(
          `You can only upload up to ${maxFiles} files.`,
          input
        );
      }

      // Alert about invalid files
      if (invalidTypeFiles.length || invalidSizeFiles.length) {
        const errors = [
          invalidTypeFiles.length
            ? `Invalid type: ${invalidTypeFiles.map((f) => f.name).join(", ")}`
            : "",
          invalidSizeFiles.length
            ? `Too large: ${invalidSizeFiles.map((f) => f.name).join(", ")}`
            : "",
        ].filter(Boolean);
        if (errors.length) handleError(errors.join("\n"), input);
      }

      // Pass valid files to parent
      if (validFiles.length > 0) onChange(validFiles);

      input.value = "";
    },
    [currentFiles, accept, MAX_FILE_SIZE, maxFiles, handleError, onChange]
  );

  return { handleFileChange };
};
