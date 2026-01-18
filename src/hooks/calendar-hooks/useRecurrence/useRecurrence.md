# `useRecurrence` Hook Documentation

## Overview

`useRecurrence` is a utility hook for generating **recurring dates** based on a configurable recurrence rule.

It is useful for building features like:

- Repeating events
- Schedules and reminders
- Calendar recurrences (daily, weekly, monthly, yearly)

The hook starts from a given date and generates future occurrences according to the provided rule.

---

## Features

- Supports **daily, weekly, monthly, and yearly** recurrence
- Configurable recurrence **intervals** (e.g. every 2 weeks)
- Optional **weekday filtering**
- Predictable, deterministic output
- Lightweight and dependency-free

---

## Types

```ts
export interface RecurrenceRule {
  frequency: "daily" | "weekly" | "monthly" | "yearly";
  interval?: number; // every n units
  weekdays?: number[]; // 0 = Sunday, 6 = Saturday
}
```

---

## Function Signature

```ts
useRecurrence(
  start: Date,
  rule: RecurrenceRule
): {
  getOccurrences: (count?: number) => Date[];
}
```

---

## Parameters

### **start** `(Date)`

The starting date of the recurrence pattern.

Example:

```ts
new Date(2026, 0, 1);
```

---

### **rule** `(RecurrenceRule)`

Defines how the recurrence behaves.

#### **frequency** (required)

- `daily`
- `weekly`
- `monthly`
- `yearly`

---

#### **interval** `(number, optional)`

Specifies how often the recurrence repeats.

- Default: `1`

Examples:

- Every **day** → `interval: 1`
- Every **2 weeks** → `frequency: 'weekly', interval: 2`

---

#### **weekdays** `(number[], optional)`

Limits occurrences to specific weekdays.

- `0` → Sunday
- `6` → Saturday

Example:

```ts
weekdays: [1, 3, 5]; // Mon, Wed, Fri
```

---

## Return Value

The hook returns an object containing:

---

### **getOccurrences**

```ts
(count?: number) => Date[]
```

Generates a list of future occurrence dates.

- `count` → number of occurrences to generate
- Default: `10`

---

## Sample Output

```ts
getOccurrences(3);
// [Date, Date, Date]
```

---

## Example Usage

### Weekly Recurring Event

```tsx
import { useRecurrence } from "@/hooks/useRecurrence";

const RecurringSchedule = () => {
  const { getOccurrences } = useRecurrence(new Date(2026, 0, 1), {
    frequency: "weekly",
    interval: 1,
    weekdays: [1], // Monday
  });

  const dates = getOccurrences(5);

  return (
    <ul>
      {dates.map((d) => (
        <li key={d.toISOString()}>{d.toDateString()}</li>
      ))}
    </ul>
  );
};
```

---

## How It Works (Internal Logic)

- Starts from the provided `start` date
- Moves the date forward based on `frequency` and `interval`
- Filters out dates not matching `weekdays` (if provided)
- Continues until the requested number of occurrences is generated

```ts
while (occurrences.length < count) {
  // advance date
  // check weekday filter
  // push valid occurrences
}
```

---

## Common Use Cases

- Repeating calendar events
- Task or habit tracking
- Scheduling systems
- Reminders and notifications
- Booking systems with recurring availability

---

## Notes & Limitations

- Occurrences are generated **after** the start date (start is not included)
- Time values are preserved
- Monthly edge cases (e.g. Feb 30) follow JavaScript `Date` behavior
- Not a full RFC 5545 (iCal) recurrence engine

---

## Recommended Combinations

This hook pairs well with:

- `useCalendar` → visualize occurrences
- `useDateHighlights` → mark recurring events
- `useDateFormatting` → display formatted dates
- `useMultiMonthView` → multi-month views

---

## Summary

`useRecurrence` is a practical recurrence helper hook that:

- ✔ Handles common repeat patterns
- ✔ Supports intervals and weekday filters
- ✔ Keeps recurrence logic centralized
- ✔ Integrates naturally with calendar systems

It serves as the **recurrence engine** for scheduling and event-based calendar features.
