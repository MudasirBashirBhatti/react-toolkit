# `useToday` Hook Documentation

## Overview

`useToday` is a small custom React utility hook that provides:

- The **current date** (`today`)
- A helper function to **check whether a given date is today**

It is commonly used in **calendar UIs**, **date pickers**, and **daily-based views** to highlight or detect the current day.

---

## Features

- Provides a single source of truth for **today’s date**
- Simple and readable **date comparison helper**
- Useful for conditional styling (e.g. highlighting today)
- Lightweight and easy to integrate

---

## Function Signature

```ts
useToday(): {
  today: Date;
  isToday: (date: Date) => boolean;
}
```

---

## Return Value

The hook returns an object containing:

### **today** `(Date)`
The current JavaScript `Date` object.

Example:
```ts
new Date()
```

---

### **isToday** `(function)`
A helper function that checks whether a given date matches **today**.

```ts
(date: Date) => boolean
```

Returns:
- `true` → if the date is today
- `false` → otherwise

---

## Example Usage

```tsx
import { useToday } from '@/hooks/useToday';

const CalendarDay = ({ date }: { date: Date }) => {
  const { today, isToday } = useToday();

  return (
    <div
      className={isToday(date) ? 'bg-blue-500 text-white' : 'bg-transparent'}
    >
      {date.getDate()}
    </div>
  );
};
```

---

## Sample Output

```ts
{
  today: Date,
  isToday: ƒ (date) => boolean
}
```

---

## How It Works (Internal Logic)

```ts
const today = new Date();
```
- Captures the current date at hook execution time

```ts
const isToday = (date: Date) =>
  date.toDateString() === today.toDateString();
```
- Converts both dates to readable strings
- Ignores time values
- Compares only **day, month, and year**

---

## Common Use Cases

- Highlighting today in calendar grids
- Marking the current day in schedules
- Daily task lists
- Attendance and activity tracking
- Date pickers

---

## Notes

- Time values are ignored during comparison
- The hook reflects the date at render time
- Safe for UI-level checks and styling

> ℹ️ If your app stays open across midnight, consider recalculating `today` periodically.

---

## Summary

`useToday` is a simple but powerful utility hook that:

- ✔ Exposes the current date
- ✔ Provides a clean way to detect today
- ✔ Works perfectly with calendar-related hooks
- ✔ Keeps UI logic readable and reusable

It pairs especially well with hooks like `useCalendar` and `useWeekNumbers` for building complete calendar systems.

