# `useCalendar` Hook Documentation

## Overview

`useCalendar` is a custom React hook that generates a structured list of days for a month-based calendar view.  
It is designed to make building calendar UIs easier by providing all required date metadata for each calendar cell.

The hook uses `useMemo` to avoid unnecessary recalculations and improve performance.

---

## Features

- Generates **all days of the selected month**
- Adds **leading days from the previous month** to properly align the calendar
- Provides metadata for each day, including:
  - JavaScript `Date` object
  - Day number (1–31, or `0` for extra days)
  - Whether the day belongs to the current month
- - Supports **optional display of extra days** (`showExtraDays`) for previous/next months

---

## Function Signature

```ts
useCalendar({year: number, month: number, weekStart?: 0 | 1,showExtraDays?: boolean}): CalendarDay[]
```

---

### Parameters

**year** (number)  
Calendar year.  
Example: `2024`

**month** (number)  
JavaScript month index (0-based)

- `0` → January
- `11` → December  
  Example: `0`

**weekStart** `(0 or 1, optional)`
Starting day of the week

- `0` → Sunday (default)
- `1` → Monday  
  Example: `1`

**showExtraDays** `(boolean, optional)`
Controls whether to display extra days from previous/next months to fill the calendar grid.

- `true` → Show previous/next month days (default for typical interactive calendars)

- `false` → Do not show extra days; cells before the first day of the month are left empty
  Example: `true`

---

### Return Value

The hook returns an array of `CalendarDay` objects:

```js
interface CalendarDay {
  date: Date; // Full JavaScript Date object
  day: number; // 1–31, or 0 for extra (non-month) days
  isCurrentMonth: boolean; // Whether the day belongs to the selected month
}
```

---

### Example Usage

```js
const days = useCalendar({
  year: 2026,
  month: 0,
  weekStart: 0 | 1,
  showExtraDays: false | true,
});
```

---

### Sample Output

```js
[
  { date: Date, day: 0, isCurrentMonth: false },
  { date: Date, day: 1, isCurrentMonth: true },
  { date: Date, day: 2, isCurrentMonth: true },
  ...
]

```

---

### How It Works (Internal Logic)

- Determines the **first day of the selected month**
- Adjusts the start position based on `weekStart`
- Adds **leading days from the previous month** to align the calendar grid
- Appends **all days of the current month**

---

### Common Use Cases

- Monthly calendar UIs
- Date pickers
- Booking and scheduling systems
- Attendance and availability calendars

---

### Notes

- Extra (non-current-month) days always have `day = 0`

- `isCurrentMonth` can be used for conditional styling or disabling dates

- Optimized for performance using `useMemo`

---

### Summary

`useCalendar` is a clean, reusable, and flexible hook for building month-based calendar interfaces, supporting both Sunday and Monday week starts with clear date metadata.
