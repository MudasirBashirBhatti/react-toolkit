import { useInputMask } from "./useInputMask";

/**
 * useCurrencyMask
 *
 * A reusable currency input mask hook for React.
 * Only allows numeric input and formats it as a currency string
 * (e.g. $1,234).
 *
 * Usage:
 *
 * 1️⃣ Uncontrolled input (hook manages state internally):
 *    const { value, rawValue, handleChange } = useCurrencyMask({
 *      defaultValue: "1234"
 *    });
 *
 * 2️⃣ Controlled input (parent manages state):
 *    const { value, rawValue, handleChange, setValue } = useCurrencyMask({
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
 * - prefix: currency symbol to prepend (default: "$")
 *
 * Returns:
 * - value: formatted currency string to bind to <input>
 * - rawValue: unformatted numeric string (digits only)
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update the currency value
 * - ref: optional ref for the input
 */
export function useCurrencyMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
  prefix?: string;
}) {
  const { prefix = "$", ...rest } = options;

  return useInputMask({
    ...rest,
    allowedChars: /[0-9]/,

    formatter: (val) => {
      const numbers = val.replace(/\D/g, "") || "0";
      const amount = Number(numbers);

      return `${prefix}${amount.toLocaleString()}`;
    },

    normalizer: (val) => {
      // backend-safe numeric string
      return val.replace(/\D/g, "") || "0";
    },
  });
}
