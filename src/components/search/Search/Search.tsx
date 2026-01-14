"use client";

import React from "react";
import styles from "./Search.module.css";
import { FiSearch, FiX } from "react-icons/fi";
import { useSearch } from "./useSearch";

export interface SearchProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  debounce?: number;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inputClassName?: string;
}

const Search: React.FC<SearchProps> = ({
  placeholder = "Search",
  disabled = false,
  className,
  inputClassName,
  ...hookProps
}) => {
  const { value, setValue, clear } = useSearch(hookProps);

  return (
    <div className={`${styles.search} ${className || ""}`}>
      <FiSearch className={styles.icon} />

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${inputClassName || ""}`}
        aria-label="Search"
      />

      {value && !disabled && (
        <button
          type="button"
          className={styles.clear}
          onClick={clear}
          aria-label="Clear search"
        >
          <FiX />
        </button>
      )}
    </div>
  );
};

export default Search;
