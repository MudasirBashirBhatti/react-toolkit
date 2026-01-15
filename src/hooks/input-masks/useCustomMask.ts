import { useInputMask } from "./useInputMask";

/**
 * useCustomMask
 *
 * A reusable input mask hook for React with a custom pattern.
 * The mask string uses "X" as a placeholder for allowed characters.
 *
 * Example:
 *   mask: "XXX-XXX" → user input: "ABC123" → formatted: "ABC-123"
 *
 * Usage:
 *
 * 1️⃣ Uncontrolled input (hook manages state internally):
 *    const { value, rawValue, handleChange } = useCustomMask({
 *      defaultValue: "ABC123",
 *      mask: "XXX-XXX"
 *    });
 *
 * 2️⃣ Controlled input (parent manages state):
 *    const { value, rawValue, handleChange, setValue } = useCustomMask({
 *      value: parentValue,
 *      mask: "XXX-XXX",
 *      onChange: (raw, formatted) => {
 *        // update parent state here
 *      }
 *    });
 *
 * Props:
 * - value: controlled value from parent (optional)
 * - defaultValue: initial value for uncontrolled input
 * - onChange: callback when value changes (provides raw and formatted value)
 * - mask: string pattern with "X" as placeholder for allowed characters
 *
 * Returns:
 * - value: formatted string to bind to <input>
 * - rawValue: unformatted string (digits and letters only)
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update the input
 * - ref: optional ref for the input
 */
export function useCustomMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
  mask: string;
  charactersLength: number;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Za-z]/, // only allow letters and digits
    maxLength: options.charactersLength,

    // Formats the input based on the custom mask
    formatter: (val) => {
      const chars = val.replace(/[^0-9A-Za-z]/g, "").split(""); // strip invalid characters
      let formatted = "";
      let i = 0;
      for (const m of options.mask) {
        if (m === "X") {
          formatted += chars[i] || "";
          i++;
        } else {
          formatted += m; // keep literal characters
        }
      }
      return formatted;
    },

    // Backend-safe raw value (digits and letters only)
    normalizer: (val) => val.replace(/[^0-9A-Za-z]/g, ""),
  });
}
