import { type ReactNode, useState } from "react";
import styles from "./Tooltip.module.css";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}

export default function Tooltip({
  content,
  children,
  position = "top",
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
    >
      {children}

      {visible && (
        <span className={`${styles.tooltip} ${styles[position]}`}>
          {content}
        </span>
      )}
    </span>
  );
}
