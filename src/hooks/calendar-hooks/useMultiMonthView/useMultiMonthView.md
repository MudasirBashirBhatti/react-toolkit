# `useMultiMonthView` Hook Documentation

## Overview

`useMultiMonthView` is a navigation and state hook that enables **multi-month calendar views**.

It allows you to display **multiple consecutive months side by side** (for example: 2, 3, or more months) while maintaining a single navigation state.

This hook is commonly used in:

- Date range pickers (Airbnb-style)
- Booking and reservation calendars
- Timeline-style calendar views

---

## Features

- Displays multiple consecutive months at once
- Centralized navigation using a single base month
- Supports next / previous month navigation
- Dynamically configurable number of months
- Simple and predictable API

---

## Function Signature

```ts
useMultiMonthView(
  initialDate?: Date,
  monthsToShow?: number
): {
  visibleMonth: Date;
  months: Date[];
  nextMonth: () => void;
  prevMonth: () => void;
  setVisibleMonth: React.Dispatch<React.SetStateAction<Date>>;
}
```

---

## Parameters

### **initialDate** `(Date, optional)`

The starting month for the multi-month view.

- Default: `new Date()` (current month)

Example:

```ts
new Date(2026, 0, 1); // January 2026
```

---

### **monthsToShow** `(number, optional)`

Number of consecutive months to display.

- Default: `3`
- Common values: `2`, `3`, `6`

Example:

```ts
2; // Show two months side-by-side
```

---

## Return Value

The hook returns an object containing:

---

### **visibleMonth**

```ts
Date;
```

- The base (first) visible month
- All other months are derived from this

---

### **months**

```ts
Date[]
```

An array of `Date` objects representing each visible month.

Example (3 months):

```ts
[Jan 2026, Feb 2026, Mar 2026]
```

---

### **nextMonth**

```ts
() => void
```

Moves the multi-month view **forward by one month**.

---

### **prevMonth**

```ts
() => void
```

Moves the multi-month view **backward by one month**.

---

### **setVisibleMonth**

```ts
(date: Date | ((prev: Date) => Date)) => void
```

Allows direct control of the base month.

Useful for:

- Jumping to a specific month
- Syncing with external controls

---

## Example Usage

### Multi-Month Calendar View

```tsx
import { useMultiMonthView } from "@/hooks/useMultiMonthView";

const MultiMonthCalendar = () => {
  const { months, nextMonth, prevMonth } = useMultiMonthView(new Date(), 2);

  return (
    <div>
      <div className="flex gap-2">
        <button onClick={prevMonth}>◀</button>
        <button onClick={nextMonth}>▶</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {months.map((month) => (
          <div key={month.toISOString()}>
            <h3>
              {month.toLocaleString("default", { month: "long" })}{" "}
              {month.getFullYear()}
            </h3>
            {/* Month calendar grid */}
          </div>
        ))}
      </div>
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
Array.from(
  { length: monthsToShow },
  (_, i) => new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + i),
);
```

- Generates consecutive months relative to `visibleMonth`
- JavaScript `Date` automatically handles year rollover

---

## Common Use Cases

- Date range pickers
- Booking & availability calendars
- Travel and hotel selection UIs
- Multi-month scheduling views

---

## Notes

- Month index is **0-based** (JavaScript standard)
- Time values are not relevant
- Works best when combined with memoized month grids

---

## Recommended Combinations

This hook pairs especially well with:

- `useCalendar` → month grid generation
- `useAdvancedRangeSelection` → range logic
- `useDateRangeHover` → hover preview
- `useMonthNavigation` → single-month navigation

---

## Summary

`useMultiMonthView` is a powerful navigation hook that:

- ✔ Enables multi-month calendar layouts
- ✔ Simplifies range-picker UIs
- ✔ Centralizes month navigation logic
- ✔ Integrates seamlessly with calendar hooks

It serves as the \*\*foundation for modern, multi-month date picker expe
