import { useInputMask } from "./useInputMask";

/**
 * useMACAddressMask
 *
 * Formats MAC addresses as XX:XX:XX:XX:XX:XX
 *
 * Example:
 *   Input: "a1b2c3d4e5f6" → Displayed: "A1:B2:C3:D4:E5:F6"
 */

export function useMACAddressMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
  maxLength?: number; // optional: support non-standard MAC lengths
  separator?: string; // optional: allow "-" instead of ":"
}) {
  const maxLength = options.maxLength ?? 12;
  const separator = options.separator ?? ":";

  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Fa-f]/,
    maxLength,
    formatter: (val) => {
      const chars = val
        .replace(/[^0-9A-Fa-f]/g, "")
        .toUpperCase()
        .slice(0, maxLength);
      return chars.match(/.{1,2}/g)?.join(separator) || chars;
    },
    normalizer: (val) =>
      val
        .replace(/[^0-9A-Fa-f]/g, "")
        .toUpperCase()
        .slice(0, maxLength),
  });
}
