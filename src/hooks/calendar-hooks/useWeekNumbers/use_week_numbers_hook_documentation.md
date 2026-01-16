# `useWeekNumbers` Hook Documentation

## Overview

`useWeekNumbers` is a custom utility hook that calculates **ISO-8601 week numbers** for a given **year and month**.

It is mainly used in **calendar-based UIs** where week numbers are displayed alongside rows (for example: Google Calendar–style week labels).

The hook follows the official ISO week rules:
- Weeks start on **Monday**
- **Week 1** is the week that contains **January 4th**

---

## Features

- Generates **ISO week numbers** for a full calendar month
- Returns up to **6 week numbers** (maximum rows in a month view)
- Timezone-safe calculation using **UTC dates**
- Fully compatible with **calendar grid layouts**

---

## Function Signature

```ts
useWeekNumbers(year: number, month: number): number[]
```

---

## Parameters

### **year** `(number)`  
Calendar year.

Example:
```ts
2026
```

---

### **month** `(number)`  
JavaScript month index (**0-based**):

- `0` → January
- `11` → December

Example:
```ts
0 // January
```

---

## Return Value

The hook returns an array of **ISO week numbers**:

```ts
number[]
```

Each number represents the ISO week for one row of the calendar grid.

---

## Sample Output

```js
[1, 2, 3, 4, 5, 6]
```

Or:

```js
[34, 35, 36, 37, 38, 39]
```

> The array length is always **6**, matching a standard monthly calendar layout.

---

## Example Usage

```tsx
import { useWeekNumbers } from '@/hooks/useWeekNumbers';

const CalendarWithWeeks = () => {
  const weeks = useWeekNumbers(2026, 0); // January 2026

  return (
    <div>
      {weeks.map((week) => (
        <div key={week}>Week {week}</div>
      ))}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

1. Takes the **first day of the selected month**
2. Iterates through **6 weeks** (calendar row limit)
3. For each week:
   - Moves the date forward by `7 × index` days
   - Converts the date to **ISO week format**
4. Uses UTC-based calculations to avoid timezone issues

---

## ISO Week Calculation Rules

Internally, the hook:

- Treats **Monday as the first day of the week**
- Moves the date to the **Thursday of the same week**
- Calculates the number of weeks since **January 1st** of the ISO year

This guarantees correct ISO week numbers even at **year boundaries**.

---

## Common Use Cases

- Calendar month views with week labels
- Sprint planning boards
- Timesheets and work logs
- Scheduling and booking systems
- Job activity tracking calendars

---

## Notes

- Month is **0-based** (JavaScript standard)
- Week numbers may belong to the **previous or next year** (ISO behavior)
- Designed to pair well with a `useCalendar`-style hook

---

## Summary

`useWeekNumbers` is a small but powerful hook that:

- ✔ Produces ISO-compliant week numbers
- ✔ Fits perfectly into monthly calendar grids
- ✔ Handles year edge cases correctly
- ✔ Works seamlessly with React and Next.js

It is ideal for any calendar UI that needs **accurate weekly labeling**.

