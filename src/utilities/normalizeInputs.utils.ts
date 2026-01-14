/**
 * String normalization utilities.
 *
 * All functions are pure and must be applied explicitly per use case.
 * Avoid over-normalization — choose only what your domain requires.
 */

/**
 * Normalizes whitespace by collapsing multiple whitespace characters
 * into a single space and trimming leading/trailing spaces.
 *
 * @example
 * normalizeWhitespace("  hello    world  ") // "hello world"
 */
export function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/**
 * Normalizes Unicode characters to a consistent canonical form.
 * Prevents visually identical characters from being stored differently.
 *
 * @example
 * normalizeUnicode("e\u0301") // "é"
 */
export function normalizeUnicode(
  value: string,
  form: "NFC" | "NFD" | "NFKC" | "NFKD" = "NFC"
): string {
  return value.normalize(form);
}

/**
 * Normalizes line endings to Unix-style (\n).
 * Useful for textareas, APIs, and cross-platform consistency.
 *
 * @example
 * normalizeLineEndings("a\r\nb\r\nc") // "a\nb\nc"
 */
export function normalizeLineEndings(value: string): string {
  return value.replace(/\r\n?/g, "\n");
}

/**
 * Normalizes string casing using locale-aware rules.
 * Must be applied explicitly as case normalization is context-dependent.
 *
 * @example
 * normalizeCase("Hello World", "lower") // "hello world"
 */
export function normalizeCase(
  value: string,
  mode: "lower" | "upper" | "none" = "none",
  locale = "en-US"
): string {
  if (mode === "lower") return value.toLocaleLowerCase(locale);
  if (mode === "upper") return value.toLocaleUpperCase(locale);
  return value;
}

/**
 * Removes diacritic marks (accented characters).
 * Intended for search and comparison only.
 * Should NOT be used for storing or displaying user-provided names.
 *
 * @example
 * removeDiacritics("Crème Brûlée") // "Creme Brulee"
 */
export function removeDiacritics(value: string): string {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

/**
 * Utility to compose multiple string normalizers into a pipeline.
 * pipeNormalizers just creates a new function that runs multiple functions in order.
 *
 * @example
 * const normalizeInput = pipeNormalizers(
 *   normalizeUnicode,
 *   normalizeWhitespace
 * );
 *
 * normalizeInput("  café   au  lait  "); // "café au lait"
 */
export function pipeNormalizers(
  ...normalizers: Array<(value: string) => string>
) {
  return (value: string) =>
    normalizers.reduce((prevValue, fn) => fn(prevValue), value);
}
