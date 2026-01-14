"use client";
import { useState, useRef, ChangeEvent } from "react";

/**
 * useInputMask
 *
 * A reusable input mask hook for React.
 *
 * Usage:
 *
 * 1️⃣ Uncontrolled input (hook manages state internally):
 *    const { value, rawValue, handleChange } = useInputMask({
 *      defaultValue: "1234567890"
 *    });
 *
 * 2️⃣ Controlled input (parent manages state):
 *    const { value, rawValue, handleChange, setValue } = useInputMask({
 *      value: parentValue,
 *      onChange: (raw, formatted) => {
 *        // update parent state here
 *      }
 *    });
 *
 * Props:
 * - value: controlled value from parent (optional)
 * - defaultValue: initial value for uncontrolled input
 * - onChange: callback when value changes (provides raw and formatted values)
 * - allowedChars: RegExp to filter allowed characters (default: allow all)
 * - formatter: function to format the raw value for display
 * - normalizer: optional function to normalize the input before filtering
 *
 * Returns:
 * - value: formatted value to bind to <input>
 * - rawValue: unformatted / cleaned value
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update the value
 * - ref: optional ref for the input
 */

interface UseInputMaskOptions {
  value?: string;
  defaultValue?: string;
  onChange?: (rawValue: string, formattedValue: string) => void;
  allowedChars?: RegExp;
  formatter?: (rawValue: string) => string;
  maxLength?: number;
  normalizer?: (val: string) => string;
}

export function useInputMask({
  value,
  defaultValue = "",
  onChange,
  allowedChars = /./, // allow all by default
  formatter,
  normalizer,
  maxLength,
}: UseInputMaskOptions) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Determine the "raw" value based on controlled or uncontrolled
  const rawValue = isControlled ? value! : internalValue;

  // Apply formatting if provided
  const formattedValue = formatter ? formatter(rawValue) : rawValue;

  // Update value internally or notify parent

  const setValue = (newValue: string) => {
    const normalized = normalizer ? normalizer(newValue) : newValue;

    let cleaned = normalized
      .split("")
      .filter((c) => allowedChars.test(c))
      .join("");

    // enforce maxLength if provided
    if (maxLength !== undefined) {
      cleaned = cleaned.slice(0, maxLength);
    }

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
