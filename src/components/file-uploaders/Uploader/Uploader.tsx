import React, { FC, ReactNode } from "react";
import BasicUploader, {
  BasicUploaderType,
} from "./BasicUploader/BasicUploader";
import styles from "./Uploader.module.css";

interface UploaderProps {
  children: ReactNode;
  multiple?: boolean;
  accept?: string[];
  name: string;
  onChange: (files: File[]) => void;
}

type UploaderType = FC<UploaderProps> & {
  Basic: FC<BasicUploaderType>;
};

const Uploader: UploaderType = ({
  children,
  accept = [],
  multiple,
  onChange,
  name,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files.length === 0) return;

    // Optional: simple validation example
    if (accept.length) {
      const invalidFile = Array.from(files).find(
        (file) => !accept.includes(file.type)
      );

      if (invalidFile) {
        alert("Invalid file type");
        e.target.value = "";
        return;
      }
    }

    onChange(Array.from(files));

    // Important: allow selecting the same file again
    e.target.value = "";
  };

  return (
    <div>
      <input
        type="file"
        id={name}
        name={name}
        multiple={multiple}
        onChange={handleFileChange}
        accept={accept?.join(",")}
        className={styles.hiddenInput}
        hidden
      />

      <label htmlFor={name}>{children}</label>
    </div>
  );
};

Uploader.Basic = BasicUploader;

export default Uploader;
