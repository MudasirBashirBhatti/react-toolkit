import { useInputMask } from "./useInputMask";

/**
 * useVehicleLicenseMask
 *
 * Handles vehicle license plate input.
 * - Enforces letters + digits only
 * - Automatically separates letters from numbers with a separator
 *
 * Props:
 * - value: controlled input (optional)
 * - defaultValue: initial input
 * - separator: optional character for formatting between letters & digits
 * - maxLength: optional max length
 * - onChange: callback(raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted input
 * - rawValue: letters + digits only
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useVehicleLicenseMask(options: {
  value?: string;
  defaultValue?: string;
  separator?: string;
  maxLength?: number;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  const { separator = "-", maxLength = 10, ...rest } = options;

  return useInputMask({
    ...rest,
    allowedChars: /[0-9A-Za-z]/,
    maxLength,
    formatter: (val) => {
      const cleaned = val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, maxLength);

      // Find the first digit
      const firstDigitIndex = cleaned.search(/\d/);
      if (firstDigitIndex > 0 && separator) {
        return `${cleaned.slice(0, firstDigitIndex)}${separator}${cleaned.slice(
          firstDigitIndex
        )}`;
      }

      return cleaned;
    },
    normalizer: (val) =>
      val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, maxLength),
    onChange: (raw, formatted) => {
      const isValid = /^[0-9A-Z]+$/i.test(raw) && raw.length <= maxLength;
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
