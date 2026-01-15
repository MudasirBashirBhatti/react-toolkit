import { useInputMask } from "./useInputMask";

/**
 * useUSStateCodeMask
 *
 * Ensures input is a valid 2-letter US state code
 *
 * Example:
 *   Input: "ca" → Displayed: "CA"
 *
 * Usage:
 * const { value, rawValue, handleChange } = useUSStateCodeMask({
 *   defaultValue: "ca",
 *   onChange: (raw, formatted, isValid) => console.log(raw, formatted, isValid),
 * });
 *
 * Props:
 * - value: controlled value (optional)
 * - defaultValue: initial value
 * - onChange: callback when value changes (provides raw, formatted, isValid)
 *
 * Returns:
 * - value: formatted 2-letter state code (uppercase)
 * - rawValue: uppercase letters only
 * - handleChange: input onChange
 * - setValue: programmatically set value
 * - ref: optional input ref
 */
export function useUSStateCodeMask(options: {
  value?: string;
  defaultValue?: string;
  onChange?: (raw: string, formatted: string, isValid: boolean) => void;
}) {
  // List of all valid US state codes
  const validStates = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  return useInputMask({
    ...options,
    allowedChars: /[A-Za-z]/,
    maxLength: 2,
    formatter: (val) => val.replace(/[^A-Za-z]/g, "").toUpperCase(),
    normalizer: (val) => val.replace(/[^A-Za-z]/g, "").toUpperCase(),
    onChange: (raw, formatted) => {
      const isValid = validStates.includes(formatted);
      options.onChange?.(raw, formatted, isValid);
    },
  });
}
