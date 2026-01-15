import { useInputMask } from "./useInputMask";

/**
 * usePassportMask
 *
 * Formats passport numbers (alphanumeric, usually 6–9 chars).
 *
 * Example:
 *   User types: "A1234567" → Displayed: "A1234567"
 *
 * Usage:
 * const { value, rawValue, handleChange } = usePassportMask({
 *   defaultValue: "A1234567"
 * });
 */
export function usePassportMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
  maxLength?: number; // allow library user to specify
}) {
  const maxLength = options.maxLength ?? 9; // default 9

  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Za-z]/,
    maxLength,
    formatter: (val) => val.replace(/[^0-9A-Za-z]/g, "").toUpperCase(),
    normalizer: (val) => val.replace(/[^0-9A-Za-z]/g, "").toUpperCase(),
  });
}
