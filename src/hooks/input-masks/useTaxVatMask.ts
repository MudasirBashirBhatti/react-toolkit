import { useInputMask } from "./useInputMask";

/**
 * useTaxVatMask
 *
 * Handles European VAT numbers (EU VAT)
 * - Starts with 2 letters (country code)
 * - Followed by 8–12 alphanumeric characters
 * - Optional separator after the country code
 *
 * Props:
 * - value: controlled input (optional)
 * - defaultValue: initial input
 * - maxLength: optional, total max length including country code (default 14)
 * - separator: optional, e.g., " " or "-"
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted VAT number (to bind to input)
 * - rawValue: unformatted string
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useTaxVatMask(options: {
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  separator?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  const maxLength = options.maxLength ?? 14;
  const separator = options.separator ?? "";

  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Za-z]/, // alphanumeric allowed
    maxLength,

    formatter: (val) => {
      const cleaned = val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, maxLength);

      const firstTwo = cleaned.slice(0, 2).replace(/[^A-Z]/g, "");
      const rest = cleaned.slice(2);

      // Only add separator if at least one of the firstTwo letters exists
      return firstTwo
        ? separator
          ? `${firstTwo}${separator}${rest}`
          : firstTwo + rest
        : rest;
    },

    normalizer: (val) => {
      const cleaned = val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, maxLength);
      const firstTwo = cleaned.slice(0, 2).replace(/[^A-Z]/g, "");
      const rest = cleaned.slice(2);
      return firstTwo + rest;
    },

    onChange: (raw, formatted) => {
      const country = raw.slice(0, 2);
      const rest = raw.slice(2);
      const isValid =
        /^[A-Z]{2}$/.test(country) && rest.length >= 8 && rest.length <= 12;
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
