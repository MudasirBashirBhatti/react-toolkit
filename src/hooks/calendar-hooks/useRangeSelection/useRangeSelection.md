# `useRangeSelection` Hook Documentation

## Overview

`useRangeSelection` is a flexible state management hook for handling **date range selection**.

It encapsulates the core logic needed to build **range-based date pickers**, allowing users to select a start and end date with intuitive behavior such as:

- Resetting the range
- Automatically ordering start/end dates
- Notifying external consumers of changes

This hook focuses on **range state and logic**, keeping UI and navigation concerns separate.

---

## Features

- Manages a `{ start, end }` date range
- Supports an optional **initial range**
- Provides an optional **onChange callback**
- Handles common range-selection edge cases
- Uses `useCallback` for stable handlers

---

## Types

```ts
export interface DateRange {
  start: Date | null;
  end: Date | null;
}
```

---

## Function Signature

```ts
useRangeSelection(
  initial?: DateRange,
  onChange?: (range: DateRange) => void
): {
  range: DateRange;
  selectDate: (date: Date) => void;
  clear: () => void;
}
```

---

## Parameters

### **initial** `(DateRange, optional)`

Initial range value.

- Default: `{ start: null, end: null }`
- Useful for editing existing ranges or restoring saved state

Example:

```ts
{ start: new Date(2026, 0, 5), end: new Date(2026, 0, 10) }
```

---

### **onChange** `(function, optional)`

Callback triggered whenever the range changes.

```ts
(range: DateRange) => void
```

Called when:

- A date is selected
- The range is reset

---

## Return Value

The hook returns an object containing:

---

### **range**

```ts
DateRange;
```

The currently selected date range:

- `start` → range start date
- `end` → range end date

---

### **selectDate**

```ts
(date: Date) => void
```

Handles range selection logic:

1. If no start exists → sets `start`
2. If range is complete → starts a new range
3. If selected date is before start → swaps start/end
4. Otherwise → sets `end`

Automatically keeps the range valid.

---

### **clear**

```ts
() => void
```

Resets the range to:

```ts
{ start: null, end: null }
```

Also triggers `onChange` if provided.

---

## Example Usage

### Basic Range Picker Logic

```tsx
import { useRangeSelection } from "@/hooks/useRangeSelection";

const RangePicker = () => {
  const { range, selectDate, clear } = useRangeSelection(undefined, (r) => {
    console.log("Range changed:", r);
  });

  return (
    <div>
      <button onClick={() => selectDate(new Date(2026, 0, 5))}>5</button>
      <button onClick={() => selectDate(new Date(2026, 0, 10))}>10</button>

      <p>
        Start: {range.start?.toDateString()}
        <br />
        End: {range.end?.toDateString()}
      </p>

      <button onClick={clear}>Clear</button>
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
if (!prev.start || (prev.start && prev.end)) {
  // Start new range
} else if (date < prev.start) {
  // Swap start and end
} else {
  // Set end date
}
```

- Ensures `start` is always before or equal to `end`
- Keeps selection behavior intuitive and predictable

---

## Common Use Cases

- Date range pickers
- Booking and reservation systems
- Analytics and reporting filters
- Availability and scheduling tools
- Calendar-based workflows

---

## Notes

- Time values are preserved in dates
- Comparison uses native JavaScript `Date`
- Business rules (min/max days) can be layered on top

---

## Recommended Combinations

This hook pairs especially well with:

- `useRangeDatePicker` → open/close UI
- `useDateRangeHover` → hover preview
- `useMultiMonthView` → multi-month layouts
- `useDateConstraints` → disabled dates

---

## Summary

`useRangeSelection` is a robust, reusable hook that:

- ✔ Simplifies range selection logic
- ✔ Handles common edge cases automatically
- ✔ Supports controlled and uncontrolled usage
- ✔ Integrates cleanly with calendar UIs

It serves as the **core range-selection engine** in a modern date picker architec
