import { useInputMask } from "./useInputMask";

/**
 * useCanadianPostalMask
 *
 * Formats Canadian postal codes as "A1A 1A1"
 * Uppercases letters and inserts a space after the third character.
 * Validates against the proper postal code pattern.
 *
 * Example:
 *   Input: "K1A0B1" → Displayed: "K1A 0B1"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useCanadianPostalMask({
 *   defaultValue: "K1A0B1",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted postal code for input
 * - rawValue: letters and digits only, uppercase, no space
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useCanadianPostalMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Za-z]/,
    maxLength: 6,
    formatter: (val) => {
      const chars = val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, 6)
        .split("");
      if (chars.length <= 3) return chars.join("");
      return `${chars.slice(0, 3).join("")} ${chars.slice(3).join("")}`;
    },
    normalizer: (val) =>
      val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, 6),
    onChange: (raw, formatted) => {
      // Validate Canadian postal code pattern: Letter-Digit-Letter Digit-Letter-Digit
      const isValid = /^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/.test(raw);
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
