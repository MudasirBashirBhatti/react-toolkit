# `useDateConstraints` Hook Documentation

## Overview

`useDateConstraints` is a utility hook that centralizes **date disabling logic** based on configurable constraints such as minimum date, maximum date, and custom rules.

It is especially useful in **calendars**, **date pickers**, and **booking systems** where certain dates must be blocked from selection.

---

## Features

- Enforces **minimum date** restrictions
- Enforces **maximum date** restrictions
- Supports **custom disabled-date logic** via callback
- Simple API for checking if a date should be disabled
- Easy to combine with other calendar hooks

---

## Function Signature

```ts
useDateConstraints(constraints: DateConstraints): {
  isDisabled: (date: Date) => boolean;
}
```

---

## Parameters

### **constraints** `(DateConstraints)`

```ts
export interface DateConstraints {
  min?: Date;
  max?: Date;
  disabled?: (date: Date) => boolean;
}
```

#### Constraint Behavior

- **min** → disables all dates **before** this date
- **max** → disables all dates **after** this date
- **disabled** → custom function for advanced rules

If **any condition** matches, the date is considered disabled.

---

## Return Value

The hook returns an object containing:

### **isDisabled**

```ts
(date: Date) => boolean
```

Checks whether a date should be blocked from selection.

Returns:
- `true` → date is disabled
- `false` → date is selectable

---

## Example Usage

```tsx
import { useDateConstraints } from '@/hooks/useDateConstraints';

const CalendarDay = ({ date }: { date: Date }) => {
  const { isDisabled } = useDateConstraints({
    min: new Date(2026, 0, 5),
    max: new Date(2026, 0, 20),
    disabled: (d) => d.getDay() === 0, // Disable Sundays
  });

  return (
    <button
      disabled={isDisabled(date)}
      className={isDisabled(date) ? 'opacity-40 cursor-not-allowed' : ''}
    >
      {date.getDate()}
    </button>
  );
};
```

---

## Sample Output

```ts
{
  isDisabled: ƒ (date) => boolean
}
```

---

## How It Works (Internal Logic)

The hook checks constraints **in order**:

1. If `min` exists and date is before it → disabled
2. If `max` exists and date is after it → disabled
3. If `disabled` callback returns true → disabled
4. Otherwise → enabled

```ts
if (min && date < min) return true;
if (max && date > max) return true;
if (disabled && disabled(date)) return true;
```

---

## Common Use Cases

- Booking systems (block past or future dates)
- Date pickers with availability rules
- Disabling weekends or holidays
- Preventing selection outside business rules
- Calendar-based scheduling apps

---

## Notes

- Date comparisons include **time values**
- Normalize dates if day-level comparison is required
- `disabled` callback allows unlimited flexibility

---

## Summary

`useDateConstraints` is a clean and reusable hook that:

- ✔ Centralizes date disabling rules
- ✔ Keeps calendar components simple
- ✔ Supports both static and dynamic constraints
- ✔ Integrates seamlessly with other date hooks

It pairs perfectly with `useCalendar`, `useDateComparison`, and `useAdvancedRangeSelection` to build robust, rule-driven date selection systems.

