import Image from "next/image";
import styles from "./AvatarUser.module.css";

type AvatarUserProps = {
  src: string;
  name?: string;
  email?: string;
  variant: "avatar" | "detail";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  onClick?: () => void;
};

export default function AvatarUser({
  src,
  name,
  email,
  variant,
  size = "md",
  onClick,
}: AvatarUserProps) {
  return (
    <div className={`${styles.wrapper} ${styles[variant]}`}>
      <Image
        src={src}
        alt={name || "User"}
        className={`${styles.avatar} ${styles[size]}`}
        onClick={onClick}
      />

      {variant === "detail" && (
        <div className={styles.meta}>
          {name && <div className={styles.name}>{name}</div>}
          {email && <div className={styles.email}>{email}</div>}
        </div>
      )}
    </div>
  );
}
