import { useInputMask } from "./useInputMask";

/**
 * useZipCodeMask
 *
 * A reusable ZIP/postal code input mask hook for React.
 * Allows numeric and alphabetic characters (e.g., US ZIP 12345 or 12345-6789).
 *
 * Usage:
 *
 * 1️⃣ Uncontrolled input (hook manages state internally):
 *    const { value, rawValue, handleChange } = useZipCodeMask({
 *      defaultValue: "123456789"
 *    });
 *
 * 2️⃣ Controlled input (parent manages state):
 *    const { value, rawValue, handleChange, setValue } = useZipCodeMask({
 *      value: parentValue,
 *      onChange: (raw, formatted) => {
 *        // update parent state here
 *      }
 *    });
 *
 * Props:
 * - value: controlled value from parent (optional)
 * - defaultValue: initial value for uncontrolled input
 * - onChange: callback when value changes (provides raw and formatted value)
 *
 * Returns:
 * - value: formatted ZIP code to bind to <input>
 * - rawValue: unformatted string (digits and letters only)
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update the ZIP code
 * - ref: optional ref for the input
 */
export function useZipCodeMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Za-z]/, // only allow digits and letters

    // Formats as 12345 or 12345-6789
    formatter: (val) => {
      const raw = val.replace(/[^0-9A-Za-z]/g, "").slice(0, 9); // max 9 chars
      if (raw.length <= 5) return raw;
      return `${raw.slice(0, 5)}-${raw.slice(5, 9)}`;
    },

    // Backend-safe raw value (digits and letters only)
    normalizer: (val) => val.replace(/[^0-9A-Za-z]/g, "").slice(0, 9),
  });
}
