"use client";

import { useLocalFiles } from "@/components/file-uploaders/Uploader/hooks/useLocalFiles";
import { useUploader } from "@/components/file-uploaders/Uploader/hooks/useUploader";
import Uploader from "@/components/file-uploaders/Uploader/Uploader";
import { RxCross2 } from "react-icons/rx";

const FileUploadersPage = () => {
  const { addFiles, files, removeFile } = useLocalFiles();

  const {
    files: UploadedFiles,
    loading,
    uploadFiles,
  } = useUploader("foldername");

  return (
    <div>
      <Uploader
        name="attachedFile"
        accept={["image/jpeg", "image/png"]}
        onChange={addFiles}
        maxFiles={3}
        fileSize={0.6} //file size in mb
        currentFiles={files}
        multiple
      >
        <Uploader.Basic label="Upload the file here" />
      </Uploader>
      {/* local uploaded files preview */}
      {files.map((file, i) => (
        <div key={i}>
          {file.name} <RxCross2 onClick={() => removeFile(i)} />
        </div>
      ))}

      {/* data uploaded to backend */}
      {UploadedFiles.map((file, i) => (
        <div key={i}>
          {file.name} {file.url}
        </div>
      ))}

      <button onClick={() => uploadFiles(files)}>
        {loading ? "Uploading to backend..." : "Upload files"}
      </button>
    </div>
  );
};

export default FileUploadersPage;
