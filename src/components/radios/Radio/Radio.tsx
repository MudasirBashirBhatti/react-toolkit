import { type ReactNode, forwardRef, useId } from "react";
import styles from "./Radio.module.css";

interface RadioProps {
  label?: ReactNode;
  fieldName: string;
  id?: string;
  value: string; // value of this radio option
  onChange?: (value: string) => void;
  isActive?: boolean; // controlled
  defaultActive?: boolean; // uncontrolled
  isDisabled?: boolean;
  size?: "sm" | "md";
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      fieldName,
      id,
      label,
      value,
      isActive,
      onChange,
      isDisabled = false,
      size = "sm",
    },
    ref
  ) => {
    const checked = isActive === true;

    const handleChange = () => {
      if (!isDisabled) onChange?.(value);
    };

    const reactId = useId();
    const radioId = id || `radio-${reactId}`;

    const radioClasses = [
      styles.radio,
      styles[size],
      checked ? styles.activeRadio : "",
      isDisabled ? styles.disabled : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label className={styles.label} htmlFor={radioId}>
        <input
          ref={ref}
          id={radioId}
          className={styles.input}
          type="radio"
          name={fieldName}
          value={value}
          checked={checked}
          onChange={handleChange}
          disabled={isDisabled}
          aria-checked={checked}
          aria-disabled={isDisabled}
        />
        <div className={radioClasses} />
        {label && <div className={styles.plainText}>{label}</div>}
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
