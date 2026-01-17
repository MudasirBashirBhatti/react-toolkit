import styles from "./Input.module.css";
import { InputProps } from "./Input.types";

export const Input = ({
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: InputProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label} <span className={styles.required}>*</span>
        </label>
      )}

      <div
        className={[
          styles.inputWrapper,
          disabled && styles.disabled,
          error && styles.error,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}

        <input {...props} disabled={disabled} className={styles.input} />

        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </div>

      {error ? (
        <p className={styles.errorText}>{error}</p>
      ) : (
        hint && <p className={styles.hint}>{hint}</p>
      )}
    </div>
  );
};
