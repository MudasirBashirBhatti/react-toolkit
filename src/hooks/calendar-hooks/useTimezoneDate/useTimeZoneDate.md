# `useTimeZoneDate` Hook Documentation

## Overview

`useTimeZoneDate` is a utility hook that converts a JavaScript `Date` into a **specific time zone** using the built-in `Intl.DateTimeFormat` API.

It is especially useful when working with:

- Multi-timezone applications
- Server-stored UTC dates
- Calendars showing dates in user-selected time zones
- Scheduling and global event systems

This hook focuses on **day-level correctness across time zones**.

---

## Features

- Converts dates to a target time zone
- Uses native `Intl.DateTimeFormat`
- Handles time zone differences safely
- Simple, minimal API
- No external dependencies

---

## Function Signature

```ts
useTimeZoneDate(
  timeZone?: string
): {
  toTimeZone: (date: Date) => Date;
}
```

---

## Parameters

### **timeZone** `(string, optional)`

IANA time zone identifier used for conversion.

- Default: `'UTC'`

Examples:

```ts
"UTC";
"Asia/Karachi";
"America/New_York";
"Europe/London";
```

---

## Return Value

The hook returns an object containing:

---

### **toTimeZone**

```ts
(date: Date) => Date;
```

Converts the provided date into the specified time zone.

- Returns a **new `Date` instance**
- Preserves the correct **calendar day** for the target time zone

---

## Example Usage

### Display Date in User Time Zone

```tsx
import { useTimeZoneDate } from "@/hooks/useTimeZoneDate";

const TimeZoneDateExample = () => {
  const { toTimeZone } = useTimeZoneDate("Asia/Karachi");

  const utcDate = new Date("2026-01-01T00:00:00Z");
  const localDate = toTimeZone(utcDate);

  return <p>{localDate.toDateString()}</p>;
};
```

---

## How It Works (Internal Logic)

```ts
new Intl.DateTimeFormat("en-US", {
  timeZone,
  year: "numeric",
  month: "numeric",
  day: "numeric",
}).format(date);
```

- Formats the input date in the target time zone
- Produces a locale-safe date string
- Creates a new `Date` from the formatted output

This ensures **correct day conversion** regardless of the user’s local time zone.

---

## Common Use Cases

- Converting UTC dates to user locale time zones
- Global scheduling systems
- Multi-region calendars
- Event dates in dashboards
- Time-zone–aware reporting

---

## Notes & Limitations

- This hook focuses on **date (Y/M/D)** accuracy, not time-of-day precision
- Time information beyond day-level is not preserved
- For full DateTime conversions, a more advanced approach may be required

---

## Recommended Combinations

This hook pairs especially well with:

- `useDateFormatting` → display localized dates
- `useRecurrence` → recurring events across time zones
- `useCalendar` → calendar rendering
- `useTimeSelection` → date + time workflows

---

## Summary

`useTimeZoneDate` is a focused and reliable hook that:

- ✔ Handles time zone–safe date conversion
- ✔ Avoids common UTC/local pitfalls
- ✔ Keeps time zone logic centralized
- ✔ Integrates seamlessly with calendar systems

It completes the **time zone handling layer** of a modern, global-ready date and scheduling archit
