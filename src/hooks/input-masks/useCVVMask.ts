import { useInputMask } from "./useInputMask";

/**
 * useCVVMask
 *
 * A reusable input mask hook for credit card CVV/CVC.
 * Only allows 3 or 4 digits depending on card type.
 *
 * Example:
 *   User types: "123" → Displayed: "123"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useCVVMask({
 *   defaultValue: "123"
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes
 *
 * Returns:
 * - value: formatted CVV
 * - rawValue: digits only
 * - handleChange: input onChange
 * - setValue: programmatically set CVV
 * - ref: optional ref
 */
export function useCVVMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
  maxLength?: number;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: options.maxLength ?? 4, // allow up to 4 digits for AMEX
    formatter: (val) => val.replace(/\D/g, ""),
    normalizer: (val) => val.replace(/\D/g, ""),
  });
}
