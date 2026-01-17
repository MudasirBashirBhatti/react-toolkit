import styles from "./Field.module.css";
import { FieldProps } from "./Field.types";
import { BiErrorCircle } from "react-icons/bi"; // example icon

export const Field = ({
  label,
  hint,
  error,
  required,
  disabled,
  leftIcon,
  rightIcon,
  errorIcon,
  children,
  id,
}: FieldProps) => {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}> *</span>}
        </label>
      )}

      <div
        className={[
          styles.control,
          disabled && styles.disabled,
          error && styles.error,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        {children}
        {error ? (
          <span className={`${styles.icon} ${styles.errorIcon}`}>
            {errorIcon || <BiErrorCircle />}
          </span>
        ) : (
          rightIcon && <span className={styles.icon}>{rightIcon}</span>
        )}
      </div>

      {error ? (
        <p className={styles.errorText}>{error}</p>
      ) : (
        hint && <p className={styles.hint}>{hint}</p>
      )}
    </div>
  );
};
