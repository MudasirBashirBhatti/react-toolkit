import { useInputMask } from "./useInputMask";

/**
 * useIPv4Mask
 *
 * Reusable input mask hook for IPv4 addresses (XXX.XXX.XXX.XXX)
 *
 * Features:
 * - Accepts only digits (0-9)
 * - Automatically inserts dots after each octet
 * - Handles partial input and pasting
 * - Validates octets (0-255) and passes isValid flag
 * - Optional separator and maxOctets props
 *
 * Usage:
 * const { value, rawValue, handleChange } = useIPv4Mask({
 *   defaultValue: "19216811",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value?: string → controlled value
 * - defaultValue?: string → initial value
 * - onChange?: (raw: string, formatted: string, isValid: boolean) → callback
 * - separator?: string → character between octets (default ".")
 * - maxOctets?: number → number of octets (default 4)
 */
export function useIPv4Mask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
  separator?: string;
  maxOctets?: number;
}) {
  const separator = options.separator ?? ".";
  const maxOctets = options.maxOctets ?? 4;

  return useInputMask({
    ...options,
    allowedChars: /[0-9]/, // only numeric input
    maxLength: maxOctets * 3, // 3 digits per octet
    formatter: (val: string) => {
      const digits = val.replace(/\D/g, "").slice(0, maxOctets * 3);
      const parts: string[] = [];
      let i = 0;

      // Split digits into octets
      for (
        let octetIndex = 0;
        octetIndex < maxOctets && i < digits.length;
        octetIndex++
      ) {
        const octet = digits.slice(i, i + 3);
        parts.push(octet);
        i += octet.length;
      }

      return parts.join(separator);
    },
    normalizer: (val: string) => val.replace(/\D/g, "").slice(0, maxOctets * 3),
    onChange: (raw: string, formatted: string) => {
      const octets = formatted.split(separator).map((n) => Number(n));
      const isValid =
        octets.length === maxOctets && octets.every((n) => n >= 0 && n <= 255);

      options.onChange?.(raw, formatted, isValid);
    },
  });
}
