import { useInputMask } from "./useInputMask";

/**
 * useTINMask
 *
 * Formats US Tax Identification Numbers (TIN)
 * Commonly formatted as "XX-XXXXXXX"
 *
 * Example:
 *   Input: "123456789" → Displayed: "12-3456789"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useTINMask({
 *   defaultValue: "123456789",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted TIN
 * - rawValue: digits only
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useTINMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: 9,
    formatter: (val) => {
      const numbers = val.replace(/\D/g, "").slice(0, 9);
      if (numbers.length <= 2) return numbers;
      return `${numbers.slice(0, 2)}-${numbers.slice(2)}`;
    },
    normalizer: (val) => val.replace(/\D/g, "").slice(0, 9),
    onChange: (raw, formatted) => {
      const isValid = raw.length === 9;
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
