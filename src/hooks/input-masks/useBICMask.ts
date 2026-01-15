import { useInputMask } from "./useInputMask";

/**
 * useBICMask
 *
 * Formats BIC/SWIFT codes (8 or 11 characters)
 * Only letters and optional branch code
 */

export function useBICMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[A-Z]/i,
    maxLength: 11,

    formatter: (val) => val.toUpperCase(),

    normalizer: (val) => val.replace(/[^A-Z]/gi, "").toUpperCase(),
  });
}
