# `useMonthNavigation` Hook Documentation

## Overview

`useMonthNavigation` is a state management hook that controls **month-to-month navigation** in calendar and date picker components.

It tracks the currently visible month and exposes helper functions to move **forward** or **backward** by one month, making it ideal for building calendar headers with **Previous / Next** controls.

---

## Features

- Tracks the currently visible month
- Provides helpers for **next** and **previous** month navigation
- Exposes derived `year` and `month` values
- Allows manual control via `setVisibleMonth`
- Uses `useCallback` for stable handlers

---

## Function Signature

```ts
useMonthNavigation(
  initialDate?: Date
): {
  visibleMonth: Date;
  year: number;
  month: number;
  nextMonth: () => void;
  prevMonth: () => void;
  setVisibleMonth: React.Dispatch<React.SetStateAction<Date>>;
}
```

---

## Parameters

### **initialDate** `(Date, optional)`

The initial month to display.

- Default: `new Date()` (current month)
- Time portion is ignored for navigation purposes

Example:

```ts
new Date(2026, 0, 1); // January 2026
```

---

## Return Value

The hook returns an object containing:

---

### **visibleMonth**

```ts
Date;
```

- Represents the currently visible month
- Internally stored as a JavaScript `Date`

---

### **year**

```ts
number;
```

- Derived from `visibleMonth`
- Useful for calendar headers

---

### **month**

```ts
number;
```

- Zero-based month index (`0` = January, `11` = December)
- Matches JavaScript `Date` conventions

---

### **nextMonth**

```ts
() => void
```

Moves the calendar forward by **one month**.

---

### **prevMonth**

```ts
() => void
```

Moves the calendar backward by **one month**.

---

### **setVisibleMonth**

```ts
(date: Date | ((prev: Date) => Date)) => void
```

Allows direct control over the visible month.

Useful for:

- Jumping to a specific month
- Syncing with external state
- Implementing month/year dropdowns

---

## Example Usage

### Calendar Header Navigation

```tsx
import { useMonthNavigation } from "@/hooks/useMonthNavigation";

const CalendarHeader = () => {
  const { year, month, nextMonth, prevMonth } = useMonthNavigation();

  return (
    <div className="flex items-center gap-2">
      <button onClick={prevMonth}>◀</button>
      <span>
        {month + 1} / {year}
      </span>
      <button onClick={nextMonth}>▶</button>
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
setVisibleMonth((d) => new Date(d.getFullYear(), d.getMonth() + 1));
```

- JavaScript `Date` automatically handles year overflow
- Moving from December → January adjusts the year
- Moving from January → December adjusts the year

---

## Common Use Cases

- Calendar month navigation
- Date picker headers
- Booking and scheduling interfaces
- Month-based reports
- Timeline navigation

---

## Notes

- Month index is **0-based**
- Time values are not relevant for month navigation
- Safe to combine with memoized calendar grids

---

## Recommended Combinations

This hook pairs especially well with:

- `useCalendar` → month grid generation
- `useWeekNumbers` → ISO week labels
- `useDatePicker` → open/close UI
- `useKeyboardNavigation` → keyboard month navigation

---

## Summary

`useMonthNavigation` is a clean and reliable hook that:

- ✔ Simplifies month-to-month navigation
- ✔ Exposes useful derived values
- ✔ Keeps calendar headers declarative
- ✔ Integrates seamlessly with other date hooks

It serves as the **navigation backbone** of any calendar or date picker
