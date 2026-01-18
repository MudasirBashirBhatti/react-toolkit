# `useDateFormatting` Hook Documentation

## Overview

`useDateFormatting` is a flexible date-formatting hook that provides:

- A reusable **date formatting function**
- A predefined list of **supported locales** for easy user selection

This version of the hook is designed for applications that allow users to **switch date formats dynamically** (for example, via settings or locale selectors).

It builds on JavaScript’s native `Intl.DateTimeFormat` API while keeping UI code clean and consistent.

---

## Features

- Locale-based date formatting
- Built-in list of commonly used locales
- Supports all `Intl.DateTimeFormatOptions`
- Safe handling of `null` dates
- Ideal for internationalized (i18n) UIs

---

## Supported Locales

The hook exposes the following locale list:

```ts
[
  'en-GB', 'en-US', 'fr-FR', 'de-DE', 'es-ES', 'it-IT',
  'pt-BR', 'nl-NL', 'sv-SE', 'pl-PL', 'ru-RU',
  'ja-JP', 'ko-KR', 'zh-CN'
]
```

These can be directly used in dropdowns or user preference settings.

---

## Function Signature

```ts
useDateFormatting(
  locale?: string,
  options?: Intl.DateTimeFormatOptions
): {
  format: (date: Date | null) => string;
  locales: string[];
}
```

---

## Parameters

### **locale** `(string, optional)`

Defines the locale used for formatting dates.

- Default: `'en-GB'`
- Can be dynamically selected from the provided `locales` list

Example:
```ts
en-US
de-DE
ja-JP
```

---

### **options** `(Intl.DateTimeFormatOptions, optional)`

Controls how the date is formatted.

Example:
```ts
{
  day: '2-digit',
  month: 'long',
  year: 'numeric'
}
```

If omitted, browser default formatting is used.

---

## Return Value

The hook returns an object containing:

### **format**

```ts
(date: Date | null) => string
```

- Formats the provided date
- Returns an empty string (`""`) if the date is `null`

---

### **locales**

```ts
string[]
```

- List of supported locale identifiers
- Useful for building locale selectors

---

## Example Usage

### Basic Formatting

```tsx
const { format } = useDateFormatting('en-GB', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

format(new Date(2026, 0, 23)); // 23 Jan 2026
```

---

### Locale Selector Example

```tsx
const DateWithLocale = ({ date }: { date: Date }) => {
  const [locale, setLocale] = useState('en-GB');
  const { format, locales } = useDateFormatting(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div>
      <select value={locale} onChange={(e) => setLocale(e.target.value)}>
        {locales.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>

      <p>{format(date)}</p>
    </div>
  );
};
```

---

## How It Works (Internal Logic)

- Uses `Intl.DateTimeFormat(locale, options)` internally
- Locale and options are injected dynamically
- Returns both formatter logic and locale metadata

This design keeps **formatting logic and locale data together**.

---

## Common Use Cases

- Internationalized dashboards
- User profile locale preferences
- Calendar and booking applications
- Reports with localized dates
- Admin panels with region-based formatting

---

## Notes

- Locale strings follow BCP 47 standard
- Formatting uses browser timezone rules
- Safe for UI rendering and SSR

---

## Summary

`useDateFormatting` (with locale support) is a powerful utility hook that:

- ✔ Centralizes date formatting logic
- ✔ Exposes supported locales for UI selection
- ✔ Supports full internationalization
- ✔ Keeps components clean and readable

It integrates seamlessly with calendar, range, and suggestion hooks to build polished, global-ready date experiences.

