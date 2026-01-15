import { useInputMask } from "./useInputMask";

/**
 * useSSNMask
 *
 * Formats input as XXX-XX-XXXX (SSN)
 *
 * Props: value, defaultValue, onChange
 */
export function useSSNMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9]/,
    maxLength: 9,

    formatter: (val) => {
      const nums = val.replace(/\D/g, "").slice(0, 9);
      if (nums.length <= 3) return nums;
      if (nums.length <= 5) return `${nums.slice(0, 3)}-${nums.slice(3, 5)}`;
      return `${nums.slice(0, 3)}-${nums.slice(3, 5)}-${nums.slice(5, 9)}`;
    },

    normalizer: (val) => val.replace(/\D/g, ""),
  });
}
