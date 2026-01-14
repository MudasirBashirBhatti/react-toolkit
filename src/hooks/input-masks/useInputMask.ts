"use client";
import { useState, useRef, ChangeEvent } from "react";

interface UseInputMaskOptions {
  value?: string;
  defaultValue?: string;
  onChange?: (rawValue: string, formattedValue: string) => void;
  allowedChars?: RegExp;
  formatter?: (rawValue: string) => string;
  normalizer?: (val: string) => string;
}

export function useInputMask({
  value,
  defaultValue = "",
  onChange,
  allowedChars = /./, // allow all by default
  formatter,
}: UseInputMaskOptions) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const rawValue = isControlled ? value! : internalValue;

  const formattedValue = formatter ? formatter(rawValue) : rawValue;

  const setValue = (newValue: string) => {
    const cleaned = newValue
      .split("")
      .filter((c) => allowedChars.test(c))
      .join("");
    if (!isControlled) setInternalValue(cleaned);
    onChange?.(cleaned, formatter ? formatter(cleaned) : cleaned);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value: formattedValue,
    rawValue,
    setValue,
    handleChange,
    ref: inputRef,
  };
}
