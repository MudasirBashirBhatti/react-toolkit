import { useInputMask } from "./useInputMask";

/**
 * useLicensePlateMask
 *
 * Formats license plates like XXX-1234
 *
 * Props: value, defaultValue, onChange
 */
export function useLicensePlateMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Z]/i,
    maxLength: 7,

    formatter: (val) => {
      const cleaned = val.replace(/[^0-9A-Z]/gi, "").toUpperCase();
      if (cleaned.length <= 3) return cleaned;
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}`;
    },

    normalizer: (val) => val.replace(/[^0-9A-Z]/gi, "").toUpperCase(),
  });
}
