import { FC } from "react";
import styles from "./BasicUploader.module.css";
import { GrAttachment } from "react-icons/gr";

export interface BasicUploaderType {
  label?: string;
}

const BasicUploader: FC<BasicUploaderType> = ({ label = "Attach Files" }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.label}>
        {label} <GrAttachment />
      </div>{" "}
      Attach files, docs, images max 5 MB each.
    </div>
  );
};

export default BasicUploader;
