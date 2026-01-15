import { useInputMask } from "./useInputMask";

/**
 * usePassportMRZMask
 *
 * Formats passport MRZ (Machine Readable Zone) input.
 * Typically uppercase letters, digits, and filler '<', no spaces.
 *
 * Example:
 *   Input: "P<USADOE<<JOHN<<<<<<<<<<<<<<<<<<" → Displayed the same
 *
 * Usage:
 * const { value, rawValue, handleChange } = usePassportMRZMask({
 *   defaultValue: "P<USADOE<<JOHN<<<<<<<<<<<<<<<<<<",
 *   maxLength: 44,
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - maxLength: optional, for MRZ line length
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted MRZ line
 * - rawValue: uppercase letters, digits, '<'
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function usePassportMRZMask(options: {
  value?: string;
  defaultValue?: string;
  maxLength?: number;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Z<]/,
    maxLength: options.maxLength ?? 44,
    formatter: (val) => val.replace(/[^0-9A-Z<]/g, "").toUpperCase(),
    normalizer: (val) => val.replace(/[^0-9A-Z<]/g, "").toUpperCase(),
    onChange: (raw, formatted) => {
      const isValid = options.maxLength
        ? raw.length === options.maxLength
        : true;
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
