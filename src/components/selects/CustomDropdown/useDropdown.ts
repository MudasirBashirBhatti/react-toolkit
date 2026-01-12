import { useEffect, useRef, useState } from "react";

export interface SingleElement {
  title: string;
  value: string;
}

interface UseDropdownProps {
  dataArray: SingleElement[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  onChange?: (data: SingleElement) => void;
}

export const useDropdown = ({
  dataArray,
  value,
  defaultValue,
  disabled = false,
  onChange,
}: UseDropdownProps) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<string | undefined>(
    defaultValue
  );
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const selected = dataArray.find(
    (d) => d.value === (isControlled ? value : internalValue)
  );

  /* ............ click outside ..............*/
  useEffect(() => {
    if (disabled) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [disabled]);

  /*.............. keyboard navigation ..............*/
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        setOpen(true);
        setFocusedIndex(0);
        e.preventDefault();
      }
      return;
    }
    switch (e.key) {
      case "ArrowDown":
        setFocusedIndex((prev) => (prev + 1) % dataArray.length);
        e.preventDefault();
        break;
      case "ArrowUp":
        setFocusedIndex(
          (prev) => (prev - 1 + dataArray.length) % dataArray.length
        );
        e.preventDefault();
        break;
      case "Enter":
      case " ":
        if (focusedIndex >= 0) selectItem(dataArray[focusedIndex]);
        e.preventDefault();
        break;
      case "Escape":
        setOpen(false);
        setFocusedIndex(-1);
        e.preventDefault();
        break;
    }
  };

  const selectItem = (item: SingleElement) => {
    if (disabled) return;
    if (!isControlled) setInternalValue(item.value);
    onChange?.(item);
    setOpen(false);
    setFocusedIndex(-1);
  };

  return {
    dropdownRef,
    open,
    setOpen,
    focusedIndex,
    selected,
    handleKeyDown,
    selectItem,
  };
};
