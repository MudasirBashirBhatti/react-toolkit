# `useFocusManagement` Hook Documentation

## Overview

`useFocusManagement` is a lightweight utility hook designed to manage **focused date state** without triggering re-renders.

It is especially useful for **keyboard navigation**, **accessibility (a11y)**, and **focus tracking** in calendar and date-picker components where focus needs to persist independently of UI state.

---

## Features

- Tracks the currently focused date
- Uses `useRef` (no re-renders on focus change)
- Ideal for keyboard navigation (arrow keys)
- Improves accessibility in calendar UIs
- Simple and composable

---

## Function Signature

```ts
useFocusManagement(): {
  focusedDateRef: React.MutableRefObject<Date | null>;
  setFocusedDate: (date: Date) => void;
}
```

---

## Return Value

The hook returns an object containing:

---

### **focusedDateRef**

```ts
React.MutableRefObject<Date | null>;
```

- Holds the currently focused date
- Updating this value **does not cause a re-render**
- Ideal for transient UI state like focus

---

### **setFocusedDate**

```ts
(date: Date) => void
```

- Updates the focused date reference
- Typically called on keyboard or mouse focus events

---

## Example Usage

### Keyboard Navigation in Calendar

```tsx
import { useFocusManagement } from "@/hooks/useFocusManagement";

const Calendar = ({ days }: { days: Date[] }) => {
  const { focusedDateRef, setFocusedDate } = useFocusManagement();

  return (
    <div>
      {days.map((date) => (
        <button
          key={date.toISOString()}
          onFocus={() => setFocusedDate(date)}
          className={
            focusedDateRef.current?.toDateString() === date.toDateString()
              ? "ring-2 ring-blue-500"
              : ""
          }
        >
          {date.getDate()}
        </button>
      ))}
    </div>
  );
};
```

---

## How It Works (Internal Logic)

```ts
const focusedDateRef = useRef<Date | null>(null);
```

- Stores focused date outside of React state
- Prevents unnecessary re-renders during navigation

```ts
const setFocusedDate = (date: Date) => {
  focusedDateRef.current = date;
};
```

- Mutates ref value directly
- Keeps focus logic fast and predictable

---

## Common Use Cases

- Keyboard navigation in calendars
- Accessibility (roving tabindex)
- Focus persistence between renders
- Date picker arrow-key navigation
- Complex calendar UIs

---

## Notes

- This hook does **not** control DOM focus directly
- Designed to **track focus state**, not apply it
- Combine with keyboard handlers for full a11y support

---

## Recommended Combinations

This hook pairs especially well with:

- `useDatePicker` → open / close control
- `useCalendar` → calendar grid
- `useDateSelection` → selected date
- `useDateRangeHover` → range previews

---

## Summary

`useFocusManagement` is a focused (pun intended 😉) utility hook that:

- ✔ Enables efficient focus tracking
- ✔ Avoids unnecessary re-renders
- ✔ Improves accessibility in calendar UIs
- ✔ Complements keyboard-driven interactions

It completes the **accessibility and interaction layer** of a modern, production-ready date picker system.
