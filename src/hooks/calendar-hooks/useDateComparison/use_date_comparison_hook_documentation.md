# `useDateComparison` Hook Documentation

## Overview

`useDateComparison` is a lightweight utility hook that provides a set of **reusable date comparison helpers**.

It centralizes common date comparison logic used across **calendars**, **date pickers**, **range selections**, and **scheduling UIs**, keeping components clean and readable.

---

## Features

- Compare two dates for **same day** equality
- Check whether a date is **before** or **after** another date
- Determine whether a date lies **within a given range**
- Simple, predictable, and UI-friendly

---

## Function Signature

```ts
useDateComparison(): {
  isSameDay: (a: Date, b: Date) => boolean;
  isBefore: (a: Date, b: Date) => boolean;
  isAfter: (a: Date, b: Date) => boolean;
  isInRange: (date: Date, start: Date, end: Date) => boolean;
}
```

---

## Returned Helpers

### **isSameDay**

```ts
(a: Date, b: Date) => boolean
```

Checks whether two dates fall on the **same calendar day**.

- Ignores time values
- Compares only **day, month, and year**

Example:
```ts
isSameDay(new Date(), new Date()); // true
```

---

### **isBefore**

```ts
(a: Date, b: Date) => boolean
```

Returns `true` if date **a occurs before b**.

Example:
```ts
isBefore(new Date(2026, 0, 1), new Date(2026, 0, 10)); // true
```

---

### **isAfter**

```ts
(a: Date, b: Date) => boolean
```

Returns `true` if date **a occurs after b**.

Example:
```ts
isAfter(new Date(2026, 0, 10), new Date(2026, 0, 1)); // true
```

---

### **isInRange**

```ts
(date: Date, start: Date, end: Date) => boolean
```

Checks whether a date falls **within an inclusive range**.

- Includes both `start` and `end`

Example:
```ts
isInRange(
  new Date(2026, 0, 5),
  new Date(2026, 0, 1),
  new Date(2026, 0, 10)
); // true
```

---

## Example Usage

```tsx
import { useDateComparison } from '@/hooks/useDateComparison';

const CalendarDay = ({ date, start, end }: any) => {
  const { isSameDay, isInRange } = useDateComparison();

  const isSelected = start && end && isInRange(date, start, end);

  return (
    <div className={isSelected ? 'bg-blue-200' : ''}>
      {date.getDate()}
    </div>
  );
};
```

---

## Sample Output

```ts
{
  isSameDay: ƒ,
  isBefore: ƒ,
  isAfter: ƒ,
  isInRange: ƒ,
}
```

---

## How It Works (Internal Logic)

```ts
isSameDay → toDateString comparison
isBefore  → getTime() < comparison
isAfter   → getTime() > comparison
isInRange → inclusive >= <= comparison
```

All comparisons rely on **native JavaScript Date behavior**, keeping logic fast and dependency-free.

---

## Common Use Cases

- Calendar day highlighting
- Date range pickers
- Booking and reservation systems
- Attendance and availability calendars
- Timeline and scheduling components

---

## Notes

- `isSameDay` ignores time values
- Other helpers are **time-sensitive**
- For day-level comparisons, normalize times if needed

---

## Summary

`useDateComparison` is a small but essential utility hook that:

- ✔ Eliminates repetitive date comparison logic
- ✔ Improves readability of calendar components
- ✔ Works seamlessly with range and calendar hooks
- ✔ Keeps business logic centralized

It pairs perfectly with `useCalendar`, `useToday`, and `useAdvancedRangeSelection` to form a complete calendar toolkit.

