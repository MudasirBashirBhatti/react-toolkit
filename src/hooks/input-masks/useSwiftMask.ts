import { useInputMask } from "./useInputMask";

/**
 * useSWIFTMask
 *
 * A reusable input mask hook for SWIFT/BIC codes (8 or 11 alphanumeric characters)
 * Ensures the first 4 characters are letters (bank code) as per SWIFT standard.
 *
 * Example:
 *   Input: "DEUTDEFF500" → Displayed: "DEUTDEFF500"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useSWIFTMask({
 *   defaultValue: "DEUTDEFF",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 * - maxLength: optional, defaults to 11
 *
 * Returns:
 * - value: formatted SWIFT/BIC code
 * - rawValue: digits and letters only, uppercase
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useSWIFTMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
  maxLength?: number;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Za-z]/,
    maxLength: options.maxLength ?? 11,
    formatter: (val) => {
      // Clean input, uppercase, slice to max length
      const cleaned = val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, 11);
      // Ensure first 4 characters are letters
      const first4 = cleaned.slice(0, 4).replace(/[^A-Z]/g, "");
      return first4 + cleaned.slice(4);
    },
    normalizer: (val) => {
      const cleaned = val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, 11);
      const first4 = cleaned.slice(0, 4).replace(/[^A-Z]/g, "");
      return first4 + cleaned.slice(4);
    },
    onChange: (raw, formatted) => {
      // Valid if length is 8 or 11 AND first 4 chars are letters
      const isValid =
        (raw.length === 8 || raw.length === 11) && /^[A-Z]{4}/.test(raw);
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
