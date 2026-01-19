import { ReactNode } from "react";
import styles from "./StatusPill.module.css";

export type StatusVariant =
  | "success"
  | "warning"
  | "pending"
  | "error"
  | "info";
export type Appearance = "solid" | "outline";

interface StatusPillProps {
  status: StatusVariant;
  appearance?: Appearance;

  children: ReactNode;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  onClick?: () => void;
}

export default function StatusPill({
  status,
  appearance = "solid",
  children,
  leftIcon,
  rightIcon,
  onClick,
}: StatusPillProps) {
  const isClickable = Boolean(onClick);

  return (
    <div
      className={[
        styles.pill,
        styles[appearance],
        styles[status],
        isClickable ? styles.clickable : "",
      ].join(" ")}
      onClick={onClick}
      role={isClickable ? "button" : undefined}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      <span className={styles.text}>{children}</span>

      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </div>
  );
}
