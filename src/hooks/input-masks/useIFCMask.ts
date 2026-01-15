import { useInputMask } from "./useInputMask";

/**
 * useIFCMask
 *
 * Formats Indian bank IFSC codes (11 characters, strictly enforced)
 * - First 4 letters (A-Z)
 * - 5th character always '0'
 * - Last 6 letters/digits (A-Z, 0-9)
 *
 * Example:
 *   Input: "SBIN0005943" → Displayed: "SBIN0 005943" (spaces optional for readability)
 *
 * Usage:
 * const { value, rawValue, handleChange, setValue } = useIFCMask({
 *   defaultValue: "SBIN0005943",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted IFSC code while typing
 * - rawValue: uppercase letters + digits only
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useIFCMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  return useInputMask({
    ...options,
    maxLength: 11,
    allowedChars: /[0-9A-Za-z]/,
    formatter: (val) => {
      let cleaned = val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, 11);
      cleaned = cleaned
        .split("")
        .map((c, i) => {
          if (i < 4) return c.replace(/[^A-Z]/g, ""); // first 4 letters
          if (i === 4) return "0"; // 5th char forced to 0
          return c.replace(/[^0-9]/g, ""); // last 6 digits only
        })
        .join("");
      return cleaned;
    },
    normalizer: (val) =>
      val
        .replace(/[^0-9A-Za-z]/g, "")
        .toUpperCase()
        .slice(0, 11),
    onChange: (raw, formatted) => {
      const isValid = /^[A-Z]{4}0[A-Z0-9]{6}$/.test(raw);
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
