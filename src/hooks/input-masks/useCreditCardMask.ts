/**
 * useCreditCardMask
 *
 * A reusable credit card input mask hook for React.
 * Only allows numeric input and formats it in groups of 4 digits (1234 5678 9012 3456).
 *
 * Usage:
 *
 * 1️⃣ Uncontrolled input (hook manages state internally):
 *    const { value, rawValue, handleChange } = useCreditCardMask({
 *      defaultValue: "1234567890123456"
 *    });
 *
 * 2️⃣ Controlled input (parent manages state):
 *    const { value, rawValue, handleChange, setValue } = useCreditCardMask({
 *      value: parentValue,
 *      onChange: (raw, formatted) => {
 *        // update parent state here
 *      }
 *    });
 *
 * Props:
 * - value: controlled value from parent (optional)
 * - defaultValue: initial value for uncontrolled input
 * - onChange: callback when value changes (provides raw and formatted credit card number)
 *
 * Returns:
 * - value: formatted credit card number to bind to <input>
 * - rawValue: unformatted numeric string (digits only)
 * - handleChange: attach to <input onChange>
 * - setValue: programmatically update the credit card number
 * - ref: optional ref for the input
 */

import { useInputMask } from "./useInputMask";

export function useCreditCardMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/, // Only digits are allowed
    maxLength: 16,
    formatter: (val) => {
      // Remove non-digit characters and limit to 16 digits
      const numbers = val.replace(/\D/g, "").slice(0, 16);

      // Split into groups of 4 digits and join with spaces
      // e.g., "1234567890123456" => "1234 5678 9012 3456"
      return numbers.match(/.{1,4}/g)?.join(" ") || numbers;
    },
  });
}
