"use client";

import { useEffect, useRef, useState } from "react";

interface UseSearchOptions {
  value?: string;
  defaultValue?: string;
  debounce?: number;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

export const useSearch = ({
  value,
  defaultValue = "",
  debounce = 0,
  onChange,
  onSearch,
}: UseSearchOptions) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const timeoutRef = useRef<number | null>(null);

  const currentValue = isControlled ? value : internalValue;

  const triggerSearch = (val: string) => {
    onSearch?.(val);
  };

  const setValue = (val: string) => {
    if (!isControlled) setInternalValue(val);
    onChange?.(val);

    if (debounce > 0) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        triggerSearch(val);
      }, debounce);
    } else {
      triggerSearch(val);
    }
  };

  const clear = () => setValue("");

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    value: currentValue,
    setValue,
    clear,
    isControlled,
  };
};
