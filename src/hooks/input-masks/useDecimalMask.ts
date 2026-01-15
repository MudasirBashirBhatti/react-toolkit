import { useInputMask } from "./useInputMask";

/**
 * useDecimalMask
 *
 * A reusable input mask for decimal numbers.
 * Only allows digits and a single decimal point.
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value (optional)
 * - onChange: callback(raw, formatted)
 * - maxDecimals: number of decimal places allowed (default: 2)
 *
 * Returns:
 * - value: formatted string for <input>
 * - rawValue: backend-safe numeric string
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update value
 * - ref: optional ref
 */

export function useDecimalMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
  maxDecimals?: number;
}) {
  const { maxDecimals = 2, ...rest } = options;

  return useInputMask({
    ...rest,
    allowedChars: /[0-9.]/,

    formatter: (val) => {
      const cleaned = val.replace(/[^0-9.]/g, "");

      // Split into integer and decimal parts
      const parts = cleaned.split(".");
      const integerPart = parts[0] || "";
      let decimalPart = parts[1] || "";

      // Limit decimal length
      if (decimalPart.length > maxDecimals) {
        decimalPart = decimalPart.slice(0, maxDecimals);
      }

      // Show decimal point even if decimalPart is empty (e.g., typing "12.")
      return parts.length > 1 ? `${integerPart}.${decimalPart}` : integerPart;
    },

    normalizer: (val) => {
      const cleaned = val.replace(/[^0-9.]/g, "");
      const parts = cleaned.split(".");
      const integerPart = parts[0] || "0";
      let decimalPart = parts[1] || "";

      if (decimalPart.length > maxDecimals) {
        decimalPart = decimalPart.slice(0, maxDecimals);
      }

      return parts.length > 1 ? `${integerPart}.${decimalPart}` : integerPart;
    },
  });
}
