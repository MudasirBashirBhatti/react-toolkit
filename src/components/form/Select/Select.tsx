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
  searchable = false,
  onChange,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [search, setsearch] = useState("");

  // filteration logic
  const filteredOptions = options.filter((opt) =>
    opt.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );

  const handleSelect = (label: string, val: string | number) => {
    onChange?.(val);
    setIsOpen(false);
    setsearch(label);
  };

  const selectedOption = options.find((opt) => opt.value === value)?.label;
  const selectedLabel = selectedOption || placeholder;

  const toggleDropdown = () => {
    if (disabled) return;
    if (!isOpen) setsearch((selectedOption as string) || "");
    setIsOpen((prev) => !prev);
  };

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
        onClick={toggleDropdown}
      >
        {!searchable && (
          <input
            type="text"
            readOnly
            defaultValue={selectedLabel}
            tabIndex={0}
            className={styles.selected}
          />
        )}

        {searchable && (
          <input
            type="text"
            tabIndex={0}
            className={styles.selected}
            onChange={(e) => setsearch(e.target.value)}
            value={isOpen ? search : selectedLabel}
          />
        )}

        {isOpen && (
          <ul className={styles.options}>
            {(searchable ? filteredOptions : options).map((opt) => (
              <li
                key={opt.value}
                className={styles.option}
                onClick={(e) => {
                  handleSelect(opt.label, opt.value);
                  e.stopPropagation();
                }}
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
