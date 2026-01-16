# `useWeekdayLabels` Hook Documentation

## Overview

`useWeekdayLabels` is a lightweight React utility hook that returns an array of **7 localized weekday labels** in short format (e.g. `Mon`, `Tue`).

It is designed to be used alongside calendar or date-based UIs where weekday headers are required.

The hook leverages the native `Intl.DateTimeFormat` API to ensure **correct localization** across different languages and regions.

---

## Features

- Returns exactly **7 weekday labels**
- Fully **locale-aware** using `Intl.DateTimeFormat`
- Supports **Sunday or Monday** as the week start
- Automatically reorders weekdays based on `weekStart`
- Produces **short weekday names** suitable for calendar headers

---

## Function Signature

```ts
useWeekdayLabels({locale?: string, weekStart?: 0 | 1}): string[]
```

---

### Parameters

**loacale** (string, optional)  
Controls the language and regional formatting of weekday labels.

- Uses standard BCP 47 locale strings
- Defaults to `"en-US"`

Examples:

- `"en-US"` → Sun, Mon, Tue
- `"fr-FR"` → dim., lun., mar.
- `"de-DE"` → So, Mo, Di
- `"ar-EG"` → localized Arabic names

usage:

```ts
useWeekdayLabels({ locale: "fr-FR" });
```

**weekstart** (0 or 1, optional)  
Defines which day the week starts on.

- `0` → Sunday (default)
- `1` → Monday
  - This affects the order of returned labels.

usage:

```js
useWeekdayLabels({ weekStart: 0 });
```

**dayFormat** `"short" | "long" | "narrow"`

Defines how weekday labels are formatted.

- `"short"` → Mon, Tue, Wed (default)
- `"long"` → Monday, Tuesday, Wednesday
- `"narrow"` → M, T, W

This does **not** affect ordering — only the label format.

---

### Return Value

The hook returns an array of 7 strings, each representing a weekday label.

**Week Starting on Sunday** `weekstart=0`

```ts
["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
```

**Week Starting on Monday** `weekstart=1`

```ts
["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
```

---

### Basic Usage

```js
const labels = useWeekdayLabels();
```

---

### Usage with locale

```js
const labels = useWeekdayLabels("fr-FR", 1);

return ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."];
```

---

### React Calendar Header Example

```tsx
const weekdayLabels = useWeekdayLabels("en-US", 1);

return (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)" }}>
    {weekdayLabels.map((label) => (
      <div key={label} style={{ textAlign: "center", fontWeight: "bold" }}>
        {label}
      </div>
    ))}
  </div>
);
```

---

**Usage with** `useCalendar` hook
This hook is commonly used together with useCalendar to build complete calendar UIs.

```tsx
const weekdayLabels = useWeekdayLabels("en-US", 1);
const days = useCalendar({
  year: 2026,
  month: 0,
  weekStart: 1,
  showExtraDays: true,
});
```

This ensures:

- Weekday headers
- Calendar grid
- Week start alignment are all perfectly synchronized

### How It Works (Internal Logic)

- Uses a fixed base Sunday date
- Iterates through 7 consecutive days
- Applies weekStart offset to reorder weekdays
- Formats each date using Intl `DateTimeFormat`

---

### Common Use Cases

- Calendar weekday headers
- Date picker components
- Scheduling interfaces
- Internationalized calendar UIs

---

### Notes

- Always returns **exactly 7 labels**
- Short weekday format is used `weekday: "short"`
- Fully browser-native, no external dependencies
- Works consistently across all modern browsers

---

### Summary

`useWeekdayLabels` is a simple, reliable, and fully localized hook for generating weekday headers in calendar-based UIs.
When combined with `useCalendar`, it enables building **standard, professional, and international-ready calendars** with minimal effort.
