import Link from "next/link";
import styles from "./Button.module.css";
import { LinkButtonProps } from "./Button.types";

export const LinkButton = ({
  size = "md",
  variant = "primary",
  shape = "flat",
  leftIcon,
  rightIcon,
  children,
  ...props
}: LinkButtonProps & { href: string }) => {
  const className = [
    styles.button,
    styles[size],
    styles[variant],
    styles[shape],
  ].join(" ");

  return (
    <Link {...props} className={className}>
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span className={styles.label}>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </Link>
  );
};
