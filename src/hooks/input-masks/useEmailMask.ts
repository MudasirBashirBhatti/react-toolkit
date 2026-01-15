import { useInputMask } from "./useInputMask";

/**
 * useEmailMask
 *
 * Reusable email input mask.
 * Converts input to lowercase and removes invalid email characters.
 *
 * Props:
 * - value, defaultValue, onChange (standard)
 *
 * Returns:
 * - value, rawValue, handleChange, setValue, ref
 */
export function useEmailMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[a-z0-9@._-]/i,

    formatter: (val) => val.toLowerCase(),

    normalizer: (val) => val.toLowerCase().trim(),
  });
}
