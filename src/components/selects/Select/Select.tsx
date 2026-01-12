import React from "react";
import styles from "./Select.module.css";
import { FiAlertCircle } from "react-icons/fi"; // error icon

export type SelectOption = {
  value: string;
  label: string;
};

interface Select {
  label: string;
  value: string;
  options: SelectOption[];
  error?: string;
  hint?: string;
  required?: boolean;
  onChange: (val: string) => void;
  disabled?: boolean;
  className?: string;
}

const Select: React.FC<Select> = ({
  label,
  value,
  options,
  error,
  hint,
  required,
  onChange,
  disabled,
  className,
}) => {
  return (
    <div className={`${styles.fieldWrapper} ${className}`}>
      <label className={styles.label}>
        {label} {required && <span>*</span>}
      </label>

      <div
        className={`${styles.selectContainer} 
          ${error ? styles.error : ""} 
          ${disabled ? styles.disabled : ""}`}
      >
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={styles.select}
          disabled={disabled}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* Error icon */}
        {error && (
          <span className={styles.iconRightError}>
            <FiAlertCircle />
          </span>
        )}
      </div>

      {error ? (
        <p className={styles.errorText}>{error}</p>
      ) : hint ? (
        <p className={styles.hint}>{hint}</p>
      ) : null}
    </div>
  );
};

export default Select;
