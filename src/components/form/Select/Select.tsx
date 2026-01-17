import { useRef, useState } from "react";
import { Field } from "../Field/Field";
import { BiChevronDown, BiErrorCircle } from "react-icons/bi";
import { SelectProps } from "./Select.types";
import styles from "./Select.module.css";
import { useClickOutside } from "./useClickOutside";

export const Select = ({
  label,
  hint,
  error,
  required,
  disabled,
  id,
  options,
  value,
  placeholder,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSelect = (val: string | number) => {
    onChange?.(val);
    setIsOpen(false);
  };

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  useClickOutside(containerRef, () => setIsOpen(false));

  return (
    <Field
      label={label}
      hint={hint}
      error={error}
      required={required}
      disabled={disabled}
      rightIcon={
        error ? (
          <BiErrorCircle />
        ) : (
          <BiChevronDown
            style={{ rotate: isOpen ? "180deg" : "0deg", transition: ".3s" }}
          />
        )
      }
      id={id}
    >
      <div
        ref={containerRef}
        className={`${styles.wrapper} ${disabled ? styles.disabled : ""}`}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
      >
        <input
          type="text"
          readOnly
          defaultValue={selectedLabel}
          tabIndex={0}
          className={styles.selected}
        />

        {isOpen && (
          <ul className={styles.options}>
            {options.map((opt) => (
              <li
                key={opt.value}
                className={styles.option}
                onClick={() => handleSelect(opt.value)}
              >
                {opt.icon && (
                  <span className={styles.optionIcon}>{opt.icon}</span>
                )}
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Field>
  );
};
