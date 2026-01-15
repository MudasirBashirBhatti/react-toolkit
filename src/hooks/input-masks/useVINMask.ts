import { useInputMask } from "./useInputMask";

/**
 * useVINMask
 *
 * Formats Vehicle Identification Numbers (VIN)
 * 17-character alphanumeric, excluding I, O, Q.
 *
 * Example:
 *   Input: "1HGCM82633A004352" → Displayed: "1HGCM82633A004352"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useVINMask({
 *   defaultValue: "1HGCM82633A004352",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted VIN
 * - rawValue: digits + letters (uppercase, excluding I, O, Q)
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useVINMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-HJ-NPR-Z]/i,
    maxLength: 17,
    formatter: (val) =>
      val
        .replace(/[^0-9A-HJ-NPR-Z]/gi, "")
        .toUpperCase()
        .slice(0, 17),
    normalizer: (val) =>
      val
        .replace(/[^0-9A-HJ-NPR-Z]/gi, "")
        .toUpperCase()
        .slice(0, 17),
    onChange: (raw, formatted) => {
      const isValid = raw.length === 17;
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
