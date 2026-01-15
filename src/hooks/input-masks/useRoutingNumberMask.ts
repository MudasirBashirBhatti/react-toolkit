import { useInputMask } from "./useInputMask";
/**
 * useRoutingNumberMask
 *
 * A reusable input mask hook for US bank routing numbers.
 * Always allows exactly 9 digits.
 *
 * Example:
 *   User types: "123456789" → Displayed: "123456789"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useRoutingNumberMask({
 *   defaultValue: "123456789",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value for uncontrolled input
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted routing number
 * - rawValue: digits only
 * - handleChange: input onChange handler
 * - setValue: programmatically update value
 * - ref: optional input ref
 */
export function useRoutingNumberMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: 9, // always 9 digits
    formatter: (val) => val.replace(/\D/g, "").slice(0, 9),
    normalizer: (val) => val.replace(/\D/g, "").slice(0, 9),
    onChange: (raw: string, formatted: string) => {
      const isValid = raw.length === 9;
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
