import { useInputMask } from "./useInputMask";

/**
 * useIBANMask
 *
 * Formats IBAN numbers in standard CC KK BBBB… pattern
 * - CC = 2-letter country code
 * - KK = 2 check digits
 * - BBBB… = remaining alphanumeric bank/account
 * - Groups remaining in blocks of 4 characters
 * - Max length 34 chars globally
 */
export function useIBANMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string) => void;
}) {
  return useInputMask({
    ...options,
    allowedChars: /[0-9A-Z]/i,
    maxLength: 34,

    formatter: (val) => {
      let cleaned = val.replace(/[^0-9A-Z]/gi, "").toUpperCase();

      // Enforce first 2 chars = letters (country)
      if (cleaned.length >= 1)
        cleaned = cleaned[0].replace(/[^A-Z]/, "") + cleaned.slice(1);
      if (cleaned.length >= 2)
        cleaned =
          cleaned.slice(0, 1) +
          cleaned[1].replace(/[^A-Z]/, "") +
          cleaned.slice(2);

      // Enforce next 2 chars = digits (check digits)
      if (cleaned.length >= 3)
        cleaned =
          cleaned.slice(0, 2) +
          cleaned[2].replace(/[^0-9]/, "") +
          cleaned.slice(3);
      if (cleaned.length >= 4)
        cleaned =
          cleaned.slice(0, 3) +
          cleaned[3].replace(/[^0-9]/, "") +
          cleaned.slice(4);

      // Split first 4 chars (CC + KK)
      const firstGroup = cleaned.slice(0, 2) + " " + cleaned.slice(2, 4);

      // Remaining characters
      const rest = cleaned.slice(4);

      // Group remaining in 4-char blocks
      const restFormatted = rest.replace(/(.{4})/g, "$1 ").trim();

      return (firstGroup + (restFormatted ? " " + restFormatted : "")).trim();
    },

    normalizer: (val) =>
      val
        .replace(/[^0-9A-Z]/gi, "")
        .toUpperCase()
        .slice(0, 34),
  });
}
