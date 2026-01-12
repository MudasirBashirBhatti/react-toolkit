import {
  useState,
  type ChangeEvent,
  type ReactNode,
  forwardRef,
  useId,
} from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  label?: ReactNode;
  fieldName: string;
  id?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  isActive?: boolean;
  defaultActive?: boolean;
  disabled?: boolean;
  size?: "sm" | "md";
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      fieldName,
      id,
      label,
      isActive,
      defaultActive = false,
      onChange,
      disabled = false,
      size = "sm",
    },
    ref
  ) => {
    const [internalActive, setInternalActive] = useState(defaultActive);

    const checked = isActive !== undefined ? isActive : internalActive;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (isActive === undefined) {
        setInternalActive(e.target.checked);
      }
      onChange?.(e);
    };

    const reactId = useId();
    const checkboxId = id || `checkbox-${reactId}`;

    const checkboxClasses = [
      styles.checkbox,
      styles[size],
      checked ? styles.activeCheckbox : "",
      disabled ? styles.disabled : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label className={styles.label} htmlFor={checkboxId}>
        <input
          ref={ref}
          id={checkboxId}
          className={styles.input}
          type="checkbox"
          name={fieldName}
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          aria-checked={checked}
          aria-disabled={disabled}
        />
        <div className={checkboxClasses} />
        {label && <div className={styles.plainText}>{label}</div>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
