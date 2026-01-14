import { useInputMask } from "./useInputMask";

/**
 * usePhoneMask
 *
 * A reusable phone number input mask hook for React.
 * Only allows numeric input and formats it as (123) 456-7890 progressively.
 *
 * Usage:
 *
 * 1️⃣ Uncontrolled input (hook manages state internally):
 *    const { value, rawValue, handleChange } = usePhoneMask({
 *      defaultValue: "1234567890"
 *    });
 *
 * 2️⃣ Controlled input (parent manages state):
 *    const { value, rawValue, handleChange, setValue } = usePhoneMask({
 *      value: parentValue,
 *      onChange: (raw, formatted) => {
 *        // update parent state here
 *      }
 *    });
 *
 * Props:
 * - value: controlled value from parent (optional)
 * - defaultValue: initial value for uncontrolled input
 * - onChange: callback when value changes (provides raw and formatted phone number)
 *
 * Returns:
 * - value: formatted phone number to bind to <input>
 * - rawValue: unformatted numeric string (digits only)
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update the phone number
 * - ref: optional ref for the input
 */

export function usePhoneMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/, //only digits
    formatter: (val) => {
      // remove non digit characters and limit to 10
      const numbers = val.replace(/\D/g, "").slice(0, 10);

      //   split numbers into area code, prefix and line number
      const part1 = numbers.slice(0, 3);
      const part2 = numbers.slice(3, 6);
      const part3 = numbers.slice(6, 10);

      //   format as users type
      if (numbers.length <= 3) return `(${part1}`;
      if (numbers.length <= 6) return `(${part1}) ${part2}`;
      return `(${part1}) ${part2}-${part3}`;
    },
  });
}
