import React, { useId } from "react";
import styles from "./CustomDropdown.module.css";
import { FaChevronDown } from "react-icons/fa6";
import { SingleElement, useDropdown } from "./useDropdown";

interface CustomDropdownProps {
  dataArray: SingleElement[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (data: SingleElement) => void;
  ariaLabel: string;
  label?: string;
  disabled?: boolean;
  error?: string;
}

export const CustomDropdown: React.FC<CustomDropdownProps> = (props) => {
  const {
    dataArray,
    placeholder = "Select an option",
    ariaLabel,
    label,
    disabled,
    error,
    value,
    defaultValue,
    onChange,
  } = props;

  const {
    dropdownRef,
    open,
    focusedIndex,
    selected,
    handleKeyDown,
    selectItem,
    setOpen,
  } = useDropdown({ dataArray, value, defaultValue, disabled, onChange });

  const id = useId();
  const buttonId = `${id}-button`;
  const listboxId = `${id}-listbox`;
  const errorId = `${id}-error`;

  return (
    <div
      className={`${styles.dropdown} ${disabled ? styles.disabled : ""} ${
        error ? styles.error : ""
      }`}
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
    >
      {label && (
        <label htmlFor={buttonId} className={styles.label}>
          {label}
        </label>
      )}

      <button
        id={buttonId}
        type="button"
        disabled={disabled}
        onClick={() => setOpen((o) => !o)}
        className={styles.select}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={ariaLabel}
        aria-describedby={error ? errorId : undefined}
      >
        {selected ? selected.title : placeholder}
        <FaChevronDown
          className={styles.chevron}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "0.3s",
          }}
        />
      </button>

      <div
        id={listboxId}
        role="listbox"
        aria-hidden={!open}
        className={`${styles.menu} ${open ? styles.menuOpen : ""}`}
        style={{ top: label ? "54px" : "32px" }}
      >
        {dataArray.map((data, idx) => {
          const isActive = selected?.value === data.value;
          const isFocused = focusedIndex === idx;

          return (
            <div
              key={data.value}
              role="option"
              aria-selected={isActive}
              className={`${styles.option} ${isActive ? styles.active : ""} ${
                isFocused ? styles.focused : ""
              }`}
              onClick={() => selectItem(data)}
            >
              {data.title}
            </div>
          );
        })}
      </div>

      {error && (
        <span id={errorId} className={styles.errorText}>
          {error}
        </span>
      )}
    </div>
  );
};
