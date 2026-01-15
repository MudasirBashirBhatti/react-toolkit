import { useInputMask } from "./useInputMask";

/**
 * useCreditCardNameMask
 *
 * Ensures input contains only letters and spaces for cardholder name.
 * Can optionally uppercase letters and enforce max length via options.
 *
 * Example:
 *   Input: "John Doe" → Displayed: "JOHN DOE" (if uppercase is true)
 *
 * Usage:
 * const { value, rawValue, handleChange } = useCreditCardNameMask({
 *   defaultValue: "John Doe",
 *   maxLength: 30,
 *   uppercase: true,
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - maxLength: optional, max allowed characters (default 26)
 * - uppercase: optional, convert letters to uppercase (default true)
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted cardholder name (letters + spaces, optionally uppercase)
 * - rawValue: letters + spaces only
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useCreditCardNameMask(options: {
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  uppercase?: boolean;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  const maxLength = options.maxLength ?? 26;
  const uppercase = options.uppercase ?? true;

  const formatFn = (val: string) => {
    const cleaned = val.replace(/[^A-Za-z ]/g, "").slice(0, maxLength);
    return uppercase ? cleaned.toUpperCase() : cleaned;
  };

  return useInputMask({
    ...options,
    allowedChars: /[A-Za-z ]/,
    maxLength,
    formatter: formatFn,
    normalizer: formatFn,
    onChange: (raw, formatted) => {
      const isValid = /[A-Z]+/.test(raw);
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
