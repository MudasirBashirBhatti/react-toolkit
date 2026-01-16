/**
 * Returns an array of 7 localized weekday labels (short format).
 *
 * - Uses `Intl.DateTimeFormat` for proper locale-based naming
 * - `locale` controls the language (e.g. "en-US", "fr-FR")
 * - `weekStart` defines which day the week starts from:
 *    0 = Sunday, 1 = Monday
 *
 * Example output:
 * - weekStart = 0 → ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
 * - weekStart = 1 → ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
 */

export const useWeekdayLabels = (
  locale = "en-US",
  weekStart: 0 | 1 = 0 // 0 = Sunday, 1 = Monday
) => {
  const baseDate = new Date(2024, 0, 7); // Sunday

  const labels = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i + weekStart);

    return new Intl.DateTimeFormat(locale, {
      weekday: "short",
    }).format(date);
  });

  return labels;
};
