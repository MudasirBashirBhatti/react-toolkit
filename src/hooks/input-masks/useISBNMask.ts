import { useInputMask } from "./useInputMask";

/**
 * useISBNMask
 *
 * Handles ISBN input (ISBN-10 or ISBN-13)
 * - Stores digits only while typing
 * - Formats as human-readable (with hyphens) after full entry
 *
 * Example:
 *   User types: "9783161484100" → Displayed: "978-3-16-148410-0"
 *
 * Usage:
 * const { value, rawValue, handleChange, setValue } = useISBNMask({
 *   defaultValue: "9783161484100",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted ISBN (digits while incomplete, hyphenated when complete)
 * - rawValue: digits-only
 * - handleChange: attach to input onChange
 * - setValue: programmatically update the ISBN
 * - ref: optional input ref
 */
export function useISBNMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  // Helper to format ISBN with hyphens
  const formatISBN = (digits: string) => {
    if (digits.length === 10) {
      return `${digits.slice(0, 1)}-${digits.slice(1, 4)}-${digits.slice(
        4,
        9
      )}-${digits.slice(9)}`;
    }
    if (digits.length === 13) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 4)}-${digits.slice(
        4,
        6
      )}-${digits.slice(6, 12)}-${digits.slice(12)}`;
    }
    return digits;
  };

  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: 13, // maximum digits for ISBN-13
    formatter: (val) => {
      const digits = val.replace(/\D/g, "").slice(0, 13);
      // Apply hyphens only when full ISBN is entered
      if (digits.length === 10 || digits.length === 13)
        return formatISBN(digits);
      return digits;
    },
    normalizer: (val) => val.replace(/\D/g, "").slice(0, 13),
    onChange: (raw, formatted) => {
      const isValid = raw.length === 10 || raw.length === 13;
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
