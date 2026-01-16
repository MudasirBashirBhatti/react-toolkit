type SupportedLocale =
  | "en-US"
  | "en-GB"
  | "fr-FR"
  | "de-DE"
  | "es-ES"
  | "it-IT"
  | "ar-EG"
  | "ur-PK"
  | "zh-CN"
  | "ja-JP"
  | (string & {});

type weekdayFormat = "short" | "long" | "narrow";

export const useWeekdayLabels = ({
  locale = "en-US",
  dayFormat = "short",
  weekStart = 0,
}: {
  locale: SupportedLocale;
  weekStart: 0 | 1; // 0 = Sunday, 1 = Monday
  dayFormat: weekdayFormat;
}) => {
  const baseDate = new Date(2024, 0, 7); // Sunday

  const labels = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i + weekStart);

    return new Intl.DateTimeFormat(locale, {
      weekday: dayFormat,
    }).format(date);
  });

  return labels;
};
