# `useAdvancedRangeSelection` Hook Documentation

## Overview

`useAdvancedRangeSelection` is a custom React hook designed to manage **date range selection** with optional **validation rules** such as minimum and maximum allowed days.

It is ideal for **date range pickers**, **booking systems**, **rental periods**, and any UI where users must select a valid start and end date.

---

## Features

- Manages **start and end date** of a range
- Intelligent date selection behavior
- Supports **minimum** and **maximum** range length constraints
- Prevents invalid range selections automatically
- Provides helpers to **reset** or **manually update** the range

---

## Function Signature

```ts
useAdvancedRangeSelection(rules?: RangeRules): {
  range: {
    start: Date | null;
    end: Date | null;
  };
  selectDate: (date: Date) => void;
  clear: () => void;
  setRange: React.Dispatch<
    React.SetStateAction<{ start: Date | null; end: Date | null }>
  >;
}
```

---

## Parameters

### **rules** `(optional)`
An optional configuration object to enforce range constraints.

```ts
interface RangeRules {
  maxDays?: number; // Maximum allowed days in a range
  minDays?: number; // Minimum required days in a range
}
```

#### Rule Behavior

- **maxDays** → prevents selecting a range longer than the given number of days
- **minDays** → prevents selecting a range shorter than the given number of days

If a rule is violated, the selection is ignored.

---

## Return Value

The hook returns an object containing:

### **range**

```ts
{
  start: Date | null;
  end: Date | null;
}
```

- `start` → first selected date
- `end` → last selected date

---

### **selectDate**

```ts
(date: Date) => void
```

Handles date selection logic:

- Starts a new range if no start exists
- Resets the range if both start and end already exist
- Calculates day difference when selecting the end date
- Enforces `minDays` and `maxDays` rules
- Updates the range only if valid

---

### **clear**

```ts
() => void
```

Resets the range back to:

```ts
{ start: null, end: null }
```

---

### **setRange**

Allows direct control over the range state.

Useful for:
- Programmatic updates
- Pre-filled ranges
- Editing existing selections

---

## Example Usage

```tsx
import { useAdvancedRangeSelection } from '@/hooks/useAdvancedRangeSelection';

const DateRangePicker = () => {
  const { range, selectDate, clear } = useAdvancedRangeSelection({
    minDays: 2,
    maxDays: 7,
  });

  return (
    <div>
      <button onClick={() => selectDate(new Date(2026, 0, 10))}>10</button>
      <button onClick={() => selectDate(new Date(2026, 0, 15))}>15</button>

      <div>
        Start: {range.start?.toDateString()}
        <br />
        End: {range.end?.toDateString()}
      </div>

      <button onClick={clear}>Clear</button>
    </div>
  );
};
```

---

## Sample Output

```ts
{
  range: {
    start: Date,
    end: Date,
  }
}
```

Or when cleared:

```ts
{
  range: {
    start: null,
    end: null,
  }
}
```

---

## How It Works (Internal Logic)

1. Stores the range in React state
2. On first click → sets `start`
3. On second click → calculates day difference
4. Validates against `minDays` / `maxDays`
5. Sets `end` only if rules are satisfied
6. If both `start` and `end` exist → starts a new range

---

## Common Use Cases

- Hotel / room booking systems
- Rental and reservation platforms
- Vacation or leave planners
- Date range filters
- Calendar-based scheduling apps

---

## Notes

- Day difference is calculated using full days (`86400000 ms`)
- Time values can affect results if dates include time components
- Works best when used with calendar selection hooks

---

## Summary

`useAdvancedRangeSelection` is a powerful and flexible hook that:

- ✔ Simplifies date range selection
- ✔ Enforces business rules at the hook level
- ✔ Prevents invalid user input
- ✔ Integrates cleanly with calendar UIs

It pairs perfectly with hooks like `useCalendar`, `useWeekNumbers`, and `useToday` to build robust date-picker systems.

