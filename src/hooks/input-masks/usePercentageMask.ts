import { useInputMask } from "./useInputMask";

/**
 * usePercentageMask
 *
 * A reusable percentage input mask hook for React.
 * Only allows numeric input and formats it as a percentage string
 * (e.g. 42%).
 *
 * Usage:
 *
 * 1️⃣ Uncontrolled input (hook manages state internally):
 *    const { value, rawValue, handleChange } = usePercentageMask({
 *      defaultValue: "50"
 *    });
 *
 * 2️⃣ Controlled input (parent manages state):
 *    const { value, rawValue, handleChange, setValue } = usePercentageMask({
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
 * - value: formatted percentage string to bind to <input>
 * - rawValue: unformatted numeric string (digits only)
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update the percentage value
 * - ref: optional ref for the input
 */
export function usePercentageMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,

    // Formats the value with a '%' and clamps 0–100
    formatter: (val) => {
      const num = Math.min(
        Math.max(Number(val.replace(/\D/g, "") || 0), 0),
        100
      );
      return `${num}%`;
    },

    // Normalized raw numeric string (0–100)
    normalizer: (val) => {
      const num = Math.min(
        Math.max(Number(val.replace(/\D/g, "") || 0), 0),
        100
      );
      return String(num);
    },
  });
}
