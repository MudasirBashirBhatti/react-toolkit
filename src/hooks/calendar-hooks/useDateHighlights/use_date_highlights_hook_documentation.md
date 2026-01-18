# `useDateHighlights` Hook Documentation

## Overview

`useDateHighlights` is a utility hook that enables **highlighting specific dates** in calendar-based UIs and optionally displaying **labels or annotations** for those dates.

It is ideal for scenarios such as:
- Events
- Holidays
- Deadlines
- Reminders
- Special marked days in a calendar

---

## Features

- Highlights specific dates based on input data
- Supports **labels** for highlighted dates
- Simple day-level comparison (ignores time)
- Lightweight and easy to integrate
- Perfect for calendar and date-picker components

---

## Function Signature

```ts
useDateHighlights(
  events?: { date: Date; label: string }[]
): {
  isHighlighted: (date: Date) => boolean;
  getLabel: (date: Date) => string | undefined;
}
```

---

## Parameters

### **events** `(optional)`

An array of date objects with labels:

```ts
{
  date: Date;
  label: string;
}[]
```

Each entry represents a date that should be highlighted along with a descriptive label.

If no events are provided, the hook defaults to an empty list.

---

## Return Value

The hook returns an object containing:

---

### **isHighlighted**

```ts
(date: Date) => boolean
```

Checks whether a given date exists in the events list.

Returns:
- `true` → date should be highlighted
- `false` → normal date

---

### **getLabel**

```ts
(date: Date) => string | undefined
```

Returns the label associated with the date (if any).

- If the date is highlighted → returns its label
- If not → returns `undefined`

---

## Sample Input

```ts
const events = [
  { date: new Date(2026, 0, 1), label: 'New Year' },
  { date: new Date(2026, 0, 15), label: 'Project Deadline' },
];
```

---

## Sample Output

```ts
isHighlighted(new Date(2026, 0, 1)); // true
getLabel(new Date(2026, 0, 1));      // 'New Year'

isHighlighted(new Date(2026, 0, 5)); // false
getLabel(new Date(2026, 0, 5));      // undefined
```

---

## Example Usage

```tsx
import { useDateHighlights } from '@/hooks/useDateHighlights';

const CalendarDay = ({ date }: { date: Date }) => {
  const { isHighlighted, getLabel } = useDateHighlights([
    { date: new Date(2026, 0, 1), label: 'New Year' },
    { date: new Date(2026, 0, 15), label: 'Deadline' },
  ]);

  return (
    <div className={isHighlighted(date) ? 'bg-yellow-200' : ''}>
      {date.getDate()}
      {isHighlighted(date) && (
        <span className="text-xs block">{getLabel(date)}</span>
      )}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
isHighlighted → Array.some + toDateString()
getLabel      → Array.find + toDateString()
```

- Uses day-level comparison
- Ignores time values
- Relies on native JavaScript `Date`

---

## Common Use Cases

- Highlighting holidays in calendars
- Marking events or deadlines
- Showing reminders in date pickers
- Annotated scheduling views
- Visual indicators in booking systems

---

## Notes

- Time values are ignored during comparison
- Best used with normalized date inputs
- For large event lists, consider memoization

---

## Summary

`useDateHighlights` is a simple yet powerful hook that:

- ✔ Adds visual meaning to calendar dates
- ✔ Supports labeled highlights
- ✔ Keeps event logic out of UI components
- ✔ Integrates seamlessly with other date hooks

It pairs naturally with `useCalendar`, `useToday`, `useDateComparison`, and `useDateFormatting` to build rich, informative calendar experiences.

