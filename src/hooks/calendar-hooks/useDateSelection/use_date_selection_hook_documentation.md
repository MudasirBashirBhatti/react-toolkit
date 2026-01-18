# `useDateSelection` Hook Documentation

## Overview

`useDateSelection` is a controlled/uncontrolled helper hook for managing **single date selection**.

It encapsulates common logic needed for **single-date pickers**, allowing components to:
- Track the currently selected date
- React to selection changes via a callback
- Reset the selection when needed

This hook is intentionally simple and composable, making it ideal as a **building block** for larger date-picker systems.

---

## Features

- Manages a single selected date
- Supports an **initial value**
- Provides an optional **onChange callback**
- Exposes clean helper methods (`selectDate`, `clear`)
- Uses `useCallback` for stable references

---

## Function Signature

```ts
useDateSelection(
  initial?: Date | null,
  onChange?: (date: Date | null) => void
): {
  selectedDate: Date | null;
  selectDate: (date: Date) => void;
  clear: () => void;
}
```

---

## Parameters

### **initial** `(Date | null, optional)`

Initial selected date.

- Default: `null`
- Useful for pre-filled values (edit forms, saved state)

Example:
```ts
new Date(2026, 0, 15)
```

---

### **onChange** `(function, optional)`

Callback triggered whenever the selected date changes.

```ts
(date: Date | null) => void
```

Called when:
- A new date is selected
- The selection is cleared

---

## Return Value

The hook returns an object containing:

---

### **selectedDate**

```ts
Date | null
```

Represents the currently selected date.

---

### **selectDate**

```ts
(date: Date) => void
```

- Updates the selected date
- Triggers `onChange` callback (if provided)

---

### **clear**

```ts
() => void
```

- Clears the selected date
- Sets state back to `null`
- Triggers `onChange(null)` if provided

---

## Example Usage

### Basic Single Date Picker

```tsx
import { useDateSelection } from '@/hooks/useDateSelection';

const SingleDatePicker = () => {
  const { selectedDate, selectDate, clear } = useDateSelection(null, (date) => {
    console.log('Selected:', date);
  });

  return (
    <div>
      <button onClick={() => selectDate(new Date())}>Today</button>
      <button onClick={clear}>Clear</button>

      <p>{selectedDate?.toDateString() || 'No date selected'}</p>
    </div>
  );
};
```

---

## Sample Output

```ts
{
  selectedDate: Date,
  selectDate: ƒ,
  clear: ƒ
}
```

Or when cleared:

```ts
{
  selectedDate: null
}
```

---

## How It Works (Internal Logic)

- Uses `useState` to store the selected date
- Wraps handlers in `useCallback` to avoid unnecessary re-renders
- Calls `onChange` whenever state changes

This makes the hook safe to pass into deeply nested components.

---

## Common Use Cases

- Single-date pickers
- Birthdate selectors
- Deadline or due-date inputs
- Filters with a single date value
- Form-controlled date inputs

---

## Notes

- This hook is for **single-date selection only**
- Time values are preserved in the selected date
- Can be used in both controlled and semi-controlled patterns

---

## Recommended Combinations

This hook pairs well with:

- `useCalendar` → date grid
- `useDatePicker` → open / close control
- `useDateFormatting` → display formatting
- `useDateConstraints` → disabling invalid dates

---

## Summary

`useDateSelection` is a clean, focused hook that:

- ✔ Simplifies single-date state management
- ✔ Supports callbacks for external sync
- ✔ Keeps components declarative
- ✔ Fits naturally into larger date-picker systems

It acts as the **single-date counterpart** to `useAdvancedRangeSelection` in a complete calendar architecture.

