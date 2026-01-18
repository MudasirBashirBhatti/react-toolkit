const LOCALES = [
  "en-GB",
  "en-US",
  "fr-FR",
  "de-DE",
  "es-ES",
  "it-IT",
  "pt-BR",
  "nl-NL",
  "sv-SE",
  "pl-PL",
  "ru-RU",
  "ja-JP",
  "ko-KR",
  "zh-CN",
];

export const useDateFormatting = (
  locale = "en-GB",
  options?: Intl.DateTimeFormatOptions
) => {
  const format = (date: Date | null) => {
    if (!date) return "";
    return new Intl.DateTimeFormat(locale, options).format(date);
  };

  return {
    format,
    locales: LOCALES,
  };
};
