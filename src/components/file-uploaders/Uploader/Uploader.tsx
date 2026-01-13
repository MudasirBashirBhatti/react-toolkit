import React, { FC, ReactNode } from "react";
import BasicUploader, {
  BasicUploaderType,
} from "./BasicUploader/BasicUploader";
import { useFileInputValidator } from "./hooks/useFileInputValidator";

export interface UploaderProps {
  children: ReactNode;
  multiple?: boolean;
  accept?: string[];
  fileSize?: number; // max file size in MB
  maxFiles?: number; // max files limit
  name: string;
  currentFiles?: File[]; // to prevent duplicates
  onChange: (files: File[]) => void;
  onError?: (message: string) => void; // optional error callback
}

type UploaderType = FC<UploaderProps> & {
  Basic: FC<BasicUploaderType>;
};

const Uploader: UploaderType = ({
  children,
  accept = [],
  multiple,
  fileSize = 5,
  maxFiles,
  name,
  currentFiles = [],
  onChange,
  onError,
}) => {
  //calling file input validator hook
  const { handleFileChange } = useFileInputValidator({
    onChange,
    accept,
    currentFiles,
    fileSize,
    maxFiles,
    onError,
  });

  return (
    <div>
      <input
        type="file"
        id={name}
        name={name}
        multiple={multiple}
        onChange={handleFileChange}
        accept={accept?.join(",")}
        hidden
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};

Uploader.Basic = BasicUploader;

export default Uploader;
