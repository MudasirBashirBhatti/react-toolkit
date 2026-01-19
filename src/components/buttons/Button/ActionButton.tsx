import styles from "./Button.module.css";
import { ActionButtonProps } from "./Button.types";

export const ActionButton = ({
  size = "md",
  variant = "primary",
  shape = "flat",
  leftIcon,
  rightIcon,
  children,
  ...props
}: ActionButtonProps) => {
  const className = [
    styles.button,
    styles[size],
    styles[variant],
    styles[shape],
  ].join(" ");

  return (
    <button {...props} className={className}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
};
