import { useInputMask } from "./useInputMask";

/**
 * useCardExpiryMask
 *
 * A reusable input mask hook for credit card expiry (MM/YYYY).
 * Only allows numeric input and formats automatically as MM/YYYY.
 *
 * Example:
 *   User types: "122026" → Displayed: "12/2026"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useCardExpiryMask({
 *   defaultValue: "122026"
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (raw digits, formatted)
 *
 * Returns:
 * - value: formatted expiry (MM/YYYY)
 * - rawValue: digits only (MMYYYY)
 * - handleChange: input onChange
 * - setValue: programmatically set expiry
 * - ref: optional ref
 */
export function useCardExpiryMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: 7, // MM/YYYY = 7 characters
    formatter: (val) => {
      const digits = val.replace(/\D/g, "").slice(0, 6); // max 6 digits
      if (!digits) return "";
      let month = digits.slice(0, 2);
      const year = digits.slice(2, 6);

      // Enforce month 01-12
      if (month.length === 2) {
        const m = parseInt(month);
        if (m < 1) month = "01";
        if (m > 12) month = "12";
      }

      return month + (year ? "/" + year : "");
    },
    normalizer: (val) => val.replace(/\D/g, "").slice(0, 6), // digits only
  });
}
